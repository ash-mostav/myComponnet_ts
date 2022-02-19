import Svg from "../Svg";
import { SvgProps } from "../types";
import React from "react";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <path d="M 7 12 L 12.71 6.12 C 13.1 5.73 13.1 5.09 12.71 4.7 C 12.32 4.31 11.69 4.31 11.3 4.7 L 4.71 11.29 C 4.32 11.68 4.32 12.31 4.71 12.7 L 11.3 19.29 C 11.69 19.68 12.32 19.68 12.71 19.29 C 13.1 18.9 13.1 18.27 12.71 17.88 L 7 12 Z" />
    </Svg>
  );
};

export default Icon;

