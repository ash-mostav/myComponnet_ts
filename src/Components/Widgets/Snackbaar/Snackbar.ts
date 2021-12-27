import styled, { css } from "styled-components";
import { FlexColumn, FlexRow } from "../../../GlobalStyledCom";
import { FlexCenter } from "../../../Themming/GlobalCSSVariables";

export interface ISnacktype {
  type: "error" | "info" | "success" | "warning" | "loading";
}
export interface IProgressbar {
  width: number;
}

const SharedStyles = css`
  z-index: 10001;
  border-radius: 6px 6px 0 0;
  padding: 0.7rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  label{
    font-size:1.7rem;
  }
`;
const leftmotion = css`
  animation: flipc 0.3s linear;
  @keyframes flipc {
    0% {
      left: -120px;
      opacity: 0;
    }
    100% {
      left: 1%;
    }
  } ;
`;
const topmotion = css`
  animation: flipa 0.3s ease;
  @keyframes flipa {
    0% {
      top: -120px;
      opacity: 0;
    }
    100% {
      top: 11%;
    }
  } ;
`;
const bottommotion = css`
  animation: flipb 0.3s ease;
  @keyframes flipb {
    0% {
      bottom: -120px;
      opacity: 0;
    }
    100% {
      bottom: 1%;
    }
  } ;
`;

export const SnackbarShowBox = styled.div<ISnacktype>((props: ISnacktype) => {
  switch (props.type) {
    case "error":
      return css`
        color: #ffffff;
        background: #ff0000;
        width: 280px;
        height: 10%;
        top: 3%;
        left: 45%;
        &:before {
          content: 'Somethings gone wrong , sorry....';
        }
        ${topmotion}
        ${SharedStyles}
      `;
    case "info":
      return css`
        color: #fff;
        background: #007bff;
        bottom: 1%;
        left: 25%;
        width: 50vw;
        height: 20%;
        &:before {
          content: 'This is useful and is quite a long message, and wont be hidden automatically. You need to dismiss this by clicking the  on the right.';
        }
        ${bottommotion}
        ${SharedStyles}
      `;
    case "success":
      return css`
        color: #fff;
        background: #34ac39;
        width: 250px;
        left: 1%;
        top: 15%;
        height: 10%;
        &:before {
          content: 'That worked, hoorah.';
        }
        ${leftmotion}
        ${SharedStyles}
      `;
    case "warning":
      return css`
        color: #fff;
        background: #ff7000;
        width: 350px;
        top: 27%;
        left: 1%;
        height: 10%;
        &:before {
          content: ' Oops,You probably shouldnt have seen that.';
        }
        ${leftmotion}
        ${SharedStyles}
      `;
    case "loading":
      return css`
        color: #fff;
        background: #343434;
        border: 1px double #f2f2f2;
        width: 250px;
        top: 39%;
        left: 1%;
        height: 10%;
        transition: all 0.3s;
        &:before {
          content: 'Loding ...Please wait ';
        }
        ${leftmotion}
        ${SharedStyles}
      `;
    default:
      return css`
        ${SharedStyles}
      `;
  }
});

export const BoxBtn = styled("button")`
  width: 24px;
  height: 24px;
  ${FlexCenter}
  cursor: pointer;
  transition: all 0.5s ease;
  position: absolute;
  border: none;
  border-radius: 5px;
  font-size: 1.3rem;
  font-weight: 600;
  background: #000;

  color: #fff;
  top: -7px;
  right: -7px;
  z-index: 1010;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;

    transition: all 0.1s ease;
    border-radius: 5px;
  }
  &:hover::before {
    opacity: 0;
    transform: scale(0.5, 0.5);
  }
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    opacity: 0;
    transition: all 0.2s;
    border: 1px solid #ffffff;
    transform: scale(1.2, 1.2);
    border-radius: 5px;
  }

  &:hover::after {
    opacity: 1;
    transform: scale(1, 1);
  }
`;

export const ProgressBar = styled(FlexColumn)`
  height: 5px;
  width: 100%;
  background: #fff;
  border-radius:0 0 6px 6px;
  justify-content: start;
  align-items: start;
`;

export const ProgressBarPercentage = styled(ProgressBar)((props:IProgressbar) => ({
    width: props.width + "%",
}));

export const ProgressBarContainer = styled(FlexRow)`
width:100%;
  justify-content: center;
  position:absolute;
  bottom:-5px;
  left:0;
  ${ProgressBarPercentage}{
    background:${({theme})=>theme.colors};
    /* background: linear-gradient(
        90deg,
        rgba(255, 0, 0, 1) 0%,
        rgba(255, 154, 0, 1) 10%,
        rgba(208, 222, 33, 1) 20%,
        rgba(79, 220, 74, 1) 30%,
        rgba(63, 218, 216, 1) 40%,
        rgba(47, 201, 226, 1) 50%,
        rgba(28, 127, 238, 1) 60%,
        rgba(95, 21, 242, 1) 70%,
        rgba(186, 12, 248, 1) 80%,
        rgba(251, 7, 217, 1) 90%,
        rgba(255, 0, 0, 1) 100% */        
    /* ); */
    /* background: linear-gradient(124deg, #ff2400, #e81d1d, #e8b71d, #e3e81d, #1de840, #1ddde8, #2b1de8, #dd00f3, #dd00f3);
background-size: 1800% 1800%;
-webkit-animation: rainbow 18s ease infinite;
-z-animation: rainbow 18s ease infinite;
-o-animation: rainbow 18s ease infinite;
  animation: rainbow 18s ease infinite;}

@-webkit-keyframes rainbow {
    0%{background-position:0% 82%}
    50%{background-position:100% 19%}
    100%{background-position:0% 82%}
}
@-moz-keyframes rainbow {
    0%{background-position:0% 82%}
    50%{background-position:100% 19%}
    100%{background-position:0% 82%}
}
@-o-keyframes rainbow {
    0%{background-position:0% 82%}
    50%{background-position:100% 19%}
    100%{background-position:0% 82%}
}
@keyframes rainbow { 
    0%{background-position:0% 82%}
    50%{background-position:100% 19%}
    100%{background-position:0% 82%}
} */
  }
`;