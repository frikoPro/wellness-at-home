import React from 'react';
import {useParams} from "react-router-dom";

const EventPage = (props) => {
    console.log(props)
    return (
        <>
            <h1>Hello world!</h1>
            <p>{props.city}</p>
        </>
    );
};

export default EventPage;

  