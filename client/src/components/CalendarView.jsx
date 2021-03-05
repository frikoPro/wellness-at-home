import React, {useState} from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import './calendar.css'

const CalendarView = () => {
    const [value, onChange] = useState(new Date());

    return (
        <>
            <Calendar
                onChange={onChange}
                showWeekNumbers
                value={value}

            />
        </>
    );
};

export default CalendarView;
