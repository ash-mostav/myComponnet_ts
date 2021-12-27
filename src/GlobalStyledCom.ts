import { createGlobalStyle, ITheme } from "styled-components";
import styled from "styled-components";

const GlobalStyle = createGlobalStyle<ITheme>`
    *{
        margin: 0;
        /* padding: 0; */
        outline:0;
        box-sizing:border-box;
        font-family: 'Open Sans', sans-serif; 
    }
    #root{
        margin:0 auto;
    }
    body{
      background: ${(themeMode) => themeMode.body};
      transition: background 0.35s ease;

    }
 `;
export default GlobalStyle;
///////////////////////////////////////////////////

export const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  color: white;
  /* background-color: #131A22; */
`;

export const MainContainer = styled("main")`
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
`;

export const Typography = styled("p")<TypoProps>`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${(props) => (props.fontSize ? props.fontSize : "19")}px;
  color: ${(props) => props.color};
  font-weight: ${(props) => props.fontWeight};
  margin-bottom: ${(props) => props.MaB}px;
`;

export const Hr = styled("div")<HrProps>`
  width: 100%;
  height: ${(props) => (props.isheight ? "" : "1")}px;
  margin-bottom: ${(props) => props.MaB}px;
  margin-top: ${(props) => (props.Mt ? "10px" : "")};
`;

const Aspectrules=styled.div`
aspect-ratio: 1 / 1;
aspect-ratio: 16 / 9;
aspect-ratio: 0.5;

`


export const FlexBox = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  background: ${(props) => props.color};  
`;

export const FlexRow = styled(FlexBox)`
  flex-direction: row;
`;
///////////// with Justify content Start
export const FlexRowJCS = styled(FlexRow)`
  justify-content: start;
`;
export const FlexRowJCSB = styled(FlexRow)`
  width: auto;
  justify-content: space-between;
`;

export const FlexColumn = styled(FlexBox)`
  flex-direction: column;
`;

export const InnerSection = styled(FlexColumn)`
  max-width: 1400px;
  width: 100%;
  margin: 0 auto;
`;

///////// FlexRow with Space Between \/
export const InnerRowSB = styled(FlexRow)`
  justify-content: space-between;
  width: 100%;
`;
export const endRow = styled(FlexRow)`
  justify-content: end;

  width: 100%;
`;

export const SpinnerContainer = styled.div`
  display: inline-block;
  width: 40px;
  height: 40px;
  border: 6px solid #fcdd06;
  border-top-color: #7c5ac2;
  box-sizing: border-box;
  border-radius: 50%;
  animation: spin 1s ease-in-out infinite;
  -webkit-animation: spin 1s ease-in-out infinite;

  @keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
  @-webkit-keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
`;
interface TypoProps {
  fontSize?: string | number;
  fontWeight?: string | number;
  MaB?: string | number;
}
interface HrProps {
  isheight?: string | number;
  MaB?: string | number;
  Mt?: string | number;
}
