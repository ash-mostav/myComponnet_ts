import React, { useState, useLayoutEffect, useEffect, ReactNode } from "react";
import { Container, Items, Item, Left, Right, Indicator, IndicatorBox } from "./Carousel.Styles";

const BUFFER_SIZE = 2;

interface ICArouselProps {
	children?: Array<React.ReactNode> | Array<React.ReactChild> | React.ReactElement | null;
	numItemsInView?: number;
	width?: string | number;
	height?: string | number;
	interval?: number;
	cssOR?: {} | undefined;
}

const Carousel: React.FC<ICArouselProps> = (props: any) => {
	const [firstVisibleItemIndex, setFirstVisibleItemIndex] = useState<number>(0);
	const [childrentoArr] = useState<Array<React.ReactNode>>(React.Children.toArray(props.children));
	const maxDOMLimit = props.numItemsInView + BUFFER_SIZE;
	const childrencount = React.Children.count(props.children);
	const firstItemIndex = Math.max(firstVisibleItemIndex - 1, 0);
	const lastItemIndex = firstItemIndex + maxDOMLimit;
	const lastVisibleItemIndex = firstVisibleItemIndex + props.numItemsInView;
	const inDOMItemsData = Array(childrencount)
		.fill(0)
		.map((_, i) => i)
		.slice(firstItemIndex, lastItemIndex);
	const centerItemIndex = Math.floor((firstVisibleItemIndex + lastVisibleItemIndex) / 2);
	const itemWidth = getItemWidth(props.width, props.numItemsInView);
	const itemRefs: any = [];

	useLayoutEffect(() => {
		if (firstVisibleItemIndex !== 0) {
			itemRefs[0].style.marginLeft = `-${itemWidth}`;
		}
	}, [firstVisibleItemIndex]);

	useEffect(() => {
		setFirstVisibleItemIndex(0);
		// console.log("data", props.data);
		// console.log("childrentoArr", childrentoArr);
		// console.log("inDOMItemsData", inDOMItemsData);

		// if (props.interval) {
		// 	setTimeout(() => {
		// 		setFirstVisibleItemIndex(firstVisibleItemIndex + 1);
		// 	}, props.interval | 2000);
            
		// }
        // return ()=>clearTimeout(1);
	}, [childrentoArr]);

	function getItemWidth(carouselWidth: any, numItemsInView: number) {
		const [absWidth, unit] = carouselWidth.match(/\d+|\D+/g);
		return `${absWidth / numItemsInView}${unit}`;
	}

	function onNextClick() {
		if (firstVisibleItemIndex + props.numItemsInView < childrentoArr.length) {
			setFirstVisibleItemIndex(firstVisibleItemIndex + 1);
		}
	}

	function onPrevClick() {
		if (firstVisibleItemIndex > 0) {
			requestAnimationFrame(() => {
				itemRefs[0].style.marginLeft = 0;
			});
			setFirstVisibleItemIndex(firstVisibleItemIndex - 1);
		}
	}

	function setRef(ref: any) {
		itemRefs.push(ref);
	}

	function getValidChildren(children: React.ReactNode) {
		return React.Children.toArray(children).filter((child) =>
			React.isValidElement(child),
		) as React.ReactElement[];
	}
	return (
        <>
        {console.log("render")}
		<Container width={props.width} height={props.height} className={props.cssOR} style={props.cssOR}>
			<Items>
				{inDOMItemsData.map((itemData: any, index: number) => {
					return (
						<Item
							ref={setRef}
							width={itemWidth}
							// parentWidth={width}
							key={index}
							centerSlide={itemData === childrentoArr[centerItemIndex]}
						>
							{childrentoArr[itemData]}
						</Item>
					);
				})}
			</Items>
			<Left onClick={onPrevClick} />
			<Right onClick={onNextClick} />
			<IndicatorBox>
				{childrentoArr.map((item: any, index: number) => (
					<Indicator
						key={index}
						widthActive={"30px"}
						isActive={item === childrentoArr[centerItemIndex]}
						onClick={() => {
							if (index === 0) {
								setFirstVisibleItemIndex(0);
							} else if (firstVisibleItemIndex < index) {
								setFirstVisibleItemIndex(index);
							} else if (firstVisibleItemIndex > 0) {
								setFirstVisibleItemIndex(index);
							}
						}}
					/>
				))}				
			</IndicatorBox>
		</Container>
        </>
	);
};
Carousel.defaultProps = {
	children: null,
	numItemsInView: 1,
	width: 0,
	height: 0,
};

export default Carousel;
