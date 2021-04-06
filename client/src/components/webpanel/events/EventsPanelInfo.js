import React from "react";
import {Form} from "react-bootstrap";
import TextArea from "antd/es/input/TextArea";
import {AutoComplete, Input} from "antd";

const EventsPanelInfo = () => {

    const { TextArea } = Input;
    const onChange = e => {
        console.log('Change:', e.target.value);
    };
    const options = [
        { value: 'Drammenshallen' },
        { value: 'Telenor Arena' },
        { value: 'Sparebanken Møre Arena' },
        { value: 'Sotra Arena' },
    ];

    const Complete = () => (
        <AutoComplete
            style={{
                width: 200,
            }}
            options={options}
            placeholder="try to type `b`"
            filterOption={(inputValue, option) =>
                option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
            }
        />
    );

    return(
        <>
            <Form.Group controlId="description">
                <Form.Label>Venue</Form.Label>
                <br/>
                <Complete />
                <br/>
                <Form.Label>Description</Form.Label>
                <TextArea showCount maxLength={500} onChange={onChange} />
            </Form.Group>
        </>
    );
};
export default EventsPanelInfo;