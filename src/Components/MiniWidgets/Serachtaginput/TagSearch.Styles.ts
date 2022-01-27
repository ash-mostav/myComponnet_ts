import styled from "styled-components";
import { FlexBox, FlexRow } from "../../../GlobalStyledCom";
import { FlexStartColumn, FlexStartRow } from "../../../Themming/GlobalCSSVariables";
import { CloseIcon } from "./ActionButtons/ActionButton.Styles";

export interface IStyledInputProps {
  barOpened?: boolean;
  list?: boolean;
  list2?: boolean;
  input?: string;
  selected?: boolean;
}

export const Form = styled.div<IStyledInputProps>`
  /* width: ${(props) => (props.barOpened ? "35vw" : "15vw")};   */
  width: 100%;
  height: 45px;
  background-color: #37474f;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  padding: 0.7rem;
  border-radius: 0.3rem;
  cursor: ${(props) => (props.barOpened ? "auto" : "pointer")};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  transition: width 300ms cubic-bezier(0.645, 0.045, 0.355, 1);
  /* box-sizing:border-box; */
`;
export const InputPopList = styled.div<IStyledInputProps>`
  ${FlexStartColumn};
  width: 100%;
  background: #f2f2f2;
  color: #000;
  border: 1px solid #37474f;
  padding: 20px;
  position: absolute;
  top: 95%;
  z-index: 99999;
  border-radius: 5px;
  transition: all 0.3s ease-out;
  height: auto;
  flex: 1;
  height: 350px;
  .listheader {
    display: flex;
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
  .filterContainer {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
  p {
    font-size: 1rem;
    font-weight: 600;
    color: #000000;
  }
`;

export const Button = styled.button<IStyledInputProps>`
  line-height: 1;
  font-size: 1.2rem;
  font-weight: 600;
  pointer-events: ${(props) => (props.barOpened ? "auto" : "none")};
  cursor: ${(props) => (props.barOpened ? "pointer" : "none")};
  background-color: transparent;
  border: none;
  outline: none;
  color: white;
  display: flex;
`;

////////////////////////////////// tag

export const TagInputDev = styled(FlexBox)` 
width:100%;
  flex-wrap: wrap;
  max-height: 40px;
  align-items:center;
  justify-content:center;
  /* padding: 0 2px; */
  border-radius: 6px;
  margin: 10px;
  overflow:hidden;

`;

export const StyledTagIput = styled("input")`
  position: relative;
  flex: 1;
  border: none;
  height: 43px;
  font-size: 30px;
  padding: 4px 0 0;
  text-indent: 5px;
  background-color: inherit;
  letter-spacing: 1.2px;
  :focus {
    outline: transparent;
  }
`;
export const Vcontainer = styled.div`
  width: 100%;
  ${FlexStartColumn};
  flex-wrap: wrap;
`;
export const Hcontainer = styled.div`
  width: 50%;
  ${FlexStartRow};
`;

export const Tagg = styled("ul")`
  /* position: absolute; */
  display: flex;
  flex-direction: row;
  align-items: start;
  justify-content: start;
  flex-wrap: wrap;
  padding: 0;
  margin: 10px 0 0;
  .selected {
    background: #43ad3f;
    border: 2px solid #000;
    :after {
      content: "✔";
    }
  }
  .notselected {
    background: ${({ theme }) => theme.colors};
  }
`;

export const StyledTagg = styled("li")`
  width: auto;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  padding: 2px 3px;
  text-transform: capitalize;
  font-size: 1.2rem;
  letter-spacing: 0.7px;
  list-style: none;
  border-radius: 0.2rem;
  margin: 0 10px 10px 0;
`;
export const TagTitle = styled("span")`
  margin-right: 1.1rem;
`;

export const RemoveIcon = styled(CloseIcon)`
  border-radius: 3px;
`;

///////////////////////////////////////////////////////
export const CloseingTag = styled.div`
position: absolute;
width:30x;
height:35px;
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
background: ${({ theme }) => theme.colors};
animation: fade-in .5s;
@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
}.close-btn {
  position: relative;
  border-radius: 7px;
  width: 25px;
  height: 25px;
  font-size:1rem;
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
      height: 12px;
      width: 4px;
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
`;
export const Tagger = styled("ul")`
  display: flex;
  flex-wrap: wrap;
  padding: 2px;
  margin: 3px;
`;
export const StyledTagger = styled("li")`
  width: auto;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  padding: 2px 3px;
  font-size: 1.1rem;
  letter-spacing: 0.7px;
  list-style: none;
  border-radius: 0.4rem;
  margin: 2px;
  background: ${({ theme }) => theme.colors};
`;
export const TagerTitle = styled("span")`
  margin-top: 3px;
`;
export const InputOptionContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3px;
  position: relative;

  &:hover {
    background: rgba(245, 245, 245, 0.067);
    cursor: pointer;
  }

  .check {
    display: block;
    width: 15px;
    height: 15px;
    border-radius: 3px;
    box-shadow: -2px 2px 2px #43ad3f;
    background: #fff;
    &.checked {
      position: relative;
      &:after,
      &:before {
        content: "";
        position: absolute;
        width: 5px;
        height: 100%;
        border-radius: 10px;
        background: ${({ theme }) => theme.colors};
      }
      &:before {
        transform: rotate(30deg);
        left: 10px;
        bottom: 4px;
      }
      &:after {
        transform: rotate(-30deg);
        height: 50%;
        left: 4px;
        bottom: 5px;
      }
    }
  }
`;
