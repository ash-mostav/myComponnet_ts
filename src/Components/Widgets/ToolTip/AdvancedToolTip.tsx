import React, { ReactNode } from "react";
import { FlexColumn } from "../../../GlobalStyledCom";
import { ChildBox, Errormessage, ToolTipBox, TTtextBody, PopUP, IToRightPop } from "./Tooltip.Styles";

export interface ToolTipProps extends IToRightPop {
    children?: ReactNode;
    srcpic?: string;
    text?: string;
    header?: string | undefined;
    content?:ReactNode;
    className?:string
}
const AdvancedTT: React.FC<ToolTipProps> = ({ children, srcpic, text, header, type,content,className }) => {
    if (!text && !srcpic && !children) return <ErrorMssg type={type} />;  
    return  (
        <>
        <ToolTipBox className={className}>          
          <PopUP type={type}>
                {srcpic ? <img loading="lazy" src={srcpic} />:<></>}
               {text && header? <TTtextBody>
                    <h3>{header}</h3>
                     <p>{text}</p>            
                </TTtextBody> : <></>} 
                 <FlexColumn>
                   {content}
                 </FlexColumn> 
               <i/>
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