import React from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import '../calendar.css'

const CalendarView = (props) => {
    const dateArray = [new Date(props.date.date_start * 1000), new Date(props.date.date_end * 1000)]
    return (
        <>
            <Calendar
                showWeekNumbers
                value={dateArray}
            />
        </>
    );
};

export default CalendarView;
