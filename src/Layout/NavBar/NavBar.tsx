import { Typography } from "../../GlobalStyledCom";
import {
  NavbarContainer,
  InnerNav,
  NavBox,
  Icon,
} from "./NavBar.Styles";

export default function Navbar() {

  return (

    <NavbarContainer>
      <InnerNav>
        <NavBox>
          {/* <StyledInput/> */}
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
