import {Form} from "react-bootstrap";
import React, {useEffect, useState} from "react";
import { DatePicker, Space } from 'antd';
import 'antd/dist/antd.css';
import dayjs from "dayjs";


const EventsPanelDate = (props) => {

    // string format of hour:minutes
    // const startTime = (dayjs(props.start*1000).format("hh:mm"))
    // const endTime = (dayjs(props.end*1000).format("hh:mm"))

    // const [dateValue, onDateChange] = useState([new Date(props.start*1000), new Date(props.end*1000)]);
    // const [timeValue, onTimeChange] = useState([startTime, endTime]);

    const [dateString, setDateString] = useState([])

    // whenever the date changes
    useEffect(() => {
        props.onChange(dateString)
    },[dateString])


    // // whenever the time changes
    // useEffect(() => {
    //     // get the hour and the minutes exactly by splitting via the colon symbol, ':'
    //     const startTime = timeValue[0].split(":");
    //     const endTime = timeValue[1].split(":");
    //
    //     // update the dates hours and minutes
    //     const startDate = dayjs(dateValue[0]).hour(startTime[0]).minute(startTime[1])
    //     const endDate = dayjs(dateValue[1]).hour(endTime[0]).minute(endTime[1])
    //
    //     // update our dates state
    //     onDateChange([startDate, endDate])
    // },[timeValue])

    // console.log(dayjs(dateString[0]).unix())
    // console.log(dayjs(dateString[1]).unix())

    const { RangePicker } = DatePicker;

    // momentjs object
    function onChange(momentValues, dateStrings) {
        console.log('Selected Time: ', momentValues);
        console.log('Formatted Selected Time: ', dateStrings);
        if(momentValues === null || momentValues.length === 0 || momentValues.length === 1) {
            setDateString([])
            return;
        }
        const dateArray = [momentValues[0]?.unix(), momentValues[1]?.unix()]
        setDateString(dateArray)
    }

    function onOk(value) {
        console.log('onOk: ', value);
    }

    return(
        <>
            <Form.Group>
                <Form.Label>Dato og tid</Form.Label>
                <div>
                    <Space direction="vertical" size={6}>
                        <RangePicker
                            showTime={{ format: 'HH:mm' }}
                            format="YYYY-MM-DD HH:mm"
                            onChange={onChange}
                            onOk={onOk}
                        />
                    </Space>
                </div>
            </Form.Group>
        </>
    );
};
export default EventsPanelDate;