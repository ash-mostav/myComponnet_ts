import React from "react";
import styled from "styled-components";
// interface IGlowProps {
//     left?:;
//     top?:;
//     width?:;
//     height?:;
// }
const Glow = styled.span.attrs({
    style: (props:any) => ({
        left: `${props.x}px`,
        top: `${props.y}px`,
        width: props.inside ? "100px" : 0,
        height: props.inside ? "100px" : 0
    })
})`
  opacity: 0.25;
  position: absolute;
  background: radial-gradient(circle closest-side, #fff, transparent);
  transform: translate(-50%, -50%);
  transition: all 0.1s ease-out;
`;

export default Glow;
