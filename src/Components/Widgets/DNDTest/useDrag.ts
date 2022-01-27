import { useState, useEffect } from 'react';
import { TTranslate } from './test2';


const useDrag = (ref:any, deps:any, options:any) => {
  const {
    onPointerDown = () => {},
    onPointerUp = () => {},
    onPointerMove = () => {},
    onDrag = () => {},
  } = options;  

  const [isDragging, setIsDragging] = useState(false);
  // const [depsProps,_] = useState<TTranslate[]>(deps);

  const handlePointerDown = (e:any) => {
    setIsDragging(true);

    onPointerDown(e);
  };

  const handlePointerUp = (e:any) => {
    setIsDragging(false);

    onPointerUp(e);
  };

  const handlePointerMove = (e:any) => {
    onPointerMove(e);

    if (isDragging) {
      onDrag(e);
    }
  };

  useEffect(() => {
    const element = ref.current;
    if (element) {
      element.addEventListener('pointerdown', handlePointerDown);
      element.addEventListener('pointerup', handlePointerUp);
      element.addEventListener('pointermove', handlePointerMove);

      return () => {
        element.removeEventListener('mousedown', handlePointerDown);
        element.removeEventListener('mouseup', handlePointerUp);
        element.removeEventListener('mousemove', handlePointerMove);
      };
    }

    return () => {};
  }, [ isDragging]);

  return { ...deps, isDragging };
};

export default useDrag;