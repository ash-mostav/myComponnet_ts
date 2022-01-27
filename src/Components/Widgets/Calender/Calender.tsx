import * as React from "react";
import { useState, useEffect } from "react";
import styled, { css } from "styled-components";

interface ICalenderProps {
    isToday?: boolean;
    isWeek?: boolean;
    isSelected?: boolean;
}
const Frame = styled.div`
  width: 232px;
  border: 2px solid lightgrey;
  border-radius: 8px;
  //box-shadow: 2px 2px 2px #eee;
  margin: 1%;
  display:inline-block;
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
  color:#38a9ff;
`;
const Button = styled.div`
  cursor: pointer;
  font-size:0.8rem;
`;
const Body = styled.div`
  width: 230px;
  display: flex;
  flex-wrap: wrap;
  background: #fff;
  border-radius:0 0 7px 7px;
`;
const Day = styled.div<ICalenderProps>`
  width: 14.2%;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  user-select: none;
color:#000;
  ${(props) =>
        props.isToday &&
        css`     
      border: 1px solid #00000080;  
      border-radius:3px;   
    `}

  ${(props) =>
        props.isSelected &&
        css`      
      font-size: 1.1rem;
      font-weight: 600;
      background-color: #38a9ff80;     
      border-radius:3px;
    `}
    ${(props) =>
        props.isWeek &&
        css`     
      background:#fcd007;     
    `}
`;
const Week = styled.div<ICalenderProps>`
  width: 14.2%;
  height: 35px;
  font-size:0.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  user-select: none;
  color:#0000009a; 
`;

const CalendarTable: React.FC<ICalenderProps> = () => {
    const DAYS = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const DAYS_LEAP = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const DAYS_OF_THE_WEEK = ["MO", "TU", "WE", "TH", "FR", "SA", "SU"];
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

    useEffect(() => {
        setDay(date.getDate());
        setMonth(date.getMonth());
        setYear(date.getFullYear());
        setStartDay(getStartDayOfMonth(date));
    }, [date]);

    function getStartDayOfMonth(date: Date) {
        return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
    };

    function GetWeekDays(thisdate:Date){
        var weekDays = [];    
        for (var i = 0; i < 7; ++i) {
            weekDays[day] = thisdate.toLocaleDateString('en-US', {
                weekday: "short",
            });
    
            thisdate.setDate(day + 1);
        }
    
        return weekDays;
    };
    function getWeek(thisday:number,dayindex: number) {
    //     let currentWeek = Math.ceil((thisday + 6 - day)/7);
    //    let startdayofweek= new Date(today.getFullYear(), today.getMonth(),1).getDay()+6;
    //    console.log("currentWeek",currentWeek)
    //    console.log("startdayofweek",startdayofweek)startdayofweek - currentWeek 
    };

    function isLeapYear(year: any) {
        return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
    };
    const days = isLeapYear(date.getFullYear()) ? DAYS_LEAP : DAYS;
    const onChange = (e: any) => {
    }

    return (
        <>
            <Frame>
                <input type="text" value={getFormattedDate(date)}
                // onChange={e=>}       
                ></input>
                <input type="text" value={getFormattedTime(date)}
                ></input>
                <input type="text" value={getFormattedDatefull(date)}
                ></input>
                <Header>
                    <Button onClick={() => setDate(new Date(year, month - 1, day))}>
                        Back
                    </Button>
                    <div>
                        {MONTHS[month]} {year}
                    </div>
                    <Button onClick={() => setDate(new Date(year, month + 1, day))}>
                        Next
                    </Button>
                </Header>
                <Body>
                    {DAYS_OF_THE_WEEK.map((w) => (
                        <Week
                            key={w}>
                            <strong>{w}</strong>
                        </Week>
                    )
                    )}
                    {Array(days[month] + (startDay - 1))
                        .fill(null)
                        .map((_, index) => {
                            const d = index - (startDay - 2);
                            return (
                                <Day
                                    key={index}
                                    isToday={d === (today.getDate())}
                                    isSelected={d === day}
                                    onClick={() => { setDate(new Date(year, month, d)) }}
                                >
                                    {d > 0 ? d : ""}
                                </Day>
                            );
                        })}
                </Body>
            </Frame>
        </>
    );
}

export default CalendarTable;

const getFormattedDate = (unformattedDate: Date) => {
    const date = new Date(unformattedDate);
    const year = date.getFullYear();
    let month = (1 + date.getMonth()).toString();
    month = month.length > 1 ? month : '0' + month;
    let day = date.getDate().toString();
    day = day.length > 1 ? day : '0' + day;

    return day + '/' + month + '/' + year;
};

const getFormattedDatefull = (unformattedDate: Date) => {
    const dateformat = unformattedDate.toLocaleDateString('en-US', {
        weekday: "short",
        year: 'numeric',
        month: 'short',
        day: 'numeric',
    })
    return dateformat;
};

const getFormattedTime = (unformattedDate: Date) => {
    const date = unformattedDate;
    const hours = date.getHours().toString();
    const minutes = date.getMinutes().toString();

    return hours + ':' + minutes;
};
