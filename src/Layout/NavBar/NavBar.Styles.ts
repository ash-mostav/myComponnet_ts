import styled from "styled-components";
import { FlexRow, InnerSection } from "../../GlobalStyledCom";

export const NavbarContainer = styled("nav")`
  max-width:1920px;
  height: 55px;
  background: ${({ theme }) => theme.colors};
  /* background: hsl(220,50%,50%);; */
  opacity: 1;
  margin:0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;  
  z-index: 99;
`;
export const InnerNav = styled(InnerSection)`
  width: 100%;
  max-width:1620px;
  flex-direction: row;
  justify-content: space-between;
`;
export const NavBox = styled(FlexRow)`
  width: 100%;
`;
export const StyledLink = styled("a")`
  color: #fff;
  font-size: 40px;
  text-decoration: none;
`;
export const SpanNav = styled("span")`
width:10%;
font-size:2rem;
  color: #fff;
`;
export const InputText = styled("input")`
  height: 40px;
  width: 50vw;
  background: #ffffff 0% 0% no-repeat padding-box;
  border-radius: 6px;
  border: none;
  padding: 12px 26px;
  font-size:1.3rem;
  font-weight:600;
  :focus {
    outline: none;
    border: none;
  }
  ::placeholder {
    font-size: 13px;
    color: #000;
    font-weight: 700;
  }
`;
export const ButtonNav = styled("button")`
  width: 30%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: capitalize;
  cursor: pointer;
  border: none;
  font-size: 1.3rem;
  font-weight: 700;
  /* background: ${({theme})=>theme.colors}; */
  background: hsl(220,50%,50%);
  filter: invert(1);
  border-radius: 6px;
  opacity: 1;
  outline:none;
  &:hover {
    color: #000;
  }
`;
export const Icon = styled("a")`
  display: flex;
  text-decoration: none;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  height: 30px;
  width: auto;
  margin: auto 0 auto 32px;
  cursor: pointer;
  span {
    color: #000;
    background: #fcdd06;
    font-size: 8px;
    font-weight: 700;
    border-radius: 50%;
    width: 13px;
    height: 13px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    left: 8px;
    top: 10px;
    z-index: 1;
  }
`;
export const SearchIconNav = styled("i")`
  font-size: 1rem;
  margin-right: 5px;
`;





