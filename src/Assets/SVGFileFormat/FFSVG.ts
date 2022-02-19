import styled from "styled-components";

export interface IFFSVGProps{
  width?:string;
  style?:React.CSSProperties | undefined;
}

const FFSvg = styled.svg<IFFSVGProps>`
  align-self: center; // Safari fix
  flex-shrink: 0;
  width:${(props)=>props.width};
`;

FFSvg.defaultProps = {
  color: "text",
  width: "45px",
  xmlns: "http://localhost:3001/home",
};

export default FFSvg;
