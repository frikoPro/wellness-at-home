import React, {useState, useEffect} from "react";
import {Form} from "react-bootstrap";
import TextArea from "antd/es/input/TextArea";
import {Col, Input} from "antd";

const EventsPanelInfo = (props) => {
    const [venue, setVenue] = useState()
    const [textArea, setTextArea] = useState()

    const { TextArea } = Input;

    const onVenueChange = e => {
        console.log('Venue:', e.target.value);
        setVenue(e.target.value)
    };

    const onTextChange = e => {
        console.log('Description:', e.target.value);
        setTextArea(e.target.value)
    };

    //passes new data to parent through props
    useEffect(() => {
        props.onTextChange(textArea)
    },[textArea])
    
    useEffect(() => {
        props.onVenueChange(venue)
    },[venue])

    return(
        <>
            <Form>
                    <Input.Group size="medium">
                            <Col span={6}>
                                <Input allowClear={true} placeholder="Sted" onChange={onVenueChange} name="venue"/>
                            </Col>
                        <br/>
                            <Col span={10}>
                                <TextArea allowClear={true} placeholder="Beskrivelse" showCount maxLength={500} onChange={onTextChange}/>
                            </Col>
                    </Input.Group>
            </Form>
        </>
    );
};
export default EventsPanelInfo;