import {Button, Card, Col, Form, Row} from 'react-bootstrap';
import React, {useContext, useEffect, useState} from 'react';
import EventsPanelDate from './EventsPanelDate';
import EventsPanelAddress from './EventsPanelAddress';
import EventsPanelImg from './EventsPanelImg';
import EventsPanelInfo from './EventsPanelInfo';
import EventPage from '../../../views/eventsPage/EventPage';
import {EventContext} from '../../../contexts/EventContext';
import Gmap from './Gmap';
import EventsPanelWeekday from "./EventsPanelWeekday";

const EventsPanel = () => {
	const [preview, setPreview] = useState(false);
	const triggerPreview = () => {
		setPreview(!preview);
	};
	const [event2, setEvent] = useState({
		create_date: null,
		update_date: null,
		date: {
			date_start: null,
			date_end: null,
		},
		address: {
			streetname: '',
			city: '',
			postalnr: '',
		},
		venue: '',
		pos: {
			lat: null,
			lng: null,
		},
		meta: {
			weekdays: [
				// Think ill remove weekdays, and if needed just add them as text
				{day: 'Fredag', start: 1619164800, end: 1619175600},
				{day: 'Lørdag', start: 1619254800, end: 1619262000},
				{day: 'Søndag', start: 1619341200, end: 1619352000},
			],
			desc: '',
		},
		img: '',
	});

	const {postData, returnErrors, onSuccess, cleanUp} = useContext(
		EventContext
	);

	useEffect(() => {
		return () => cleanUp();
	}, []);

	return (
		<>
			<Card>
				<Card.Body>
					<Card.Title>Opprett arrangement</Card.Title>
					<Form>
						<hr/>
						<EventsPanelInfo
							onVenueChange={(venue) => {
								setEvent({...event2, venue});
							}}
							errors={returnErrors}
							onTextChange={(description) => {
								setEvent({
									// dump the contents of event2
									...event2,
									meta: {
										// dump the contents of event2.meta into meta
										...event2.meta,
										desc: description,
									},
								});
							}}
						/>
						<EventsPanelDate
							errors={returnErrors}
							onChange={(date) => {
								setEvent({
									...event2,
									date: {date_start: date[0], date_end: date[1]},
								});
							}}
						/>
						<hr/>
						<Gmap
							onPlacesChanged={(address) =>
								setEvent({
									...event2,
									address: {
										streetname: address[0] + ' ' + address[1],
										city: address[2],
										postalnr: address[3],
									},
									pos: {lat: address[4], lng: address[5]},
								})
							}
						/>
						<EventsPanelAddress
							errors={returnErrors}
							address={event2.address}
							pos={event2.pos}
							onStreetChange={(streetname) => {
								setEvent({
									...event2,
									address: {
										...event2.address,
										streetname: streetname,
									},
								});
							}}
							onCityChange={(city) => {
								setEvent({
									...event2,
									address: {
										...event2.address,
										city: city,
									},
								});
							}}
							onPostalCodeChange={(postalcode) => {
								setEvent({
									...event2,
									address: {
										...event2.address,
										postalcode: postalcode,
									},
								});
							}}
							onPosLatChange={(lat) => {
								setEvent({
									...event2,
									pos: {
										...event2.pos,
										lat: lat,
									},
								});
							}}
							onPoslatChange={(lng) => {
								setEvent({
									...event2,
									pos: {
										...event2.pos,
										lng: lng,
									},
								});
							}}
						/>
						<hr/>
						<EventsPanelImg
							onChange={(file) => setEvent({...event2, img: file})}
						/>
					</Form>
				</Card.Body>
				<Card.Footer>
					<Row>
						<Col sm={2}>
							<Button onClick={() => postData(event2)}>
								Lagre arrangement
							</Button>
							<br/>
							<br/>
							<Button onClick={() => {
								triggerPreview()
								console.log(event2)
							}}>Forhåndvisning</Button>
						</Col>
						<Col className="align-self-center text-success">{onSuccess}</Col>
					</Row>
				</Card.Footer>
			</Card>
			{preview ? (
				<Card>
					<EventPage {...event2} />
				</Card>
			) : (
				<></>
			)}
		</>
	);
};

export default EventsPanel;
