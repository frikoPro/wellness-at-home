import React from 'react';
import {Card, CardColumns, CardDeck, ListGroup, Row, Table} from "react-bootstrap";
import {renderToStaticMarkup} from "react-dom/server";


const Events = () => {
let time;
//todo: legg til bilder i arrayet
const eventsData = [
        {
            date: 1618054898,
            City: "Drammen",
            Address: "DrammenVegen 22",
            Location: "Drammenshallen",
            Pos: 0,
            Calendar: "",
            Img: "https://via.placeholder.com/200x100"

        },
        {
            date: 1620646898,
            City: "Oslo/Fornebu",
            Address: "OsloVegen 21",
            Location: "Telenor Arena",
            Pos: 0,
            Calendar: "",
            Img: "https://via.placeholder.com/200x100"

        },
        {
            date: 	1652182898,
            City: "Kristiansand",
            Address: "OsloVegen 21",
            Location: "Telenor Arena",
            Pos: 0,
            Calendar: "",
            Img: "https://via.placeholder.com/200x100"

        },
        {
            date: 1778413298,
            City: "Trondheim",
            Address: "TrondheimVegen 108",
            Location: "Trondheim fotball Arena",
            Pos: 0,
            Calendar: "",
            Img: "https://via.placeholder.com/200x100"

        },
    ]
// border="primary" style={{marginTop: 40}}
    return (
        <>
            <div style={{backgroundColor: "grey"}}
                 className="col-lg-5 col-md-5 col-sm-5 container justify-content-center">
                <CardColumns style={{padding: 40}}>
            {eventsData.map((event, index) => (
                <Card>
                    <Card.Img variant="top" src={event.Img} />
                    <Card.Body>
                        <Card.Title>{event.Location}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{event.City}</Card.Subtitle>
                        <Card.Subtitle className="mb-2">{event.Address}</Card.Subtitle>
                        <Card.Link href="#">Kart</Card.Link>
                        <Card.Link href="#">Legg til i kalender</Card.Link>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Dato: {time = new Date(event.date).toLocaleDateString('en-GB')}</small>
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
