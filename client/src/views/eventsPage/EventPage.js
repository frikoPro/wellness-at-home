import React, { useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import styles from './EventPage.module.css';
import { Button, PageHeader, Tabs } from 'antd';
import { AndroidOutlined, AppleOutlined } from '@ant-design/icons';
import Gmaps from '../../components/events/Gmaps';
import CalendarView from '../../components/events/CalendarView';
import CalendarLink from '../../components/events/CalendarLink';

const { TabPane } = Tabs;

const EventPage = (props) => {
	console.log(window.location.href);

	useEffect(() => {
		window?.FB?.XFBML?.parse();
	}, []);

	return (
		<>
			<div>
				<PageHeader
					className="site-page-header"
					onBack={() => (window.location.href = '/Arrangementer')}
					title="Arrangementer"
					subTitle={props.venue}
				/>
			</div>
			<Row className="justify-content-center">
				<img
					src={`/${props.img}`}
					className="d-flex justify-content-center"
					className={`${styles.bannerImg}`}
					alt={'img'}
				/>
				<Row>
					<Col>
						<Row>
							<div className={`${styles.title}`}>
								<h1>Wellness at home - {props.venue}</h1>
							</div>
						</Row>
						<Tabs defaultActiveKey="1">
							<TabPane
								tab={
									<span>
										<AppleOutlined />
										Main
									</span>
								}
								key="1">
								<Row className={`${styles.tabs}`}>
									<Col xs={8} sm={6}>
										<Row>
											<div>
												<h5 style={{ textDecoration: 'underline' }}>
													Generell informasjon
												</h5>
												<p>{props.meta.desc}</p>
											</div>
										</Row>
										<Row>
											<div>
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
											</div>
										</Row>
										<Row>
											<div>
												<h5 style={{ textDecoration: 'underline' }}>Adresse</h5>
												<p>
													{`${props.address.streetname}, ${props.address.postalnr} ${props.address.city}`}
												</p>
											</div>
										</Row>
									</Col>
									<Col xs={4} sm={6}>
										<Row xs={12} sm={12}>
											<div className={`${styles.mainSideView}`}>
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
											</div>
										</Row>
									</Col>
								</Row>
							</TabPane>
							<TabPane
								tab={
									<span>
										<AndroidOutlined />
										Kart og transport
									</span>
								}
								key="2">
								<Gmaps {...props} />
							</TabPane>
						</Tabs>
					</Col>
				</Row>
			</Row>
		</>
	);
};

export default EventPage;
