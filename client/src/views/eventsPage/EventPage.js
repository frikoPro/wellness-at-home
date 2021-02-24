import React from 'react';
import Gmaps from "../../components/Gmaps";
import CalendarLink from "../../components/ CalendarLink";

const EventPage = (props) => {
    return (
        <>
            <h1>Hello world! - {props.location}</h1>
            <Gmaps {...props.pos}/>
            <CalendarLink {...props.calendar}/>
        </>
    );

};

export default EventPage;