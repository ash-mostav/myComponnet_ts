import ReactDOM from "react-dom";
import React, { useEffect, useState } from "react";
import { SnackbarShowBox, BoxBtn, ISnacktype, ProgressBarContainer, ProgressBarPercentage, ProgressBar, IProgressbar } from "./Snackbar";
import { SpinnerContainer } from "../../../GlobalStyledCom";
import { InterpolationFunction } from "styled-components";

interface ISTProps extends ISnacktype {
  arr?: Array<React.ReactNode>;
  // key?:React.Key;
}

type TType = "error" | "info" | "success" | "warning" | "loading" | undefined;

const IntervalBar = (props: IProgressbar): JSX.Element => {
  return (
    <ProgressBarContainer>
      <ProgressBar>
        <ProgressBarPercentage width={props.width} />
      </ProgressBar>
    </ProgressBarContainer>
  )
}

export const St = (props: TType) => {
  const [Display, setDisplay] = useState(true);
  const [val, setVal] = useState<number>(0);
  const modalRoot = document.getElementById("portal") as HTMLElement;
  useEffect(() => {
    const iterval = setInterval(() => {
      setVal((val: number) => {
        const newval: number = val + 5;
        if (newval === 100) {
          clearInterval(iterval)
          setDisplay(!Display)
        }
        return newval
      });
    }, 250)
  }, [])

  return ReactDOM.createPortal(
    <>
      {Display &&
        <SnackbarShowBox type={props}>
          {props === "success" && <label>👌</label>}
          {props === "info" && <label>📃</label>}
          {props === "error" && <label>🚫</label>}
          {props === "loading" && <SpinnerContainer />}
          {props === "warning" && <label>🚨</label>}
          <BoxBtn onClick={() => setDisplay(!Display)}>x</BoxBtn>
          <IntervalBar width={val} />
        </SnackbarShowBox>}
    </>, modalRoot
  );
};
type Tstate = Pick<ISTProps, "type">;
// Tstate|(() => Tstate)  setState((prevState:any) => [...prevState, snack]); 
export const useSnackBar = () => {
  const [state, setState] = useState<TType>(undefined);
  const setNewSnake = (snack: TType = undefined) => {
    setState(snack);
    console.log("state", state)
  };

  return {
    snakeBar: setNewSnake, St: () => St(state)
  };
};
export default useSnackBar;
