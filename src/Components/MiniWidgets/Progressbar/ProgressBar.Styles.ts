import styled from "styled-components";
import { IProgressDefault } from "./ProgressBar";

export const BarContainer = styled.div<IProgressDefault>`
  > progress {
    width: ${(props) => props.width};
    appearance: none;

    ::-webkit-progress-bar {
      height: 10px;
      border-radius: 20px;
      background-color: #eee;
    }
    ::-webkit-progress-value {
      height: 10px;
      border-radius: 20px;
      background-color: ${({ theme }) => theme.colors};
    }    
    @-moz-document url-prefix() {
      -moz-appearance: none;
      ::-moz-progress-bar {
        height: 10px;
        border-radius: 20px;
        background-color:${({ theme }) => theme.colors};
      }
      ::-moz-progress-value {
        height: 10px;
        border-radius: 20px;
        background-color: #000;
      }
      :indeterminate::-moz-progress-bar {
  width: 0;
}
    }
  }
`;
