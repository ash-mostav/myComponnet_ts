import styled from "styled-components/macro"
import useDrag from "./useDrag";
import { useRef, useState } from "react";
export type TTranslate={
  x?:number;
  y?:number;
}


function Test2() {
  const divRef = useRef<HTMLDivElement | null>(null);
  const [translate, setTranslate] = useState<TTranslate>({x:0,y:0});

  const handleDrag = (e:any) => {
    setTranslate(prevcords=>({
      ...prevcords,
      x: translate.x + e.movementX,
      y: translate.y + e.movementY
    }));
  };  
  console.log("x", translate.x)
  console.log("y",translate.y)

  const drag = useDrag(divRef, [translate], {
    onDrag: handleDrag,
  });

  return (
    <ContainerL  >
        <div 
          ref={divRef}
          style={{
            transform: `translate(${translate.x}px,${translate.y}px)` 
          }}         
        >
          <p>s</p>
        </div>
        {!drag.isDragging && <p>Drag it ☝️</p>}
        {drag.isDragging && <p>Ooh such drag 😎</p>}      
    </ContainerL>
  );
}

export default Test2;

const ContainerL=styled.div`
background-color: #282c34;
width:500px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`