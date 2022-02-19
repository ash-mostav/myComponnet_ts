import { css } from "styled-components";
import FFSvg,{ IFFSVGProps } from "./FFSVG";

export const DocIcon: React.FC<IFFSVGProps> = (props) => {
  const styles=css`
  .cls-1{fill:url(#linear-gradient);}
  .cls-2{fill:url(#linear-gradient-2);}
  .cls-3{fill:#f8edeb};
  ` 
  // style={styles}
  return (
    <FFSvg width={props.width} viewBox="0 0 32 32" data-name="Layer 1" id="Layer_1">
      <defs>
        <linearGradient gradientUnits="userSpaceOnUse" id="linear-gradient" x1="6.65" x2="27.27" y1="6.65" y2="27.27">
          <stop offset="0" stop-color="#00a6fb" />
          <stop offset="1" stop-color="#0094ce" />
        </linearGradient>
        {/* <linearGradient id="linear-gradient-2" x1="6" x2="12" xlink:href="#linear-gradient" y1="5" y2="5" /> */}
        </defs>
      <path className="cls-1" d="M23.5,2h-12a.47.47,0,0,0-.35.15l-5,5A.47.47,0,0,0,6,7.5v20A2.5,2.5,0,0,0,8.5,30h15A2.5,2.5,0,0,0,26,27.5V4.5A2.5,2.5,0,0,0,23.5,2Z" />
      <path className="cls-2" d="M11.69,2a.47.47,0,0,0-.54.11l-5,5A.47.47,0,0,0,6,7.69.5.5,0,0,0,6.5,8h3A2.5,2.5,0,0,0,12,5.5v-3A.5.5,0,0,0,11.69,2Z" />
      <path className="cls-3" d="M16,21a2,2,0,0,1-2-2V13a2,2,0,0,1,4,0v6A2,2,0,0,1,16,21Zm0-9a1,1,0,0,0-1,1v6a1,1,0,0,0,2,0V13A1,1,0,0,0,16,12Z" />
      <path className="cls-3" d="M9.5,21a.5.5,0,0,1-.5-.5v-9a.5.5,0,0,1,.5-.5A3.5,3.5,0,0,1,13,14.5v3A3.5,3.5,0,0,1,9.5,21Zm.5-8.95V20a2.5,2.5,0,0,0,2-2.45v-3A2.5,2.5,0,0,0,10,12.05Z" />
      <path className="cls-3" d="M21,21a2,2,0,0,1-2-2V13a2,2,0,0,1,4,0,.5.5,0,0,1-1,0,1,1,0,0,0-2,0v6a1,1,0,0,0,2,0,.5.5,0,0,1,1,0A2,2,0,0,1,21,21Z" />

    </FFSvg>
  );
};

