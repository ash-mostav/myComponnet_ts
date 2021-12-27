import styled, { css } from "styled-components";

export interface IToRightPop {
  type: "right" | "left" | "top" | "bottom";
}
const SharedStyles = css`
  min-width: 200px;
  max-width: 400px;
  margin-left: 20px;
  padding: 0;
  color: #eeeeee;
  background-color: #444444;
  font-weight: normal;
  font-size: 13px;
  border-radius: 8px;
  position: absolute;
  z-index: 99999999;
  box-sizing: border-box;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.5);
  visibility: hidden;
  opacity: 0;
  transition: opacity 0.1s;
  img {
    width: 300px;
    height: 90px;
    border-radius: 8px 8px 0 0;
    object-fit: cover;
  }
`;
const Right = css`
  left: 100%;
  top: 90%;
  transform: translate(0, -50%);
  i {
    position: absolute;
    top: 40%;
    right: 100%;
    margin-top: -12px;
    width: 12px;
    height: 24px;
    overflow: hidden;
    &:after {
      content: "";
      position: absolute;
      width: 12px;
      height: 12px;
      left: 0;
      top: 50%;
      transform: translate(50%, -50%) rotate(-45deg);
      background-color: #444444;
      box-shadow: 0 1px 8px rgba(0, 0, 0, 0.5);
    }
  }
`;
const Left = css`
  top: 50%;
  right: 105%;
  transform: translate(0, -50%);
  i {
    position: absolute;
    top: 50%;
    right: -12px;
    margin-top: -12px;
    width: 12px;
    height: 24px;
    overflow: hidden;
    &:after {
      content: "";
      position: absolute;
      width: 12px;
      height: 12px;
      right: 100%;
      top: 50%;
      transform: translate(50%, -50%) rotate(-45deg);
      background-color: #444444;
      box-shadow: 0 1px 8px rgba(0, 0, 0, 0.5);
    }
  }
`;
const Top = css`
  top: -10px;
  left: 50%;
  transform: translate(-50%, -100%);
  i {
    position: absolute;
    bottom: -23px;
    left: 30%;
    margin-top: -12px;
    width: 12px;
    height: 24px;
    overflow: hidden;
    &:after {
      content: "";
      position: absolute;
      width: 12px;
      height: 12px;
      left: 50%;
      transform: translate(-50%, -50%) rotate(45deg);
      background-color: #444444;
      box-shadow: 0 1px 8px rgba(0, 0, 0, 0.5);
    }
  }
`;
const Bottom = css`
  top: 26px;
  left: 50%;
  transform: translate(-50%, 0);
  i {
    position: absolute;
    top: 2px;
    left: 50%;
    margin-top: -12px;
    width: 12px;
    height: 24px;
    overflow: hidden;
    &:after {
      content: "";
      position: absolute;
      width: 12px;
      height: 12px;
      left: 50%;
      transform: translate(-50%, 50%) rotate(-45deg);
      background-color: #444444;
     
    }
  }
`;
export const PopUP = styled.div<IToRightPop>((props: IToRightPop) => {
  switch (props.type) {
    case "right":
      return css`
        ${SharedStyles}
        ${Right}
      `;
    case "left":
      return css`
        ${SharedStyles}
        ${Left}
      `;
    case "top":
      return css`
        ${SharedStyles}
        ${Top}
      `;
    case "bottom":
      return css`
        ${SharedStyles}
        ${Bottom}
      `;
    default:
      return ``;
  }
});
export const TTtextBody = styled.div`
  padding: 10px 20px;
  p {
    margin: 12px 0;
    font-size: 1rem;
    color: ${({ theme }) => theme.themeMode.Tttext};
  }
  h3 {
    margin: 12px 0;
    font-size: 1.1rem;
    text-transform: capitalize;
    color: ${({ theme }) => theme.themeMode.Tttext};
  }
`;
export const ChildBox = styled.div``;
export const ToolTipBox = styled.div`
  display: inline-block;
  position: relative;
  border-bottom: 1px dotted #666;
  text-align: left;
  &:hover {
    ${PopUP} {
      visibility: visible;
      opacity: 1;
    }
  }
`;
export const IconSpan = styled.span`
  position: absolute;
  top: -7px;
  right: -11%;
`;
export const Errormessage = styled.p`
  margin: 12px 0;
  padding: 0.75rem;
  font-size: 1.1rem;
  font-weight: 700;
  text-transform: capitalize;
  color: #ff0000;
  border-radius: 7px;
  border: 2px dashed #ff0000;
`;
