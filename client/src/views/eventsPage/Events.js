import React from 'react';
import {Card, CardColumns, CardDeck, ListGroup, Row, Table} from "react-bootstrap";


const Events = () => {
let time;
//todo: legg til bilder i arrayet
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
            <div style={{paddingTop: 40, backgroundColor: "lightcoral"}}
                 className="col-lg-5 col-md-5 col-sm-5 container justify-content-center">
                <CardColumns>
            {eventsData.map((event, index) => (
                <Card>
                    <Card.Img variant="top" src="https://via.placeholder.com/200x100" />
                    <Card.Body>
                        <Card.Title>{event.Location}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{event.City}</Card.Subtitle>
                        <Card.Subtitle className="mb-2">{event.Address}</Card.Subtitle>
                        <Card.Link href="#">Kart</Card.Link>
                        <Card.Link href="#">Legg til i kalender</Card.Link>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Dato: {time = new Date(event.date).toLocaleDateString("en-US")}</small>
                    </Card.Footer>
                </Card>
                )
            )}
            </CardColumns>
            </div>
        </>
    );
};
export default Events;
