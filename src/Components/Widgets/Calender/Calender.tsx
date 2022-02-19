import * as React from "react";
import { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { bluishGradScroll } from "../../../GlobalStyledCom";
import { ArrowBackIcon, ArrowForwardIcon, CogIcon } from "../../MiniWidgets/Svg";

interface ICalenderProps {
	isToday?: boolean;
	isWeek?: boolean;
	isSelected?: boolean;
	isthisyear?: boolean;
}

const Frame = styled.div`
	width: 232px;
	border: 2px solid lightgrey;
	border-radius: 3px;
	//box-shadow: 2px 2px 2px #eee;
	margin: 1%;
	display: inline-block;
`;
const Header = styled.div`
	font-size: 1rem;
	font-weight: bold;
	font-family: "Acme";
	font-style: "Acme";
	padding: 10px 10px 5px 10px;
	display: flex;
	justify-content: space-between;
	background-color: #fff;
	color: #38a9ff;
	div {
		cursor: pointer;
	}
`;
const Button = styled.div`
	cursor: pointer;
	font-size: 0.8rem;
`;
const Body = styled.div`
	width: 230px;
	display: flex;
	flex-wrap: wrap;
	background: #fff;
	border-radius: 0 0 3px 3px;
`;
const Day = styled.div<ICalenderProps>`
	width: 14.2%;
	height: 35px;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	user-select: none;
	color: #000;
	${(props) =>
		props.isToday &&
		css`
			border: 1px solid #00000080;
			border-radius: 3px;
		`}

	${(props) =>
		props.isSelected &&
		css`
			font-size: 1.1rem;
			font-weight: 600;
			background-color: #38a9ff80;
			border-radius: 3px;
		`}
    ${(props) =>
		props.isWeek &&
		css`
			background: #fcd007;
		`}
`;
const Week = styled.div<ICalenderProps>`
	width: 14.2%;
	height: 35px;
	font-size: 0.8rem;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	user-select: none;
	color: #0000009a;
`;
const ColumnBox = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: auto;
	height: auto;
`;
const DropDown = styled("div")`
	position: relative;
	box-sizing: inherit;
`;
const DropDownMenu = styled("div")`
	width: 229px;
	height: 276px;
	position: absolute;
	top: -0.5px;
	left: 0;
	z-index: 1000;
	padding: 0.4rem;
	margin: 0.125rem 0 0;
	font-size: 1rem;
	color: #212529;
	background-color: #fff;
	border-radius: 3px;
	transition: all 0.5s ease;
	display: flex;
	align-items: start;
	justify-content: start;
	flex-wrap: wrap;
	overflow: hidden;
	overflow-y: scroll;
	${bluishGradScroll};
`;
const MonthButton = styled.div`
	width: 100%;
	height: 60px;
	flex: 1 0 30.2%;
	padding: 2.5px;
	font-size: 0.8rem;
	font-weight: bolder;
	border-radius: 5px;
	outline: none;
	user-select: none;
	cursor: pointer;
	margin: 1%;
	display: flex;
	align-items: center;
	justify-content: center;
	box-shadow:-1px 1px 2px #89aab5;
	&:hover {
		background: #c2f1ff;
	}
`;
const YearsButton = styled(MonthButton)<ICalenderProps>`
	width: auto;
	height: 8%;
	flex: 1 1 10.2%;
	/* padding: 1.5px; */
	font-size: 0.8rem;
	font-weight: bolder;
	border-radius: 5px;
	outline: none;
	cursor: pointer;
	margin: 1%;
	display: flex;
	align-items: center;
	justify-content: center;
	&:hover {
		background: #c2f1ff;
	}
	${(props) =>
		props.isthisyear
			? css`
					background: #ffd900;
			  `
			: css`
					background: #6eb1c5;
			  `}
`;

const CalendarTable: React.FC<ICalenderProps> = () => {
	const DAYS = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
	const DAYS_LEAP = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
	const DAYS_OF_THE_WEEK = ["MO", "TU", "WE", "TH", "FR", "SA", "SU"];
	const DAYS_OF_THE_WEEK2 = ["SA", "SU", "MO", "TU", "WE", "TH", "FR"];
	const MONTHS = [
		"JAN",
		"FEB",
		"MAR",
		"APR",
		"MAY",
		"JUN",
		"JUL",
		"AUG",
		"SEP",
		"OCT",
		"NOV",
		"DEC",
	];

	const today = new Date();
	const [date, setDate] = useState(today);
	const [day, setDay] = useState(date.getDate());
	const [month, setMonth] = useState(date.getMonth());
	const [year, setYear] = useState(date.getFullYear());
	const [startDay, setStartDay] = useState(getStartDayOfMonth(date));
	const [visible, setVisible] = useState<boolean>(false);
	const [years, setYears] = useState<number[]>([]);
	const [ismonthlist, setIsMonthlist] = useState<boolean>(false);

	useEffect(() => {
		setDay(date.getDate());
		setMonth(date.getMonth());
		setYear(date.getFullYear());
		setStartDay(getStartDayOfMonth(date));
	}, [date]);

	function getStartDayOfMonth(date: Date) {
		return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
	}
	function getYearsRange(laterYears: number, olderYears: number) {
		for (let i = -laterYears; i <= olderYears; i++) {
			const thisyear = today.getFullYear();
			const yearlist: number = thisyear - i;
			years.push(yearlist);
		}
		return years;
	}
	const sliceData = (page: number, yearPerPage: number) => {
		return getYearsRange(50, 50).slice(page - 1, page * yearPerPage);
	};

	// function GetWeekDays(thisdate: Date) {
	// 	var weekDays = [];
	// 	for (var i = 0; i < 7; ++i) {
	// 		weekDays[day] = thisdate.toLocaleDateString("en-US", {
	// 			weekday: "short",
	// 		});

	// 		thisdate.setDate(day + 1);
	// 	}

	// 	return weekDays;
	// }
	// function getWeek(thisday: number, dayindex: number) {
	// 	//     let currentWeek = Math.ceil((thisday + 6 - day)/7);
	// 	//    let startdayofweek= new Date(today.getFullYear(), today.getMonth(),1).getDay()+6;
	// 	//    console.log("currentWeek",currentWeek)
	// 	//    console.log("startdayofweek",startdayofweek)startdayofweek - currentWeek
	// }

	function isLeapYear(year: any) {
		return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
	}
	const days = isLeapYear(date.getFullYear()) ? DAYS_LEAP : DAYS;

	return (
		<>
			<ColumnBox>
				<input type="text" value={getFormattedDate(date)}></input>
				<input type="text" value={getFormattedTime(date)}></input>
				<input type="text" value={getFormattedDatefull(date)}></input>
			</ColumnBox>

			<Frame>
				<DropDown>
					{visible && (
						<DropDownMenu onMouseLeave={()=>setVisible(!visible)}>
							{!ismonthlist &&
								sliceData(10, 10).map((i: number) => (
									<YearsButton
										key={i}
										isthisyear={i === year}
										onClick={() => {
											setYear(i);
											setIsMonthlist(!ismonthlist);
										}}
									>
										{i}
									</YearsButton>
								))}
							{ismonthlist &&
								MONTHS.map((x: string, index: number) => {
									return (
										<MonthButton
											key={index}
											onClick={() => {
												setMonth(index);
												setVisible(!visible);
												setIsMonthlist(!ismonthlist);
											}}
										>
											{x}
										</MonthButton>
									);
								})}
						</DropDownMenu>
					)}
				</DropDown>
				<Header>
					<Button onClick={() => setDate(new Date(year, month - 1, day))}><ArrowBackIcon/></Button>
					<div onClick={() => setVisible(!visible)}>
					<CogIcon width={"16px"}/>
						{MONTHS[month]} {year}
					</div>
					<Button onClick={() => setDate(new Date(year, month + 1, day))}><ArrowForwardIcon/></Button>
				</Header>
				<Body>
					{DAYS_OF_THE_WEEK.map((w) => (
						<Week key={w}>
							<strong>{w}</strong>
						</Week>
					))}
					{Array(days[month] + (startDay - 1))
						.fill(null)
						.map((_, index) => {
							const d = index - (startDay - 2);
							return (
								<Day
									key={index}
									isToday={d === today.getDate()}
									isSelected={d === day}
									onClick={() => {
										setDate(new Date(year, month, d));
									}}
								>
									{d > 0 ? d : ""}
								</Day>
							);
						})}
				</Body>
			</Frame>
		</>
	);
};

export default CalendarTable;

const getFormattedDate = (unformattedDate: Date) => {
	const date = new Date(unformattedDate);
	const year = date.getFullYear();
	let month = (1 + date.getMonth()).toString();
	month = month.length > 1 ? month : "0" + month;
	let day = date.getDate().toString();
	day = day.length > 1 ? day : "0" + day;

	return day + "/" + month + "/" + year;
};

const getFormattedDatefull = (unformattedDate: Date) => {
	const dateformat = unformattedDate.toLocaleDateString("en-US", {
		weekday: "short",
		year: "numeric",
		month: "short",
		day: "numeric",
	});
	return dateformat;
};

const getFormattedTime = (unformattedDate: Date) => {
	const date = unformattedDate;
	const hours = date.getHours().toString();
	const minutes = date.getMinutes().toString();

	return hours + ":" + minutes;
};
