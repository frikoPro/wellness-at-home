import React from 'react';
import {Button, Card, CardColumns, CardDeck, ListGroup, Nav, Row, Table} from "react-bootstrap";
import {renderToStaticMarkup} from "react-dom/server";


const Events = () => {
let time;
//todo: legg til bilder i arrayet
    // OBS calendar must be set as variable event
const eventsData = [
        {
            create_date: 1618054898,
            update_date: 1618054898,
            date: 1618054898,
            City: "Drammen",
            Address: "DrammenVegen 22",
            Location: "Drammenshallen",
            Pos: 0,
            Img: "https://via.placeholder.com/200x100",
            Calendar: {
                title: "My birthday party",
                description: "Be there!",
                start: "2019-12-29 18:00:00 +0100",
                allDay: true
            }

        },
        {
            create_date: 1618054898,
            update_date: 1618054898,
            date: 1620646898,
            City: "Oslo/Fornebu",
            Address: "OsloVegen 21",
            Location: "Telenor Arena",
            Pos: 0,
            Img: "https://via.placeholder.com/200x100",
            Calendar: {
                title: "My birthday party",
                description: "Be there!",
                start: "2019-12-29 18:00:00 +0100",
                allDay: true
            }

        },
        {
            create_date: 1618054898,
            update_date: 1618054898,
            date: 	1652182898,
            City: "Kristiansand",
            Address: "OsloVegen 21",
            Location: "Telenor Arena",
            Pos: 0,
            Img: "https://via.placeholder.com/200x100",
            Calendar: {
                title: "My birthday party",
                description: "Be there!",
                start: "2019-12-29 18:00:00 +0100",
                allDay: true
            }

        },
        {
            create_date: 1618054898,
            update_date: 1618054898,
            date: 1778413298,
            City: "Trondheim",
            Address: "TrondheimVegen 108",
            Location: "Trondheim fotball Arena",
            Pos: 0,
            Img: "https://via.placeholder.com/200x100",
            Calendar: {
                title: "My birthday party",
                description: "Be there!",
                start: "2019-12-29 18:00:00 +0100",
                allDay: true
            }
        }
    ]


// border="primary" style={{marginTop: 40}}
    return (
        <>
            <div style={{backgroundColor: "grey"}}
                 className="col-lg-5 col-md-5 col-sm-5 container justify-content-center">
            {eventsData.map((event, index) => (
                <Card style={{margin: 40, marginTop: 40}}>
                    <ListGroup>
                        <ListGroup.Item>This ListGroup</ListGroup.Item>
                        <ListGroup.Item>renders horizontally</ListGroup.Item>
                        <ListGroup.Item>on </ListGroup.Item>
                        <ListGroup.Item>and above!</ListGroup.Item>
                    </ListGroup>
                </Card>
                )
            )}
            </div>
        </>
    );
};
export default Events;
