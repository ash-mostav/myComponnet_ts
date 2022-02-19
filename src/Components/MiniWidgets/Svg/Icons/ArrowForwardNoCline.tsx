import Svg from "../Svg";
import { SvgProps } from "../types";
import React from "react";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <path d="M 17 12 L 11.29 17.88 C 10.9 18.27 10.9 18.91 11.29 19.3 C 11.68 19.69 12.31 19.69 12.7 19.3 L 19.29 12.71 C 19.68 12.32 19.68 11.69 19.29 11.3 L 12.71 4.7 C 12.32 4.31 11.69 4.31 11.3 4.7 C 10.91 5.09 10.91 5.72 11.3 6.11 Z" />
    </Svg>
  );
};

export default Icon;


