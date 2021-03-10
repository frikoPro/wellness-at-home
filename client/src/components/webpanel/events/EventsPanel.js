import {Button, Card, Col, Form, Row} from "react-bootstrap";
import React from "react";
import EventsPanelDate from "./EventsPanelDate";
import EventsPanelMap from "./EventsPanelMap";
import EventsPanelImg from "./EventsPanelImg";
import EventsPanelCalendar from "./EventsPanelCalendar";

const EventsPanel = () => {

	return (
		<>
			<Card>
				<Card.Body>
					<Card.Title>Opprett arrangement</Card.Title>
						<Form>
							<hr/>
								<EventsPanelDate/>
							<hr/>
							<Form.Group>
								<Form.Label>Lokasjon</Form.Label>
								<Form.Text className="text-muted">Adresse</Form.Text>
								<Form.Control type="text" placeholder="Kort beskrivelse" />
								<br/>
								<EventsPanelMap/>
							</Form.Group>
							<hr/>
								<EventsPanelImg/>
							<hr/>
								<EventsPanelCalendar/>
						</Form>
				</Card.Body>
				<Card.Footer>
					<Row>
						<Col sm={2}>
							<Button>Lagre arrangement</Button>
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
