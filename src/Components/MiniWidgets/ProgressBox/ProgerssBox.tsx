import React, { useEffect, useState } from "react";
import styled from "styled-components";

type Tspan={
    fontSize?:number;
    bolds?:true;
}
const TextStyledSpan =styled.span<Tspan>`
     display: "block";
  font-size: ${(props)=>props.fontSize || "2" }rem ;
  font-weight: ${(props)=>props.bolds? "bold" : "normal"};
  margin: 1 ;
`

const boxShadow = "0px 0px 6px -4px rgba(0,0,0,0.75)";

export const ProgressBoxContainer=styled.div`
 background: #fff;
  min-width: 300px;
  margin: 0 auto;
  padding: 2rem;
  border-radius: 10px;
  -webkit-BoxShadow: ${boxShadow};
  -moz-BoxShadow: ${boxShadow};
  box-shadow: ${boxShadow};
  overflow: hidden;
`
export const ProgressIndicatorContainer =styled.div`
  position: relative;
  width: 100%;
  height: 24px;
  background: rgb(175, 175, 175,0.5);
  border-radius: 5px;
  line-height: 10;
`
export const ProgressIndicator =styled.div`
  height: 100%;
  max-width:100%;
  background:linear-gradient(to left bottom, #1ad132, #00d261, #00d284, #00d0a0, #00cdb4);
  border-radius: 5px;
  margin-top: 20;
  `

interface IprogressProps{
    value?:number;
    text?:string;
}

const ProgressBox = ({ value, text }:IprogressProps) => {
    const [val,setval]=useState<any>(value);
    const [style, setStyle] = useState({});  
    useEffect(() => {
        const newStyle = {
          opacity: 1,
          width: `${val}%`
        }; 
        setStyle(newStyle)     
      }, [style,val]);
  return (
    <ProgressBoxContainer>
      <TextStyledSpan>{val > 0 ? `${val}%`:text}</TextStyledSpan>
      <ProgressIndicatorContainer>
        <TextStyledSpan
          style={{
            position: "absolute",
            textAlign: "center",
            width: "100%",
            height: "100%",
            color: "white"
          }}
        >
          {val === 100 && text}
        </TextStyledSpan>
        <ProgressIndicator style={style} />
      </ProgressIndicatorContainer>
      <input
        type="number"
        className="input"
       max={100}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setval(e.target.value)}
      />

    </ProgressBoxContainer>
  );
};

export default ProgressBox;
