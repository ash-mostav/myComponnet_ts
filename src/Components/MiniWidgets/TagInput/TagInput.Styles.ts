import styled from "styled-components";
import { FlexRow } from "../../../GlobalStyledCom";

export const TagInputDev = styled(FlexRow)`
  display: flex;
  flex-wrap: wrap;
  min-height: 48px;
  padding: 0 8px;
  border: 1px solid ${({ theme }) => theme.colors} ;
  border-radius: 6px;
  margin:10px 10px 10px 10px;
  
 `;

export const StyledTagIput = styled("input")`
  flex: 1;
  border: none;
  height: 46px;
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
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  margin: 10px 0 0;
`;
/* .tags {}*/
export const StyledTagg = styled("li")`
  width: auto;
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  padding: 8px 12px;
  font-size: 1.8rem;
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
      content: '';
      display: block;
      background: #fff;
      height: 10px;
      width: 2px;
      border-radius: 10px;
      margin: 0 auto;
    }
    &:after {
      transform: rotate(-45deg);
    }
    &:before {
      transform: rotate(45deg);
    }
  }
`