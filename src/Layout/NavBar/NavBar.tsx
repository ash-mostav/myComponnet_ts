import { useState } from "react";
import StyledInput from "../../Components/MiniWidgets/AwosomeInput/AwosomeInput";
import { Typography } from "../../GlobalStyledCom";
import {
  NavbarContainer,
  InnerNav,
  NavBox,
  Icon,
} from "./NavBar.Styles";

export default function Navbar() {
  const[value,setvalue]=useState<Array<string>>(["keyword"]);

  return (

    <NavbarContainer>
      <InnerNav>
        <NavBox>
          <StyledInput/>
        </NavBox>
        <NavBox>
          <Icon href={"/home"} >
            <Typography fontSize={"13px"} color={"#fff"}>
              Home
            </Typography>
          </Icon>
          <Icon>
            <Typography fontSize={"13px"} color={"#fff"}>
              Login / Sign up
            </Typography>
          </Icon>
          <Icon>
            <Typography fontSize={"13px"} color={"#fff"}>
              About
            </Typography>
          </Icon>         
          <Icon >
            <Typography fontSize={"13px"} color={"#fff"}>
              Logout
            </Typography>
          </Icon>
        </NavBox>
      </InnerNav>
    </NavbarContainer>
  );
}
