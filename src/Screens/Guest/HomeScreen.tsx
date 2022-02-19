import React, { useState } from "react";
import Button, { RiButton } from "../../Components/Button/Button";
import RadioCustom from "../../Components/Button/Radio";
import AdvancedInput from "../../Components/MiniWidgets/AdInput/AdvancedInput";
import ProgressBar from "../../Components/MiniWidgets/Progressbar/ProgressBar";
import RadioButton from "../../Components/MiniWidgets/RadioButton/Radio";
import { Input } from "../../Components/Widgets/AnotherInput/AnotherInput";
import Gallery from "../../Components/Widgets/Gallery/Gallery";
import useSnackBar from "../../Components/Widgets/Snackbaar/SnackBaar";
import AdvancedTT from "../../Components/Widgets/ToolTip/AdvancedToolTip";
import { Container, FlexColumn, FlexRow, MainContainer } from "../../GlobalStyledCom";
// import SnackBarTest from "../../Components/Widgets/Snackbaar/SnackBaar";
import TagInput from "../../Components/MiniWidgets/TagInput/TagInput";
// import SearchTaginput from "../../Components/MiniWidgets/Serachtaginput/TagSearch";
import TaskList from "../../Components/Widgets/DNDTest/DNDtest";
import Card from "../../Components/Widgets/Card/Card";
import { Loading } from "../../Components/MiniWidgets/Animations/LoadingAnimation/Loading";
import Test2 from "../../Components/Widgets/DNDTest/test2";
import DropFileInput from "../../Components/Widgets/FileUploader/FileUpload";
import CalendarTable from "../../Components/Widgets/Calender/Calender";
import CubeLoader from "../../Components/MiniWidgets/Animations/LoadingAnimation/cube";
import Bar1 from "../../Components/MiniWidgets/Progress2/HorizentalProgress";
import CircleBar from "../../Components/MiniWidgets/Progresscircle/CircleProgress";
import ProgressBox from "../../Components/MiniWidgets/ProgressBox/ProgerssBox";
import RatingCircle from "../../Components/MiniWidgets/Circleratepreveiw/RateCirclePreveiw";
import StyledProgressbar, { Demo } from "../../Components/MiniWidgets/StyledProgress/StyledProg";
import SVGsScreen from "./svgsscreen";
import Slider from "../../Components/Widgets/Carousel/page1";
import Carousel from "../../Components/Widgets/Carousel/CarouselTest";

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

type Tstate = Omit<RadioArrShape, 'arr'>

const HomeScreen = () => {
  // const { snakeBar, St } = useSnackBar();
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

  // const handleChangeradio = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   if (e.target.value) {
  //     setradiostate(e.target.value)
  //     snakeBar("success");
  //   }
  //   return
  // };

 
  return (
    <MainContainer>
      <Demo/>
      <Carousel  
        width={"95vw"}
        height={"56vh"}
        numItemsInView={1}

        >
        <p><p>mostafa</p>1</p>
        <p><p>ahmed</p>2</p>
        <p><p>kh</p>3</p>
        <p><p>4</p>4</p>
        <p><p>5</p>5</p>
        <p><p>6</p>6</p>
        <p><p>7</p>7</p>
        <p><p>8</p>8</p>
        <p><p>9</p>9</p>
        <p><p>10</p>10</p>
        </Carousel>
       {/* <StyledProgressbar percent={50}>
       <h1 style={{ margin: 0, padding: "10px" }}>
        Progress bar with masked content
      </h1>
    </StyledProgressbar> */}
        {/* <RatingCircle rating={70}/> */}
        {/* <ProgressBox text="done" value={1}/> */}
      {/* <St /> */}
      <Slider/>
      <Container >
        {/* <Test2/> */}
        <CalendarTable/>
        <Button
          text={"iam here"}
          auto={"auto"}
          big={"big"}
          hfround={"hfround"}
        />
        <RiButton to={"/home"} text={"i am ripple"} />
        <RiButton text={"i am ripple"} />
      </Container>
      <Container>

        <DropFileInput />


        {/* <Bar1/> */}
        {/* <CircleBar/> */}
        {/* <Card/> */}
        {/* <Loading/> */}
       
      </Container>
      <FlexColumn>

        {/* <ProgressBar value={10} color="#1e9256" /> */}
        {/*  */}
        {/* <TagInput tags={["test","tests"]}/> */}
        {/* <AdvancedTT text={"this is my advanced Tool Tip"} type="right" srcpic="https://reactjsexample.com/content/images/2021/11/Snipaste_2021-11-09_21-13-57.jpg">
          <p>This is Right Tool-tip</p>
        </AdvancedTT>
        <AdvancedTT text={"this is my advanced Tool Tip"} type="left" srcpic="https://reactjsexample.com/content/images/2021/10/altV-better-notify.jpg">
          <p>This is Left Tool-tip</p>
        </AdvancedTT>
        <AdvancedTT text={"this is my advanced Tool Tip"} type="top" srcpic="https://reactjsexample.com/content/images/2020/08/react-js-banner.png">
          <p>This is Top Tool-tip</p>
        </AdvancedTT>
        <AdvancedTT text={"this is my advanced Tool Tip"} type="bottom" srcpic="https://reactjsexample.com/content/images/2020/12/react-hot-toast.gif">
          <p>This is Bottom Tool-tip</p>
        </AdvancedTT> */}
      </FlexColumn>
      <FlexColumn>
        {/* <AdvancedInput
          name={"email"}
          placeholder={"Write your E-mail"}
          onChange={(e) => setstate(e.target.value)}
          label={"Email"}
        />        */}
        {/* <Input
          onChange={val => console.log(val)}
          placeholder="With Icon..."
          className="hello"
          emojiSrc={"✌️"}
          maxWidth="400px"
        />
        <FlexColumn>
          {radiostate}
          {Arr.map((item, index) => {
            return (
              <RadioCustom key={index} name={item.name} value={item.value} id={item.id} onChange={handleChangeradio} />
            )
          })}
        </FlexColumn>
        <RadioButton /> */}
      </FlexColumn>
      <FlexColumn>
        {/* <Gallery/> */}
        {/* <TaskList /> */}
      </FlexColumn>
      {/* <SVGsScreen/> */}
 


    </MainContainer>
  );
};

export default HomeScreen;


