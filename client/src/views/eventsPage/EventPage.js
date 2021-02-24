import React from 'react';
import Gmaps from "../../components/Gmaps";
import CalendarLink from "../../components/ CalendarLink";
import {Link} from "react-router-dom";

const EventPage = (props) => {
    return (
        <>
            <div>
                <p>
                    <Link to="/Arrangementer">Tilbake</Link>
                </p>
            </div>
            <h1>Hello world! - {props.location}</h1>
            <Gmaps {...props.pos}/>
            <CalendarLink {...props.calendar}/>
        </>
    );

};

export default EventPage;