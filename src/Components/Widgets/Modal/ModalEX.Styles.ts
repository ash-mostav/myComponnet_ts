import styled from "styled-components";
import { FlexColumn, FlexRow, FlexRowJCS } from "../../../GlobalStyledCom";

export const Modalcontainer = styled(FlexColumn)`
  position: fixed;
  z-index: 3; 
  left: 0;
  top: 0;
  width: 100%;
  height: 100%; 
  overflow: auto; 
  background-color: rgb(0, 0, 0); 
  background-color: rgba(0, 0, 0, 0.4);
`;

/* Modal Content/Box */
export const ModalContent = styled(FlexColumn)`
  position: relative;
  background-color: #fefefe;
  margin: auto;
  padding: 0;
  border: 1px solid #888;
  width: 80%;
  border-radius:25px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  -webkit-animation-name: animatetop;
  -webkit-animation-duration: 0.4s;
  animation-name: animatetop;
  animation-duration: 0.4s;
  @-webkit-keyframes animatetop {
    from {
      top: -300px;
      opacity: 0;
    }
    to {
      top: 0;
      opacity: 1;
    }
  }
  @keyframes animatetop {
    from {
      top: -300px;
      opacity: 0;
    }
    to {
      top: 0;
      opacity: 1;
    }
  }
`;

/* The Close Button */
export const CloseIcon = styled("a")`
 width:40px;
    height:40px;
  color: #fff;
  font-size: 28px;
  font-weight: bold;
  z-index:1;
  margin:1%;
  display:flex;
  align-items:center;
  justify-content: center;
  &:hover{
   
    border-radius:50%;
    background:#ffffff95;
    color: black;
    text-decoration: none;
    cursor: pointer;
  }
`;
// Inner Modal content
export const ModalHeader = styled(FlexRowJCS)`
  min-height:100px;
  padding: 2px 16px;
  background-color:${({theme})=>theme.colors};
  color: #fff;
  align-items:center;
  justify-content: space-between;
  border-radius:25px 25px 0 0;
  width:100%;
`;
export const ModalBody = styled(FlexColumn)`
  padding: 16px 16px;
  height:auto.0vh;
`;
export const ModalFooter = styled(FlexRow)`
  min-height:70px;
  padding: 2px 16px;
  background-color: ${({theme})=>theme.colors};
  color: #fff;
  border-radius:0 0 25px 25px;

`;
