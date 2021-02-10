import React from 'react';
import {Card, ListGroup, Row} from "react-bootstrap";


const Events = () => {
let time;
const eventsData = [
        {
            date: 1618054898,
            City: "Drammen",
            Address: "DrammenVegen 22",
            Location: "Drammenshallen"

        },
        {
            date: 1620646898,
            City: "Oslo/Fornebu",
            Address: "OsloVegen 21",
            Location: "Telenor Arena"

        },
        {
            date: 	1652182898,
            City: "Kristiansand",
            Address: "OsloVegen 21",
            Location: "Telenor Arena"

        },
        {
            date: 1778413298,
            City: "Trondheim",
            Address: "TrondheimVegen 108",
            Location: "Trondheim fotball Arena"

        },
    ]
// border="primary" style={{marginTop: 40}}
    return (
        <>
            <div style={{paddingTop: 40, backgroundColor: "navajowhite"}}
                 className="col-lg-5 col-md-5 col-sm-5 container justify-content-center">
            {eventsData.map((event, index) => (
                <>
                    <ListGroup  horizontal={'xl'}>
                        <ListGroup.Item>{time = new Date(event.date).toLocaleDateString("en-US")}</ListGroup.Item>
                        <ListGroup.Item>{event.City}</ListGroup.Item>
                        <ListGroup.Item>{event.Location}</ListGroup.Item>
                        <ListGroup.Item>{event.Address}</ListGroup.Item>
                    </ListGroup>
                    <br />
                </>
                )
            )}
            </div>
        </>
    );
};
export default Events;
