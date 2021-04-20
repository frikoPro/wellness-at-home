import {Button, Card, Col, Form, Row} from "react-bootstrap";
import React, {useState} from "react";
import EventsPanelDate from "./EventsPanelDate";
import EventsPanelAddress from "./EventsPanelAddress";
import EventsPanelImg from "./EventsPanelImg";
import EventsPanelInfo from "./EventsPanelInfo";
import UseForm from "../UseForm";
import EventPage from "../../../views/eventsPage/EventPage";
import Gmap from "./Gmap";

const EventsPanel = () => {
	const [preview, setPreview] = useState(false)
	const triggerPreview = () => {setPreview( !preview )}
	const [event2, setEvent] = useState({
			create_date: 1676639434,
			update_date: 1676639434,
			date: {
				date_start: 1619164800,
				date_end: 1619352000
			},
			address: {
				streetname: "Knoffs gate 18",
				city: "Drammen",
				postalnr: "3044"
			},
			venue: "Drammenshallen123123123",
			pos: {
				lat: 59.73521,
				lng: 10.20528
			},
			meta: {
				weekdays: [ // Think ill remove weekdays, and if needed just add them as text
					{day: "Fredag",start: 1619164800, end: 1619175600},
					{day: "Lørdag",start: 1619254800, end: 1619262000},
					{day: "Søndag",start: 1619341200, end: 1619352000},
				],
				desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum\n"
			},
			img: "https://dhk.no/wp-content/uploads/sites/7/2019/07/Drammenshallen.jpg",
		},
	)
	const { values, handleChange, handleEvent, handleImages, submitData } = UseForm(
		{initialValues: {event2}, url: "http://localhost:8080/events"})
	return (
		<>
			<Card>
				<Card.Body>
					<Card.Title>Opprett arrangement</Card.Title>
						<Form>
							<hr/>
								<EventsPanelInfo
									onVenueChange={(venue) => {setEvent({...event2, venue})}}
									onTextChange={(description) => {setEvent({
									// dump the contents of event2
										...event2,
										meta: {
											// dump the contents of event2.meta into meta
											...event2.meta,
											desc: description
										}
									})
									}}
								/>
							<EventsPanelDate
								onChange={(date) => {
									setEvent({...event2, date: {date_start: date[0], date_end: date[1]}})
								}}
							/>
							<hr/>
								<Gmap
									onPlacesChanged={(address) => setEvent({
									...event2, address:{streetname:address[0]+" "+address[1],city:address[2],postalnr:address[3]},
									           pos:{lat:address[4],lng:address[5]} })}
								/>
								<EventsPanelAddress
									address={event2.address}
									onStreetChange={(streetname) => {setEvent({
										...event2, address: {
											...event2.address, streetname: streetname}
										})
									}}
									onCityChange={(city) => {setEvent({
										...event2, address: {
											...event2.address, city: city}
										})
									}}
									onPostalCodeChange={(postalcode) => {setEvent({
										...event2, address: {
											...event2.address, postalcode: postalcode}
										})
									}}
								/>
							<hr/>
								<EventsPanelImg
								handleImage={handleImages}
								/>
						</Form>
				</Card.Body>
				<Card.Footer>
					<Row>
						<Col sm={2}>
							<Button onClick={()=>console.log(event2)}>Lagre arrangement</Button>
							<br/>
							<br/>
							<Button onClick={()=> triggerPreview()}>Forhåndvisning</Button>
						</Col>
						<Col className="align-self-center">
						</Col>
					</Row>
				</Card.Footer>
			</Card>
			{preview ? <Card>
				<EventPage
					{... event2}
				/>
			</Card> : <></>}
		</>
	)
};

export default EventsPanel;
