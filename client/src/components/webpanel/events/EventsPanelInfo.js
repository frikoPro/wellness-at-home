import React, {useState, useEffect} from "react";
import {Form} from "react-bootstrap";
import TextArea from "antd/es/input/TextArea";
import {Input} from "antd";

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
                <Form.Label>Venue</Form.Label>
                <br/>
                <Input allowClear={true} placeholder="Venue" onChange={props.handleChange} name="venue"/>
                <br/>
                <Form.Label>Description</Form.Label>
                <TextArea allowClear={true} placeholder="Description" showCount maxLength={500} onChange={onTextChange}/>
            </Form.Group>
        </>
    );
};
export default EventsPanelInfo;