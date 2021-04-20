import {Form} from "react-bootstrap";
import React, {useEffect, useState} from "react";
import { DatePicker, Space } from 'antd';
import 'antd/dist/antd.css';

const EventsPanelDate = (props) => {
    const [dateString, setDateString] = useState([])

    // whenever the date changes, pass new data to parent
    useEffect(() => {
        props.onChange(dateString)
    },[dateString])

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