import React, { useState } from "react";
import Button, { RiButton } from "../../Components/Button/Button";
import RadioCustom from "../../Components/Button/Radio";
import AdvancedInput from "../../Components/MiniWidgets/AdInput/AdvancedInput";
import ProgressBar from "../../Components/MiniWidgets/Progressbar/ProgressBar";
import RadioButton from "../../Components/MiniWidgets/RadioButton/Radio";
import { Input } from "../../Components/Widgets/AnotherInput/AnotherInput";
import SnackBarTest from "../../Components/Widgets/Snackbaar/SnackBaar";
import AdvancedTT from "../../Components/Widgets/ToolTip/AdvancedToolTip";
import { Container, FlexColumn, FlexRow } from "../../GlobalStyledCom";

interface IradioProps {
  type: 'radio';
  name: 'content';
  value?: string;
  id: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  checked?: boolean;
}
interface IProps {
  arr: RadioArrShape[]
}
interface RadioArrShape extends IProps {
  name: string;
  value: string;
  id: string;
}

type  Tstate=Omit<RadioArrShape,'arr'>



const HomeScreen: React.FC<IradioProps> = () => {
  const [inputstate, setstate] = useState<string>("");
  const [radiostate, setradiostate] = useState<string>("");
  const [Arr] = useState<Tstate[]>([
    {
      name: "Soda",
      value: "coka kola",
      id: "coke"
    },
    {
      name: "Soda",
      value: "7 up free",
      id: "7 up"
    },
    {
      name: "Soda",
      value: "sprite dite",
      id: "sprite"
    },
  ]);

  const handleChangeradio = (e: React.ChangeEvent<HTMLInputElement>) => {   
    if (e.target.value) {
      setradiostate(e.target.value)     
    }      
    return
  };
  //  const {SnackBar,setNewSnake}=useSnackBar({type:"error"})
  return (
    <>
    <SnackBarTest type="success"/>
   {/* <SnackBarTest type="error"/>
   <SnackBarTest type="info"/>
   <SnackBarTest type="warning"/>
   <SnackBarTest type="loading"/> */}
      <Container>
        <Button
          text={"iam here"}
          auto={"auto"}
          big={"big"}
          hfround={"hfround"}
        />
        <RiButton to={"/home"} text={"i am ripple"} />
        <RiButton text={"i am ripple"} />
      </Container>
      <FlexColumn>
        {/* <ProgressBar value={10} color="#1e9256" /> */}
        {/*  */}
        <AdvancedTT text={"this is my advanced Tool Tip"} type="right">
          <p>This is Right Tool-tip</p>
        </AdvancedTT>
        <AdvancedTT text={"this is my advanced Tool Tip"} type="left">
          <p>This is Left Tool-tip</p>
        </AdvancedTT>
        <AdvancedTT text={"this is my advanced Tool Tip"} type="top">
          <p>This is Top Tool-tip</p>
        </AdvancedTT>
        <AdvancedTT text={"this is my advanced Tool Tip"} type="bottom">
          <p>This is Bottom Tool-tip</p>
        </AdvancedTT>
      </FlexColumn>
      <FlexColumn>
        <AdvancedInput
          name={"email"}
          placeholder={"Write your E-mail"}
          onChange={(e) => setstate(e.target.value)}
          label={"Email"}
        />
        {inputstate}
        <Input
          onChange={val => console.log(val)}
          placeholder="With Icon..."
          className="hello"
          emojiSrc={"✌️"}
          maxWidth="400px"
        />
        <FlexRow>
          {radiostate}
          {Arr.map((item, index) => {
            return (
              <RadioCustom key={index} name={item.name} value={item.value} id={item.id} onChange={handleChangeradio} />
            )
          })}
        </FlexRow>
        <RadioButton />
      </FlexColumn>

    </>
  );
};

export default HomeScreen;


