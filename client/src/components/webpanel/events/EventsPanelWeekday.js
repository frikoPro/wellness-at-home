import React, {useEffect, useState} from 'react';
import {Col, Input, Row} from "antd";
import TextArea from "antd/es/input/TextArea";

const EventsPanelWeekday = props => {
    const [text, setText] = useState();

    const onTextChange = (e) => {
        console.log('onPoslatChange:', e.target.value);
        setText(e.target.value);
    };
    useEffect(() => {
        props.onTextChange(text);
    }, [text]);

    return (
        <>
            <Input.Group size="medium">
                <Row>
                    <Col span={10}>
                        <TextArea
                            allowClear={true}
                            placeholder={`Åpningstider  e.g: Fredag: 10:00-13:00`}
                            showCount
                            maxLength={500}
                            onChange={onTextChange}
                            autoSize={{ minRows: 2, maxRows: 7 }}
                        />
                    </Col>
                </Row>
            </Input.Group>
        </>
    );
};

export default EventsPanelWeekday;