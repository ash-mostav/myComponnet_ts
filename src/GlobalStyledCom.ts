import { createGlobalStyle, css, ITheme } from "styled-components";
import styled from "styled-components";

const GlobalStyle = createGlobalStyle<ITheme>`
    *{       
        /* padding: 0; */
        outline:0;
        box-sizing:border-box;
        font-family: 'Open Sans', sans-serif; 
    }
    #root{
        margin:0 auto;
    }
    body{
      box-sizing: border-box;
       margin: 0 auto;
      background: ${(themeMode) => themeMode.body};
      transition: background 0.35s ease;
      -webkit-font-smoothing:antialiased;
      -moz-osx-font-smoothing:grayscale;
      .close-icon {
      display: block;
      width: 10px;
      height: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      &:before, &:after {
      position: absolute;
      content: "";
      display: block;
      background: #fff;
      height: 12px;
      width: 4px;
      border-radius: 10px;
      margin: 0 auto;
    } 
    &:after {
      transform: rotate(-45deg);
    };
    &:before {
      transform: rotate(45deg);
    }
  };
    }
 `;
export default GlobalStyle;
///////////////////////////////////////////////////
interface IGeneralProps {
  display?: "flex";
  justifyContent?: "start" | "center" | "end";
  alignItems?: "start" | "center" | "end";
  flexDirection?: "row" | "column";
}

const px2vw = (size: number, width = 1920) => `${(size / width) * 100}vw`;
const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "480px",
  tablet: "768px",
  laptop: "1366px",
  laptopL: "1920px",
  desktop: "2560px",
};

export const Typography = styled("p") <TypoProps>`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: ${(props) => (props.fontSize ? props.fontSize : "19")}px;
	color: ${(props) => props.color};
	font-weight: ${(props) => props.fontWeight};
	margin-bottom: ${(props) => props.MaB}px;
`;

export const Hr = styled("div") <HrProps>`
	width: 100%;
	height: ${(props) => (props.isheight ? "" : "1")}px;
	margin-bottom: ${(props) => props.MaB}px;
	margin-top: ${(props) => (props.Mt ? "10px" : "")};
`;
const Aspectrules = styled.div`
	aspect-ratio: 1 / 1;
	aspect-ratio: 16 / 9;
	aspect-ratio: 0.5;
`;
export const Div = styled.div`
	max-width: 1920px;
	height: auto;
	display: flex;
	margin: 0 auto;
	padding: 0.5rem;
	box-sizing: border-box;
	/* @media and screen (max-width:${size.mobileL}) {
        max-width: 460px;
        font-size: ${px2vw(12)};
      }
      @media and screen (min-width:${size.tablet}) {
        max-width: 1100px;
        font-size: ${px2vw(16)};
        width: ${px2vw(2200, 1100)};
      }
      @media  and screen (min-width:${size.laptop}) {
        max-width: 1366px;
        font-size: ${px2vw(18)};
        width: ${px2vw(3724, 1366)};
      }
      @media and screen (min-width:${size.laptopL}) {
        max-width: 1920px;
        font-size: ${px2vw(19)};
        width: ${px2vw(3840, 1920)};
      }
      @media and screen (min-width:${size.desktop}) {
        max-width: 2048px;
        font-size: ${px2vw(20)};
        width: ${px2vw(100)};
      }
    }  */
`;

export const Container = styled(Div)`
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	color: white;
	/* background-color: #131A22; */
`;
export const MainContainer = styled(Div)`
	width: 100%;
	display: flex;
	justify-content: start;
	align-items: center;
	flex-direction: column;
	box-sizing: border-box;
`;

export const FlexBox = styled(Div)`
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
	max-width: 1366px;
	margin: 0 auto;
`;

///////// FlexRow with Space Between \/
export const InnerRowSB = styled(FlexRow)`
	justify-content: space-between;
`;
export const endRow = styled(FlexRow)`
	justify-content: end;
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

/////////////////////////// custom Scrolls
export const bluishGradScroll = css`
	::-webkit-scrollbar-track {
		background-color: #f2f2f2;
		border-radius: 10px;
	}
	::-webkit-scrollbar {
		width: 5px;
		background-color: #f5f5f5;
	}
	::-webkit-scrollbar-thumb {
		border-radius: 10px;
		background-image: -webkit-gradient(
			linear,
			left bottom,
			left top,
			color-stop(0.44, rgb(122, 153, 217)),
			color-stop(0.72, rgb(73, 125, 189)),
			color-stop(0.86, rgb(28, 58, 148))
		);
	}
`;
export const grayeshBlueGradScroll = css`
	::-webkit-scrollbar-track {
		-webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
		background-color: #f5f5f5;
		border-radius: 10px;
	}
	::-webkit-scrollbar {
		width: 10px;
		background-color: #f5f5f5;
	}
	::-webkit-scrollbar-thumb {
		background-color: #3366ff;
		border-radius: 10px;
		background-image: -webkit-linear-gradient(
			0deg,
			rgba(255, 255, 255, 0.5) 25%,
			transparent 25%,
			transparent 50%,
			rgba(255, 255, 255, 0.5) 50%,
			rgba(255, 255, 255, 0.5) 75%,
			transparent 75%,
			transparent
		);
	}
`;
export const darkblueGradScroll = css`
	::-webkit-scrollbar-track {
		-webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
		background-color: #f5f5f5;
		border-radius: 10px;
	}
	::-webkit-scrollbar {
		width: 10px;
		background-color: #f5f5f5;
	}
	::-webkit-scrollbar-thumb {
		border-radius: 10px;
		background-color: #fff;
		background-image: -webkit-linear-gradient(
			top,
			#e4f5fc 0%,
			#bfe8f9 50%,
			#9fd8ef 51%,
			#2ab0ed 100%
		);
	}
`;
