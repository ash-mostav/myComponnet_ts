import React, { createRef, useRef, useState } from "react";
// utility for tracking mouse movement on an element(bindings: any, position: any) => JSX.Element;
interface IMouseTrackerProps {
    render:any;    
    el?:HTMLElement | any;
}
type MyState = {
  x: number; 
  y: number; 
  inside: boolean;
};
// const MouseTracker = ({ ...props }: IMouseTrackerProps) => {
//     const [cordstate, setCordState] = useState({
//         x: 0,
//         y: 0,
//         inside: false
//     });
//     const generalref = useRef<any | null>(null)

//     const setRef = (el: any) => {
//         el = generalref;
//     };
//     const onMouseMove = (e: any) => {
//         let el = new HTMLElement();
//         const x = e.pageX - el.offsetLeft;
//         const y = e.pageY - el.offsetTop;
//         // console.log(x, y);
//         setCordState(state => {
//             return {
//                 ...state,
//                 x,
//                 y
//             };
//         });
//     };

//     const onMouseEnter = (e: any) => {
//         // console.log('enter');
//         setCordState(state => {
//             return {
//                 ...state,
//                 inside: true
//             };
//         });
//     };

//     const onMouseLeave = (e: any) => {
//         // console.log('leave');
//         setCordState(state => {
//             return {
//                 ...state,
//                 inside: false
//             };
//         });
//     };
    
//     return props.renderc(
//         {
//             innerRef: setRef,
//             onMouseMove: onMouseMove,
//             onMouseLeave: onMouseLeave,
//             onMouseEnter: onMouseEnter
//         },
//     cordstate
//     );

// }
// utility for tracking mouse movement on an element

class MouseTracker extends React.Component<IMouseTrackerProps,MyState> {
  constructor(props:any){
  super(props);
//  this.el = React.createRef<HTMLElement>()
}
  state:MyState = {
    x: 0,
    y: 0,
    inside: false
  };
  el: any = HTMLElement;
  onMouseMove = (e:any) => {
    const x = e.pageX - this.el.offsetLeft;
    const y = e.pageY - this.el.offsetTop;
    // console.log(x, y);
    this.setState(state => {
      return {
        ...state,
        x,
        y
      };
    });
  };

  onMouseEnter = (e:any) => {
    // console.log('enter');
    this.setState(state => {
      return {
        ...state,
        inside: true
      };
    });
  };

  onMouseLeave = (e:any) => {
    // console.log('leave');
    this.setState(state => {
      return {
        ...state,
        inside: false
      };
    });
  };

  setRef = (el:any) => {
    this.el = el;
  };

  render() {
    return this.props.render(
      {
        innerRef: this.setRef,
        onMouseMove: this.onMouseMove,
        onMouseLeave: this.onMouseLeave,
        onMouseEnter: this.onMouseEnter
      },
      this.state
    );
  }
}

export default MouseTracker;




// function innerRef(innerRef: any, setRef: (el: any) => void, onMouseMove: (e: any) => void, onMouseMove: (e: any) => void, onMouseLeave: (e: any) => void, onMouseLeave: (e: any) => void, onMouseEnter: (e: any) => void, onMouseEnter: (e: any) => void, arg8: any): void {
//     throw new Error("Function not implemented.");
// }
