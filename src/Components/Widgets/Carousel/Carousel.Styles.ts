import styled, { css } from "styled-components";
import { ArrowBackNoCline, ArrowForwardNoCline } from "../../MiniWidgets/Svg";

interface ICarProps {
    height?: string | number;
    width?: string | number;
    centerSlide?: boolean;
}
interface IDotProps {
    width?: string | number;
    widthActive?: string | number;
    height?: string | number;
    isActive?: boolean;
    idlecolor?: string | number;
    activecolor?: string | number;
}

export const Container = styled.div<ICarProps>`
	position: relative;
	box-sizing: border-box;
	width: ${({ width }) => width};
	height: ${({ height }) => height};
`;

export const Items = styled.div`
	display: flex;
	overflow: hidden;
	width: 100%;
	height: 100%;
	align-items: center;
`;

export const Item = styled.div<ICarProps>`
	height: 100%;
	transition-duration:0.25s;
	min-width: ${({ width }) => width};
	transform: ${({ centerSlide }) => (centerSlide ? "scale(1)" : "")};
	background: ${({ centerSlide }) => (centerSlide ? "#efefef" : "")};
    padding:1.3rem;
`;

export const IndicatorBox = styled.div` 
    width:100%;
    display:flex;
    flex-direction :row;
    flex:1 1 10%;
    align-self: center;
    justify-content:center;
     position: absolute;	
    bottom:calc(3% + 5px);
    margin :0 auto;
`
export const Indicator = styled.div<IDotProps>`
	width: ${(props) => !props.isActive ? props.width : (props.widthActive)};
	height: ${(props) => props.height};
	background: ${(props) => (!props.isActive ? props.idlecolor : props.activecolor)};    
    transition:width 0.15s ease-in-out;
	border-radius: 3px;
	margin: 0.51rem;
	cursor: pointer;
   
`;
Indicator.defaultProps = {
    width: "7px",
    widthActive: "24px",
    height: "5px",
    isActive: false,
    idlecolor: "#424242",
    activecolor: "#Ff0007",
}

const SVGsharedstyle = css`
	fill: #000;
	position: absolute;
	cursor: pointer;
	top: calc(50% - 12px);
	width: 24px;
`;
export const Left = styled(ArrowBackNoCline)`
	${SVGsharedstyle};
`;
export const Right = styled(ArrowForwardNoCline)`
	${SVGsharedstyle};
	right: 0;
`;
