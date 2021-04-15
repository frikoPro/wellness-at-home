import React, {useState} from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import './calendar.css'

const CalendarView = (props) => {
    const [value, onChange] = useState(new Date());
    // console.log(new Date(1618054898*1000))
    const dateArray = [new Date(props.date.date_start * 1000), new Date(props.date.date_end * 1000)]

    return (
        <>
            <Calendar
                onChange={onChange}
                showWeekNumbers
                value={dateArray}
            />
        </>
    );
};

export default CalendarView;
