import React from 'react';
import Gmaps from "../../components/Gmaps";

const EventPage = (props) => {
    console.log(props)
    return (
        <>
            <h1>Hello world! - {props.location}</h1>
            <Gmaps {...props.pos}/>
        </>
    );

};

export default EventPage;

