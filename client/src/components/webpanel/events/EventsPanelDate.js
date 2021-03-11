import {Form} from "react-bootstrap";
import DateRangePicker from "@wojtekmaj/react-daterange-picker";
import TimeRangePicker from "@wojtekmaj/react-timerange-picker";
import React, {useEffect, useState} from "react";
import * as dayjs from 'dayjs'

const EventsPanelDate = (props) => {

    // string format of hour:minutes
    const startTime = (dayjs(props.start*1000).format("hh:mm"))
    const endTime = (dayjs(props.end*1000).format("hh:mm"))

    const [dateValue, onDateChange] = useState([new Date(props.start*1000), new Date(props.end*1000)]);
    const [timeValue, onTimeChange] = useState([startTime, endTime]);

    // whenever the date changes
    useEffect(() => {
        props.onChange({start: dateValue[0], end: dateValue[1]})
        },[dateValue])

    // whenever the time changes
    useEffect(() => {
        // get the hour and the minutes exactly by splitting via the colon symbol, ':'
        const startTime = timeValue[0].split(":");
        const endTime = timeValue[1].split(":");

        // update the dates hours and minutes
        const startDate = dayjs(dateValue[0]).hour(startTime[0]).minute(startTime[1])
        const endDate = dayjs(dateValue[1]).hour(endTime[0]).minute(endTime[1])

        // update our dates state
        onDateChange([startDate, endDate])
    },[timeValue])

    console.log(props)

    return(
        <>
            <Form.Group>
                <Form.Label>Dato og tid</Form.Label>
                <div>
                    <Form.Text className="text-muted">
                        Dato
                    </Form.Text>
                    <DateRangePicker
                        onChange={onDateChange}
                        value={dateValue}
                        required={true}
                    />
                    <div>
                        <Form.Text className="text-muted">
                            Klokkeslett
                        </Form.Text>
                        <TimeRangePicker
                            onChange={onTimeChange}
                            value={timeValue}
                            disableClock={true}
                            required={true}
                        />
                    </div>
                </div>
            </Form.Group>
        </>
    );
};
export default EventsPanelDate;