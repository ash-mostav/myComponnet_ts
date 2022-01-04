import styled, { css } from "styled-components";
import { FlexRow } from "../../../GlobalStyledCom";
import { FlexStartColumn } from "../../../Themming/GlobalCSSVariables";


export interface IStyledInputProps{
    barOpened?:boolean;
    list?:boolean;
    list2?:boolean;
    input?:string;
}

export const Form = styled.div<IStyledInputProps>`
  /* width: ${props => (props.barOpened ? "35vw" : "10vw")};   */
  width: 50%;  
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
${FlexStartColumn};
width:100%;
background: #f2f2f2;
color:#000;
border: 1px solid #37474f;
padding:20px;
position: absolute;
top:95%;
z-index:99999;
border-radius:5px;
transition: all 0.3s ease-out;
height: auto;
flex: 1;
height:350px;

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

////////////////////////////////// tag 

export const TagInputDev = styled(FlexRow)`
  display: flex;
  flex-wrap: wrap;
  min-height: 44px;
  padding: 0 8px; 
  border-radius: 6px;
  margin:10px 10px 10px 10px;
  
 `;

export const StyledTagIput = styled("input")`
position: relative;
  flex: 1;
  border: none;
  height: 43px;
  font-size: 30px;
  padding: 4px 0 0;
  text-indent:5px;
  background-color:inherit;
  letter-spacing:1.2px;
  :focus {
    outline: transparent;
  }
  
`;
/*  .tag-input input:focus {}*/
export const Tagg = styled("ul")`
position: absolute;
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  margin: 10px 0 0;
`;

export const StyledTagg = styled("li")`
  width: auto;
  height:33px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  padding: 4px 6px;
  font-size: 1.5rem;
  letter-spacing:0.7px;
  list-style: none;
  border-radius: 0.4rem;
  margin: 0 12px 12px 0;
  background: ${({ theme }) => theme.colors}; 
`;


export const TagTitle = styled("span")`
  margin-top: 3px;
`;

export const CloseIcon = styled("span")`
  display: block;
  width: 20px;
  height: 20px;
  line-height: 1rem;
  text-align: center;
  font-size: 1rem;
  font-weight:700;
  margin-left: 8px;
  border-radius: 5px;
  background: #fff;
  cursor: pointer;
  background: ${({ theme }) => theme.colors}10;
  &:hover{

    background: #ffffff1a;
  }
`;

export const CloseingTag = styled.div`
position: absolute;
width:30x;
height:40px;
right:0 ;
display: grid;
grid-template-columns: auto auto;
grid-gap: 5px;
align-items: center;
box-shadow: 1px 1px 1px #000;
border-radius: 5px;
padding: 2px 4px 2px 8px;
margin: 5px;
font-size: 1rem;
font-weight:700;
user-select: none;
color: #fff;
background: #444444;
animation: fade-in .5s;
@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
}

.close-btn {
  position: relative;
  border-radius: 7px;
  width: 30px;
  height: 30px;

  display: flex;
  justify-content: center;
  align-items: center;
  
  transition: .25s;
  &:hover {
    background: #ffffff1a;
    cursor: pointer;
  }
  
  .close-icon {
    display: block;
    width: 10px;
    height: 10px;

    display: flex;
    justify-content: center;
    align-items: center;

    &:before, &:after {
      position: absolute;
      content: "";
      display: block;
      background: #fff;
      height: 10px;
      width: 2px;
      border-radius: 10px;
      margin: 0 auto;
    }
    &:after {
      transform: rotate(-45deg);
    };
    &:before {
      transform: rotate(45deg);
    }
  };
}
`

export const Tagger = styled("ul")`
  display: flex;
  flex-wrap: wrap;
  padding: 2px;
  margin:3px;
`;

export const StyledTagger = styled("li")`
  width: auto;
  height:auto;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  padding: 2px 3px;
  font-size: 1.1rem;
  letter-spacing:0.7px;
  list-style: none;
  border-radius: 0.4rem;
  margin: 2px;
  background: ${({ theme }) => theme.colors}; 
`;


export const TagerTitle = styled("span")`
  margin-top: 3px;
`;