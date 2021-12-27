import styled from "styled-components";
import { Link } from "react-router-dom";

export interface ICustomeButton {
  auto?: string | number;
  big?: string | number;
  med?: string | number;
  rounded?: string | number;
  lround?: string | number;
  hfround?: string | number;
  rround?: string | number;

}

export const CustomeButton = styled(Link) <ICustomeButton>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 45px; 
  color: #000;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  text-decoration: none;
  margin-bottom: 5px;
  font-weight: 500; 
  z-index:1; 
  background:${({theme})=>theme.colors};
  /* background:hsl(200,50%,50%); */
  text-transform:capitalize;
  &:hover {    
    color: #242424;
    /* background:${({theme})=>theme.colors}99; */
    box-shadow:3px 3px 3px #ffffff30;
       
  }
   
  ///////////////// Button Sizes \/ conditions
  width: ${(props) => (props.auto ? "100%" : "")};
  height: ${(props) => (props.auto ? "52px" : "")};

  width: ${(props) => (props.big ? "220px" : "")};
  height: ${(props) => (props.big ? "56px" : "")};
  margin: ${(props) => (props.big ? "5px" : "")};

  width: ${(props) => (props.med ? "180px" : "")};
  height: ${(props) => (props.med ? "52px" : "")};
  margin: ${(props) => (props.med ? "5px" : "")};

  border-radius: ${(props) => (props.rounded ? "10px" : "")};
  border-radius: ${(props) => (props.hfround ? "0px 10px 0px 10px" : "")};
  border-radius: ${(props) => (props.rround ? "0px 10px 10px 0px" : "")};
  border-radius: ${(props) => (props.lround ? "10px 0px 0px 10px" : "")};
  ///////////////// Button Sizes /\
`;

export const ReflectionBtn2=styled("a")`
    border: 0 solid;
    box-shadow: inset 0 0 20px rgba(255, 255, 255, 0);
    outline: 1px solid;
    outline-color: rgba(255, 255, 255, .5);
    outline-offset: 0px;
    text-shadow: none;
    transition: all 1250ms cubic-bezier(0.19, 1, 0.22, 1); 
    padding: 0.5rem;
    border-radius: 50%;
  
  &:hover {
    border: 1px solid;
    box-shadow: inset 0 0 20px rgba(255, 255, 255, .5), 0 0 20px rgba(255, 255, 255, .2);
    outline-color: rgba(255, 255, 255, 0);
    outline-offset: 15px;
    text-shadow: 1px 1px 2px #427388; 
  }`
////////////////////////////////////////////////////
export const LinedA=styled("a") `
width: 150px;
color:#000;
text-transform:capitalize;
text-align:center;
font-size:1.1rem;
font-weight:600;
cursor: pointer;
/* background: hsl(200,50%,50%); */
z-index:999;

&:after,
&:before {
  backface-visibility: hidden;
  /* border: 0.1px solid hsl(200,50%,50%); */
  border: 1px solid ${({theme})=>theme.colors};
  bottom: 0px;
  content: " ";
  display: block;
  margin: 0 auto;
  position: relative;
  transition: all 280ms ease-in-out;
  width: 0;
}

&:hover:after,
&:hover:before {
  backface-visibility: hidden;
  /* border-color: ${({theme})=>theme.colors}; */
  transition: width 350ms ease-in-out;
  width: 90%;
}

&:hover:before {
  bottom: auto;
  top: 0;
  width: 50%;
}

`