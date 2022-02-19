import React, { useState } from "react";
import styled from "styled-components";
import { FlexRow } from "../../../GlobalStyledCom";

interface IDotProps {
	width?: string | number;
	height?: string | number;
	isGray?: boolean;
	idlecolor?: string | number;
	activecolor?: string | number;
}
interface IPageProps {
	position?: string | undefined;
	children?: React.ReactNode;
}
const Dot = styled.div<IDotProps>`
	width: ${(props) => props.width};
	height: ${(props) => props.height};
	background: ${(props) => (props.isGray ? props.idlecolor : props.activecolor)};
	border-radius: 50%;
	cursor: pointer;
	margin: 0 10.5px;
`;
const Arrow = styled.div`
	font-size: 35px;
	color: #000000;
	margin: 0 23px;
	width: 30px;
	font-weight: 700;
	cursor: pointer;
`;

const SliceContainer = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
	align-content: center;
	width: 100vw;
	overflow-x: hidden;
	transform: translateX(0);
	transition: transform 0.3s ease-in-out;
`;

const Slidebox = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
	align-content: center;
	width: 100%;
	overflow-x: hidden;
	.lastPage {
		transform: translateX(-100vw);
	}

	.nextPage {
		transform: translateX(100vw);
	}
`;
export default function Slider() {
	const [currentPageIndex, setCurrentPageIndex] = useState<number>(0);
	const onButtonClick = (val: number) => {
		setCurrentPageIndex(val);
	};

	return (
		<Slidebox>
			<div>
				<Page
					position={currentPageIndex === 0 ? "currentPage" : "lastPage"}
					children={<p>first slide test</p>}
				/>
				<Page
					position={currentPageIndex === 0 ? "nextPage" : "currentPage"}
					children={<p>second slide test</p>}
				/>
				<Page
					position={currentPageIndex === 0 ? "nextPage" : "currentPage"}
					children={<p>third slide test</p>}
				/>
			</div>
			<FlexRow>
				<Dot
					isGray={currentPageIndex !== 0}
					onClick={() => {
						setCurrentPageIndex(0);
					}}
				></Dot>
				<Dot
					isGray={currentPageIndex !== 1}
					onClick={() => {
						setCurrentPageIndex(1);
					}}
				></Dot>
				<Dot
					isGray={currentPageIndex !== 2}
					onClick={() => {
						setCurrentPageIndex(2);
					}}
				></Dot>
			</FlexRow>
		</Slidebox>
	);
}

export const Page = ({ position, children }: IPageProps) => {
	return (
		<SliceContainer className={position}>
			<>{children}</>
		</SliceContainer>
	);
};

const IndexController = () => {
	const [sliderIndex, setSliderIndex] = useState(0);
	const handleChangeIndex = () => {};
	return (
		<FlexRow>
			{/* <Arrow
              isLeft={true}
              onClick={() => {
                if (sliderIndex === 0) setSliderIndex(2);
                else setSliderIndex(sliderIndex - 1);
              }}
            >
              &#10095;
            </Arrow> */}
			<Dot
				width="25px"
				height="25px"
				isGray={sliderIndex !== 0}
				onClick={() => {
					setSliderIndex(0);
				}}
			></Dot>
			<Dot
				width="25px"
				height="25px"
				isGray={sliderIndex !== 1}
				onClick={() => {
					setSliderIndex(1);
				}}
			></Dot>
			<Dot
				width="25px"
				height="25px"
				isGray={sliderIndex !== 2}
				onClick={() => {
					setSliderIndex(2);
				}}
			></Dot>
			{/* <Arrow
              onClick={() => {
                if (sliderIndex === 2) setSliderIndex(0);
                else setSliderIndex(sliderIndex + 1);
              }}
            >
              &#10095;
            </Arrow> */}
		</FlexRow>
	);
};

Dot.defaultProps = {
	width: "16px",
	height: "16px",
	isGray: false,
	idlecolor: "#424242",
	activecolor: "#Fcd007",
};

// <SwipeableViews
// style={Object.assign({}, styles.root, styles.root)}
// index={ }
// onChangeIndex={handleChangeIndex}
// >
// <HeroBox>
//   <SideBox>
//     <Typography fontSize={32} color={"#242424"}>
//       Save up to $39.99
//     </Typography>
//     <HeroTitle>PlayStation 5</HeroTitle>
//     <Typography fontSize={32} color={"#242424"}>
//       Lightning-fast download speed with super-fast SSD storage
//     </Typography>
//     <Button
//       text="Shop now"
//       width={"220px"}
//       borderRadius={20}
//       style={{ marginTop: 42, height: 52 }}
//     />
//   </SideBox>
//   <SideBox>
//     <SideBoxImg src={sideBoxImg} alt="img" />
//   </SideBox>
// </HeroBox>
// <HeroBox>
//   <SideBox>
//     <Typography fontSize={32} color={"#242424"}>
//       Save up to $39.99
//     </Typography>
//     <HeroTitle>PlayStation 5</HeroTitle>
//     <Typography fontSize={32} color={"#242424"}>
//       Lightning-fast download speed with super-fast SSD storage
//     </Typography>
//     <Button
//       text="Shop now"
//       width={"220px"}
//       borderRadius={20}
//       style={{ marginTop: 42, height: 52 }}
//     />
//   </SideBox>
//   <SideBox>
//     <SideBoxImg src={sideBoxImg} alt="img" />
//   </SideBox>
// </HeroBox>
// <HeroBox>
//   <SideBox>
//     <Typography fontSize={32} color={"#242424"}>
//       Save up to $39.99
//     </Typography>
//     <HeroTitle>PlayStation 5</HeroTitle>
//     <Typography fontSize={32} color={"#242424"}>
//       Lightning-fast download speed with super-fast SSD storage
//     </Typography>
//     <Button
//       text="Shop now"
//       width={"220px"}
//       borderRadius={20}
//       style={{ marginTop: 42, height: 52 }}
//     />
//   </SideBox>
//   <SideBox>
//     <SideBoxImg src={sideBoxImg} alt="img" />
//   </SideBox>
// </HeroBox>
// </SwipeableViews>
