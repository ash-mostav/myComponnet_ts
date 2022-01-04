import styled, { css } from "styled-components";
import { FlexStart } from "../../../../Themming/GlobalCSSVariables";

export interface IStyledInputProps{
    barOpened?:boolean;
    list?:boolean;
    list2?:boolean;
    input?:string;
}

export const Form = styled.form<IStyledInputProps>`
  /* width: ${props => (props.barOpened ? "35vw" : "10vw")};   */
  width: 100%;  
  height: 45px;
  background-color: #37474f;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  padding: 0.7rem;
  border-radius: 7px;
  cursor: ${props => (props.barOpened ? "auto" : "pointer")};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;   
  transition: width 300ms cubic-bezier(0.645, 0.045, 0.355, 1);

`;
export const InputPopList=styled.div<IStyledInputProps>`
${FlexStart};
width:100%;
min-height:350px;
background: #f2f2f2;
border: 1px solid #37474f;
padding:20px;
display:inline-block;
position: absolute;
top:95%;
z-index:99999;
border-radius:5px;
`;

export const Input = styled.input<IStyledInputProps>`
  width: 100%;
  font-size:1.6rem;
  line-height: 1;
  background-color: transparent;
  margin-left: ${props => (props.barOpened ? "1rem" : "0rem")};
  border: none;
  color: white;
  transition: margin 300ms cubic-bezier(0.645, 0.045, 0.355, 1);

  &:focus,
  &:active {
    outline: none;
  }
  &::placeholder {
    color: white;
    font-size:1.6rem;
  }
`;

export const Button = styled.button<IStyledInputProps>`
  line-height: 1;
  font-size:1.2rem;
  font-weight:600;
  pointer-events: ${props => (props.barOpened ? "auto" : "none")};
  cursor: ${props => (props.barOpened ? "pointer" : "none")};
  background-color: transparent;
  border: none;
  outline: none;
  color: white;
  display: flex;
`;