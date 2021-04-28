import React, { useEffect } from 'react';
import {} from 'react-bootstrap';
import styles from './EventPage.module.css';
import { PageHeader, Tabs, Col, Row } from 'antd';
import { AimOutlined, UnorderedListOutlined } from '@ant-design/icons';
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
			<Col className={`${styles.mainContainer}`}>
				<img
					src={`http://localhost:8080/` + props.img}
					className={`${styles.bannerImg}`}
					alt={'img'}
				/>
				<Col>
					<Row>
						<div className={`${styles.title}`}>
							<h1>Wellness at home - {props.venue}</h1>
						</div>
					</Row>
					<Row>
						<Tabs defaultActiveKey="1">
							<TabPane
								tab={
									<span>
										<UnorderedListOutlined />
										Main
									</span>
								}
								key="1">
								<Row className={`${styles.tabs}`}>
									<Col span={18} flex="300px">
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
									<Col span={6} flex="auto">
										<Row>
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
										<AimOutlined />
										Kart og transport
									</span>
								}
								key="2">
								<Row>
									<Gmaps {...props} />
								</Row>
							</TabPane>
						</Tabs>
					</Row>
				</Col>
			</Col>
		</>
	);
};

export default EventPage;
