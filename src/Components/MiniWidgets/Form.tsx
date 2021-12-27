import { useState } from "react";
import Input from "./CustomInput";
import SButton from "./StanderdButton";

function Form() {
  const [nameInput, setNameInput] = useState("");
  const onChange = (str: string) => {
    setNameInput(str);
  };

  return (
    <form>
      <Input
        onChange={onChange}
        name="name"
        placeholder="Enter your name"
        value={nameInput}        
        />
        <SButton value='Submit' processing={false} />
      <SButton value='Submit' processing={true} />
    </form>
  );
}

export default Form;