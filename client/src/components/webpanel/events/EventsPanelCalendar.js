import {Form} from "react-bootstrap";
import DateTimeRangePicker from "@wojtekmaj/react-datetimerange-picker";
import React, {useEffect, useState} from "react";


const EventsPanelCalendar = (props) => {
    const [calendarValue, onCalendarChange] = useState([new Date(), new Date()]);
    console.log(props)

    useEffect(() => {
        props.onChange({start: calendarValue[0], end: calendarValue[1]})
    },[calendarValue])

    return(
        <>
            <Form.Group>
                <Form.Label>Kalender</Form.Label>
                <Form.Text className="text-muted">Tittel</Form.Text>
                <Form.Control type="text" placeholder="Wellness at home - Drammenshallen" />
                <br/>
                <Form.Text className="text-muted">Beskrivelse</Form.Text>
                <Form.Control type="text" placeholder="Kort beskrivelse" />
                <br/>
                <Form.Text className="text-muted">Dato og klokkeslett</Form.Text>
                <div>
                    <DateTimeRangePicker
                        onChange={onCalendarChange}
                        value={calendarValue}
                    />
                </div>
            </Form.Group>
        </>
    );
};
export default EventsPanelCalendar;