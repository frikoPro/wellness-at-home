import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import styles from './EventPage.module.css';
import { PageHeader, Tabs } from 'antd';
import { AimOutlined, UnorderedListOutlined } from '@ant-design/icons';
import Gmaps from '../../components/events/Gmaps';
import CalendarView from '../../components/events/CalendarView';
import CalendarLink from '../../components/events/CalendarLink';
import { Link } from 'react-router-dom';

const { TabPane } = Tabs;

const EventPage = (props) => {
	console.log(window.location.href);

	useEffect(() => {
		window?.FB?.XFBML?.parse();
	}, []);

	return (
		<Container className={`bg-white shadow`}>
			<Row>
				<Col>
					<Link to={'/Arrangementer'}>
						<PageHeader
							className="site-page-header"
							onBack={() => console.log(`test`)}
							title="Arrangementer"
							subTitle={props.venue}
						/>
					</Link>
				</Col>
			</Row>
			<Row className={`justify-content-center`}>
				<Col sm={11}>
					<img
						src={`http://localhost:8080/` + props.img}
						className={`w-100 ${styles.bannerImg}`}
						alt={'img'}
					/>
				</Col>
			</Row>
			<Row className={`mt-5`}>
				<Col>
					<div className={`text-left`}>
						<h1>Wellness at home - {props.venue}</h1>
					</div>
				</Col>
			</Row>
			<Row>
				<Col>
					<Tabs defaultActiveKey="1">
						<TabPane
							tab={
								<span>
									<UnorderedListOutlined />
									Main
								</span>
							}
							key="1">
							<Row className={`justify-content-between mb-3 ${styles.tabs}`}>
								<Col xs={12} sm={6} className={`text-left`}>
									<Row>
										<Col>
											<h5 style={{ textDecoration: 'underline' }}>
												Generell informasjon
											</h5>
											<p>{props.meta.desc}</p>
										</Col>
									</Row>
									<Row>
										<Col>
											<h5 style={{ textDecoration: 'underline' }}>
												Åpningstider
											</h5>
											<p>
												{new Date(props.date.date_start * 1000)
													.toLocaleDateString('en-GB')
													.slice(0, 5)}
												-
												{new Date(props.date.date_end * 1000)
													.toLocaleDateString('en-GB')
													.slice(0, 5)}
												<br />
												<br />
												{props.meta.weekdays.map((day) => (
													<>
														{day.day}:{' '}
														{new Date(day.start * 1000)
															.toLocaleTimeString('en-GB')
															.slice(0, 5)}
														-
														{new Date(day.end * 1000)
															.toLocaleTimeString('en-GB')
															.slice(0, 5)}
														<br />
													</>
												))}
											</p>
										</Col>
									</Row>
									<Row>
										<Col>
											<h5 style={{ textDecoration: 'underline' }}>Adresse</h5>
											<p>
												{`${props.address.streetname}, ${props.address.postalnr} ${props.address.city}`}
											</p>
										</Col>
									</Row>
								</Col>
								<Col className={`text-right`}>
									<CalendarView {...props} />
									<br />
									<CalendarLink {...props} />
									<div
										className="fb-share-button"
										data-href={window.location.href}
										data-layout="button"
										data-size="large"
										style={{ top: 5 }}>
										<a
											target="_blank"
											href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&amp;src=sdkpreparse"
											className="fb-xfbml-parse-ignore">
											Del
										</a>
									</div>
								</Col>
							</Row>
						</TabPane>
						<TabPane
							tab={
								<span>
									<AimOutlined />
									Kart og transport
								</span>
							}
							key="2">
							<Row className={`mb-3`}>
								<Col>
									<Gmaps {...props} />
								</Col>
							</Row>
						</TabPane>
					</Tabs>
				</Col>
			</Row>
		</Container>
	);
};

export default EventPage;
