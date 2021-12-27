import ReactDOM from "react-dom";
import { ReactNode, useEffect, useState } from "react";
import { SnackbarShowBox, BoxBtn, ISnacktype, ProgressBarContainer, ProgressBarPercentage,ProgressBar,IProgressbar } from "./Snackbar";
import { SpinnerContainer } from "../../../GlobalStyledCom";

interface ISTProps extends ISnacktype {
    arr:Array<React.ReactNode>;
}
const IntervalBar = (props:IProgressbar):JSX.Element=>{

  return(
  <ProgressBarContainer>
  <ProgressBar>
    <ProgressBarPercentage width={props.width} />
  </ProgressBar>
</ProgressBarContainer>
)}

const SnackBarTest = (props: ISnacktype): JSX.Element => {
  const [Display, setDisplay] = useState(true);
  const [val, setVal] = useState<number>(100)
  const modalRoot = document.getElementById("portal") as HTMLElement;
  useEffect(() => {
    // const iterval = setInterval(() => {
    //     setVal((val: number) => {
    //         const newval: number = val + 10;
    //         if (newval === 100) {
    //             clearInterval(iterval)
    //             setDisplay(!Display)
    //         }            
    //         return newval
    //     });
    // }, 1000)
}, [])
  return ReactDOM.createPortal(
    <>
      {/* arr.map((i) => (
          ))} */}
      {Display && (
        <SnackbarShowBox type={props.type}>
          {props.type === "error" && <label>🚫</label>}
          {props.type === "success" && <label>👌</label>}
          {props.type === "info" && <label>📃</label>}
          {props.type === "loading" && <SpinnerContainer/>}
          {props.type === "warning" && <label>🚨</label>}
          <BoxBtn onClick={() => setDisplay(!Display)}>x</BoxBtn>
          <IntervalBar width={val}/>
        </SnackbarShowBox>
      )}
    </>,
    modalRoot
  );
};
export default SnackBarTest;

const Snackbar =({arr,...props}:ISTProps)=>{
   const[Arr]=useState<ReactNode[]>(arr)

  return <SnackBarTest {...props} />
}

// interface IuseSnackBarO{

//         SnackBar:ReactNode,
//         setNewSnake:() => void

// }
// const useSnackBar = ({type}:ISnacktype):IuseSnackBarO => {
//   const [state, setState] = useState<ISnacktype[]>([]);

//   const setNewSnake = () => {
//   setState((prevState) => [...prevState,{type}]);

//   };

//   return {
//     SnackBar:<p>my  edhjhjhjcxmcnbcnmbnxbcnbnbn</p>,
//     setNewSnake
// };
// };

//

// snakeBar: setNewSnake,St:()=>St(state)
