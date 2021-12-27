import React from "react";
import { Item, RadioButtonLabel, StyledRadioButton } from "./RAdioCustom.Styles";

interface TRadioProps{   
    id?:string;
    name?:string;   
    value?:string;   
    checked?: boolean;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    style?: React.CSSProperties;    
    htmlFor?:string;
}

const RadioCustom=(props:TRadioProps)=>{
  
    return (       
        <Item>
        <StyledRadioButton
        name={props.name}
        id={props.id}
        style={props.style}        
        checked={props.checked}
        value={ props.value}
        onChange={props.onChange}
        />
        <RadioButtonLabel htmlFor={props.id} />
           
        <label htmlFor={props.id}> {props.id}</label>
                            
        </Item>        
    );
};

export default RadioCustom;
