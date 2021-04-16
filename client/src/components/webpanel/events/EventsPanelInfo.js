import React, {useState, useEffect} from "react";
import {Form} from "react-bootstrap";
import TextArea from "antd/es/input/TextArea";
import {Button, Input, Space} from "antd";
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import EventsPanelWeekday from "./EventsPanelWeekday";

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

    useEffect(() => {
        props.onTextChange(textArea)
    },[textArea])
    
    useEffect(() => {
        props.onVenueChange(venue)
    },[venue])

    return(
        <>
            <Form.Group controlId="description">
                <Form.Label>Generell informasjon</Form.Label>
                <br/>
                <Input allowClear={true} placeholder="Sted" onChange={onVenueChange} name="venue"/>
                <br/>
                <br/>
                <TextArea allowClear={true} placeholder="Beskrivelse" showCount maxLength={500} onChange={onTextChange}/>
            </Form.Group>
        </>
    );
};
export default EventsPanelInfo;