import {Form} from "react-bootstrap";
import React from "react";


const EventsPanelImg = () => {

    return(
        <>
            <Form.Group>
                <Form.Label>Bilde</Form.Label>
                <Form.File id="exampleFormControlFile1" label="Last opp banner bilde" />
                <img src={"https://via.placeholder.com/1200x500"}
                />
            </Form.Group>
        </>
    );
};
export default EventsPanelImg;