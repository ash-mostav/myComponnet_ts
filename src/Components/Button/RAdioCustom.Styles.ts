import styled from "styled-components";

export const Wrapper = styled.div`
  height: auto;
  width: 100%;
  padding: 0px 16px 24px 16px;
  box-sizing: border-box;
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  height: 48px;
  position: relative;
  border: 1px solid #ccc;
  box-sizing: border-box;
  border-radius: 2px;
  margin-bottom: 10px;
  label{
    font-size:1rem;
    font-weight:600;
    color:#fff;
    cursor: pointer;
  }
`;

export const RadioButtonLabel = styled.label`
  position: absolute;
  left: 4px;
  top: 25%;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: white;
  border: 1px solid #ccc;

`;
export const StyledRadioButton = styled.input.attrs({
  type:"radio",
})`
display:flex;
align-items:center;
justify-content:center;
  opacity: 0;
  z-index: 1;
  cursor: pointer;
  width: 25px;
  height: 25px;
  margin-right: 10px;
  &:hover ~ ${RadioButtonLabel} {
    background: #ccc;
    &::after {
      content: "😃";
      font-family: "FontAwesome";
      display: block;
      color: white;
      width: 12px;
      height: 12px;
      /* margin: 4px; */
    }
  }
  &:checked+${Item}{
    background: green;
    border: 2px solid yellowgreen;
  
  }
  &:checked +${RadioButtonLabel} {
    background: yellowgreen;
    border: 1px solid yellowgreen;
    &::after {
      content: "😎";
      font-family: "FontAwesome";
      display: block;
      color: white;
      width: 12px;
      height: 12px;
      /* margin: 4px; */
    }
  }
`;
