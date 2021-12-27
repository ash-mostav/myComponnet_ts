import React from "react";
import ReactDOM from "react-dom";

interface PortalProps {
    children?: React.ReactNode;
}
const Portalwrapper: React.FC<PortalProps> = ({ children }) => {
    const modalRoot = document.getElementById("portal") as HTMLElement;
    return ReactDOM.createPortal(
        <>
            {children}
        </>, modalRoot
    )
}
export default Portalwrapper;