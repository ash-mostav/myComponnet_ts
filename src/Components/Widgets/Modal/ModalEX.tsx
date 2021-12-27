import React from "react";
import ReactDOM from "react-dom";
import { H2Title } from "../../TextTypographies/Typography.Styles";
import {
  CloseIcon,
  ModalBody,
  Modalcontainer,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "./ModalEX.Styles";

interface ModalProps{
onClose?:()=>void;
open:boolean;
children?:React.ReactNode;
}

const Modalx:React.FC<ModalProps>=({onClose,open,children})=> {  
  if (!open) return null;  
  const modalRoot = document.getElementById("portal") as HTMLElement;
  return ReactDOM.createPortal(
    <>    
      <Modalcontainer  >
        <ModalContent>
          <ModalHeader>
            <CloseIcon  onClick={onClose}>
              X
            </CloseIcon>
            <H2Title>Modal Header</H2Title>
          </ModalHeader>
          <ModalBody >{children}</ModalBody>
          <ModalFooter>
            <h3>Modal Footer</h3>
          </ModalFooter>
        </ModalContent>
      </Modalcontainer>
    </>,modalRoot
  )
};
export default Modalx;



// const HOC=(props)=>{
//   return <div>
//     {props.children({history:20})}
//   </div>  
// }

// const Com=(props)=>{
//   return <div>
//     {props.history}
//   </div>
// }

// <HOC >
//   {Com}
// </HOC>

// <Route component={Com}/>



// const ConnectWithRedux=({component, requiredState, actions})=>{

//   const mapStateToProps=state=>({
//     requiredState:state
//   })

//   const mapDispatchToProps=dispatch=>({
//     Object.keys(actions).map()
//   })


//   return connect(mapStateToProps, mapDispatchToProps)(component)
// }
