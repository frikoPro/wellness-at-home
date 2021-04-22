import React, { useContext } from 'react';
import styles from './Events.module.css';
import { useHistory, useRouteMatch, withRouter } from 'react-router-dom';
import EventPage from './EventPage';
import NotFoundPage from '../errorPage/NotFoundPage';
import { EventContext } from '../../contexts/EventContext';
import {Button, Col, Row} from "react-bootstrap";
import {Card} from "antd"
import {CalendarOutlined} from "@ant-design/icons";

const Events = () => {

	const { data, deleteData, updateData } = useContext(EventContext);

	const eventsData = { header: 'Kommende messer og arrangementer', data: data };

	let history = useHistory();

	const handleClick = (create_date) => {
		history.push(`/Arrangementer/eventkode=${create_date}`);
	};
	//if no data in event show 404
	const getEventObj = (id) => {
		if (id) {
			// return false
			return eventsData.data.filter(
				(event) => event.create_date.toString() === id
			)[0];
		} else {
			return false;
		}
	};
	const match = useRouteMatch('/Arrangementer/eventkode=:id');
	// console.log(match)
	if (match !== null) {
		const { params } = match;
		if (getEventObj(params.id)) {
			return <EventPage {...getEventObj(params.id)} />;
		} else {
			return <NotFoundPage />;
		}
	} else {
		return (
			<>
				<div className={`${styles.header}`}>
					<h1>{eventsData.header}</h1>
				</div>
				{eventsData.data.map((event) => (
						<Row className="justify-content-center">
							<Card className={`${styles.card}`} >
								<Row>
									<Col xs={2} sm={3} className={`align-self-center ${styles.dateContainer}`}>
										<div className={`text-center ${styles.month}`}>
											{new Date(event.date.date_start * 1000)
												.toLocaleDateString('default', {month: 'short'})
												.toLocaleUpperCase()}
										</div>
										<div className={`text-center ${styles.date}`}>
											{new Date(event.date.date_start * 1000)
												.toLocaleDateString("en-GB").slice(0, 2)}
										</div>
									</Col>
									<Col xs={10} sm={7} className={`${styles.bodyContainer}`}>
										<div className={`${styles.title}`}>
											{event.address.city}
										</div>
										<div className={`${styles.dates}`}>
											<CalendarOutlined style={{position: "relative", top:-4}}/>
											{new Date(event.date.date_start * 1000)
												.toLocaleDateString("en-GB").slice(0, 5)}
											-
											{new Date(event.date.date_end * 1000)
												.toLocaleDateString("en-GB").slice(0, 5)}
										</div>
										<div className={`${styles.meta}`}>
											{event.venue}
										</div>
									</Col>
									<Col xs={12} sm={2} className={`align-self-end ${styles.linkContainer}`}>
										<div className={`text-right`}>
											<Button variant="outline-dark"
													type="button"
													className={`${styles.infoBtn}`}
													onClick={() => handleClick(event.create_date)}>
												Mer info
											</Button>
										</div>
									</Col>
								</Row>
							</Card>
						</Row>
					)
				)}
			</>
		);
	}
};

export default withRouter(Events);
