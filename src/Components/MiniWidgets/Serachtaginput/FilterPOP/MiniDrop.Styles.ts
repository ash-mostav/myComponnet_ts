import styled from "styled-components";

export const DropDown = styled("div")`
position: relative;
box-sizing: inherit;
`;

export const DDITitle = styled("a")`
display: none;
display: flex;
justify-content: center;
align-items: center;
width: 100%;
padding: 0.25rem 0.25rem;
clear: both;
font-weight: 600;
color: #212529;
text-align: inherit;
white-space: nowrap;
background-color: transparent;
border: 0;
font-size: 1.5rem;
`;
export const DropDownItem = styled("button")`
width: 100%;
padding: 0.25rem 1.5rem;
font-size: 1.5rem;
color: #212529;
font-weight: 600;
display: flex;
justify-content: space-between;
align-items: center;
clear: both;
text-align: inherit;
white-space: nowrap;
background-color: transparent;
cursor: pointer;
border: none;
outline:none;
&:hover {
  ${DDITitle} {
    transform: translateX(10px);
    transition: all 0.5s ease;
  }
}
`;

export const InnerDevider = styled("li")`
height: 1px;
margin: 2px 2px;
overflow: hidden;
background-color: #00000030;
`;

export const DropDownMenu = styled("div")`
  position: absolute;
  top: 0;
  right: 100%;
  z-index: 1000;
  /* float: left; */
  min-width: 11rem;
  padding: 0.3rem ;
  margin: 0.125rem 0 0;
  font-size: 1rem;
  color: #212529;
  text-align: left;
  list-style: none;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 0.25rem;
  transition: all 0.5s ease;
.fieldsetStyles{
  border: 1px solid #37474f7a;
  label{
    width:100%;
    font-size:1rem;
    font-weight:600;
    text-transform:capitalize;
  }
}
  .radiostyle{
width:13px;
height:13px;
margin:3px;

cursor: pointer;


  }
`;
export const DropDownmenuheader = styled("div")`
  display: block;
  padding: 0.3rem 1rem;
  margin-bottom: 0;
  font-size: 0.875rem;
  color: #6c757d;
  white-space: nowrap;
`;
export const BtnToggle = styled("button")`
  font-weight: 600;
  display: inline-block;
  background: inherit;
  width: auto;
  height: auto;
  font-size: 1.5rem;
  content: "";
  outline: none;
  border: none;
  cursor: pointer;
`;
