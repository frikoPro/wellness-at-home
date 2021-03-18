import {Button, Card, Col, Form, Row} from "react-bootstrap";
import React, {useState} from "react";
import EventsPanelDate from "./EventsPanelDate";
import EventsPanelMap from "./EventsPanelMap";
import EventsPanelImg from "./EventsPanelImg";
import EventsPanelCalendar from "./EventsPanelCalendar";

const EventsPanel = () => {
	const [event, setEvent] = useState({
		date: {
			start: 1615200485,
			end: 1615546085,
		},
		city: "Drammen",
		address: "Drammenvegen 22",
		location: "Drammenshallen",
		pos: {
			lat: 59.952769,
			lng: 10.945199
		},
		img: "https://via.placeholder.com/200x100",
		calendarLink: {
			title: "My birthday party111",
			description: "Be there!",
			start: "2019-12-29 18:00:00 +0100",
			end: "2019-11-29 18:00:00 +0100",
			allDay: true
		}

	})

	return (
		<>
			<Card>
				<Card.Body>
					<Card.Title>Opprett arrangement</Card.Title>
						<Form>
							<hr/>
								<EventsPanelDate
									start={event.date.start}
									end={event.date.end}
									onChange={(date) => {setEvent({date:date})}}
								/>
							<hr/>
								<EventsPanelMap/>
							<hr/>
								<EventsPanelImg/>
							<hr/>
								<EventsPanelCalendar
									{...event.calendarLink}
									// start={event.calendarLink.start}
								/>
						</Form>
				</Card.Body>
				<Card.Footer>
					<Row>
						<Col sm={2}>
							<Button onClick={()=>console.log(`submit btn: ${event}`)}>Lagre arrangement</Button>
							<Button>Forhåndvisning</Button>

						</Col>
						<Col className="align-self-center">
						</Col>
					</Row>
				</Card.Footer>
			</Card>
			<Card>
				<iframe style={{height: 900}} src={"www.google.com"}/>
			</Card>
		</>
	)
};

export default EventsPanel;
