import {Form} from "react-bootstrap";
import DateRangePicker from "@wojtekmaj/react-daterange-picker";
import TimeRangePicker from "@wojtekmaj/react-timerange-picker";
import React, {useState} from "react";


const EventsPanelDate = () => {
    const [dateValue, onDateChange] = useState(new Date());
    const [timeValue, onTimeChange] = useState(['10:00', '11:00']);

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
                    {console.log(dateValue)}
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
                        {console.log(timeValue)}
                    </div>
                </div>
            </Form.Group>
        </>
    );
};
export default EventsPanelDate;