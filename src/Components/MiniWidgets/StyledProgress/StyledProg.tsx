import React from "react";
import styled from "styled-components";
import Glow from "./Glow";
import MouseTracker from "./Mouaetrack";

interface IProps {
    percent?: number | string;
    children?: React.ReactNode;
    mousePosition?: any;
}
interface columnProps{
    align?:string;
}
const StyledBase = styled.div`
  width: 100%;
  border: 0;
  border-radius: 4px;
  background: #e5e5e5;
  color: #888;
  font: 400 12px/24px "Lato";
  overflow: hidden;
  position: relative;
  text-align: center;
`;
const StyledIndicator = styled.div<IProps>`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: ${props => `${props.percent}%`};
  overflow: hidden;
`;


const StyledInner = styled.div<IProps>`
  width: ${props => `(100 /${props.percent} )* 100%`};
  text-align: center;
  background: #7f00ff;
  background: linear-gradient(to right, #7f00ff, #e100ff);
  color: #fff;
`;
export const MockFlex = styled.div`
  display: flex;
  width: 100%;
`;
export const ColumnFl = styled.div<columnProps>`
  flex: 1 1 50%;
  text-align: ${(props) => props.align ? props.align : "center"};
  padding: 0 0.6em;
`;
const StyledProgressbar = function ({ children, percent, mousePosition, ...props }: IProps) {
    // percent = (percent < 0) ? 0 : (percent > 100) ? 100 : percent;
    return (
        <StyledBase {...props}>
            {children}
            <StyledIndicator percent={percent} aria-hidden={true}>
                <StyledInner percent={percent}>{children}</StyledInner>
            </StyledIndicator>
            {!!mousePosition && <Glow {...mousePosition} />}
        </StyledBase>
    );
};

export default StyledProgressbar;

export const Demo = () => {;
    return (
      <React.Fragment>     
        <StyledProgressbar percent={50}>Loading...</StyledProgressbar>
        <StyledProgressbar percent={100}>
          <MockFlex>
            <ColumnFl align="left">Left content</ColumnFl>
            <ColumnFl align="right">Right content</ColumnFl>
          </MockFlex>
        </StyledProgressbar>
        <h3>With hover effect</h3>
        {/* <MouseTracker
          render={(bindings:any, position:any) => (
            <StyledProgressbar percent={78} {...bindings} mousePosition={position}>
              <MockFlex>
                <ColumnFl align="left">Left content</ColumnFl>
                <ColumnFl align="right">Right content</ColumnFl>
              </MockFlex>
            </StyledProgressbar>
          )}
        /> */}
      </React.Fragment>
    );
  };