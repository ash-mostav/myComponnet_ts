import styled, { css, keyframes } from "styled-components";
import { SvgProps } from "./types";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const spinStyle = css`
  animation: ${rotate} 2s linear infinite;
`;

const Svg = styled.svg<SvgProps>`
  align-self: center; // Safari fix
  fill: ${({ theme}) => theme.colors};
  flex-shrink: 0;
  ${({ spin }) => spin && spinStyle}
`;

Svg.defaultProps = {
  color: "text",
  width: "20px",
  xmlns: "http://localhost:3001/home",
  spin: false,
};

export default Svg;
