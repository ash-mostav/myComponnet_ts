import React, { ReactNode } from "react";
import { ChildBox, Errormessage, ToolTipBox, TTtextBody, PopUP, IToRightPop } from "./Tooltip.Styles";

export interface ToolTipProps extends IToRightPop {
    children?: ReactNode;
    srcpic?: string;
    text?: string;
    header?: string | undefined;
}
const AdvancedTT: React.FC<ToolTipProps> = ({ children, srcpic, text, header, type }) => {
    if (!text && !srcpic) return <ErrorMssg type={type} />;  
    return  (
        <>
        <ToolTipBox>          
          <PopUP type={type}>
                {srcpic && <img src={srcpic} />}
                <TTtextBody>
                    <h3>{header}</h3>
                    {text ? <p>{text}</p> : <></>}
                </TTtextBody>
                <i></i>
            </PopUP>           

            <ChildBox>{children}</ChildBox>
        </ToolTipBox>
        
        </>
    );
};

export default AdvancedTT; /////////////////////////////////////// the export

const ErrorMssg: React.FC<ToolTipProps> = () => {
    return (
        <>
            <ToolTipBox>
                <PopUP type="right">
                    <TTtextBody>
                        <p> Use (-srcpic-) props to add image at 400x80 px</p>
                        <p>Use (-header-) props to give header</p>
                        <p>Use (-text-) props to add only text </p>
                    </TTtextBody>
                    <i></i>
                </PopUP>
                <Errormessage>
                    if this Tool tip is visible then you alredy have👩‍👦‍👦 hover for more
                </Errormessage>
            </ToolTipBox>
        </>
    );
};