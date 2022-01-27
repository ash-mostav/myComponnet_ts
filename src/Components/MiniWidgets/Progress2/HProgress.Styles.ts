import styled, { css } from "styled-components";

export interface IBarProps {
    isdone?: boolean;

}
const progressSharedstyle=css`
  border-radius: 20px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 0;
  opacity: 0;
  transition: 1s ease 0.1s;  
`
export const HorizentalProgressContainer = styled.div<IBarProps>`
  background-color: #d8d8d8;
  border-radius: 20px;
  position: relative;
  margin: 15px 0;
  height: 30px;
  width: 300px;
  .progress-notdone {
  background: linear-gradient(to left, #f2709c, #ff9472);
  box-shadow: 0 2px 2px -5px #f2709c, 0 2px 5px #f2709c;
  ${progressSharedstyle}

  }
  .progress-done {
    background: linear-gradient(to right, #FDFC47, #24FE41);
  box-shadow: 0 2px 2px -3px #24FE41, 0 2px 3px #24FE41;   
  ${progressSharedstyle}
 
}


`

