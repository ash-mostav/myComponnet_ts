import { useState } from "react";
import StyledInput from "../../Components/MiniWidgets/AwosomeInput/AwosomeInput";
import SearchTaginput from "../../Components/MiniWidgets/Serachtaginput/TagSearch";
import { Typography } from "../../GlobalStyledCom";
import {
  NavbarContainer,
  InnerNav,
  NavBox,
  Icon,
} from "./NavBar.Styles";



export interface TagShape {
  tag: string;
  isselected: boolean;
}
interface TTagOptions {
  tags: TagShape[];
}

export default function Navbar() {
  const[value,setvalue]=useState<Array<string>>(["keyword"]);
  const [tags] = useState<TagShape[]>([
    {
      tag: "google",
      isselected: false,
    },
    {
      tag: "linkdin",
      isselected: false,
    },
    {
      tag: "facebook",
      isselected: false,
    },
  ]);

  return (

    <NavbarContainer>
      <InnerNav>
        <NavBox>
          {/* <StyledInput/> */}
          
        <SearchTaginput tags={tags}
        />
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
