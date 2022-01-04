import React, { useState, useRef, useEffect, lazy } from "react";
import { Button, Form, Input,IStyledInputProps,InputPopList } from "./AwosomeInput/AwosomeInput.Styles";

interface IInputProps extends IStyledInputProps{
    onFocus?: React.FocusEventHandler<HTMLInputElement>
}

const StyledInput:React.FC<IInputProps>=()=> {
  const formRef = useRef<HTMLFormElement  | null>(null);
  const inputFocus = useRef<HTMLInputElement | null>(null);
  const [input, setInput] = useState<string>("");
  const [barOpened, setBarOpened] = useState<boolean>(false);
  const [list, setList] = useState<boolean>(false);
  const [list2, setList2] = useState<boolean>(false);
console.log(input)

  const onFormSubmit = (e:any) => {
    e.preventDefault();
    setInput("");
    // setBarOpened(false);
  };

  useEffect(()=>{
    if(barOpened === false){

       
    }
    else if(input.trim() ===''){
    setBarOpened(true);
    setList(true);
    setList2(false);
    }else{
        setList(false);
        setList2(true);

    }
  },[barOpened,input]);
  return (
    < >
      <Form
        barOpened={barOpened}
        onClick={() => {
        //   setList(true);
          setBarOpened(true);
          inputFocus.current?.focus();
        }}
        onFocus={() => {
          setBarOpened(true);
          setList2(true)
          inputFocus.current?.focus();
        }}
        onBlur={() => {
          setBarOpened(false);
          setList(false);
          setList2(false)
             
        }}
        onSubmit={onFormSubmit}
        ref={formRef}
      >
        <Button type="submit" barOpened={barOpened}>
          Search
        </Button>
        <Input
          onChange={e => setInput(e.target.value)}        
          ref={inputFocus}
          value={input}
          barOpened={barOpened}
        />
        {list && <InputPopList list={list}  >
        No text In input
        </InputPopList >
        }
       {list2 && <InputPopList list2={list2}  >
           <div><p>You are Searching</p><p>{input}</p></div>
         when there is text in the input
         </InputPopList>}
      </Form>
    </>
  );
}
export default StyledInput;