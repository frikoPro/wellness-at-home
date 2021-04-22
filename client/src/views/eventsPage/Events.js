import React from 'react';
import styles from './Events.module.css'
import {useHistory, useRouteMatch, withRouter} from "react-router-dom";
import EventPage from "./EventPage";
import NotFoundPage from "../errorPage/NotFoundPage";
import {Button, Col, Row} from "react-bootstrap";
import {Card} from "antd"
import {CalendarOutlined} from "@ant-design/icons";

const Events = () => {
    //mock data for developing, this will be dynamic in prod build
    const eventsData = {
        header: "Kommende messer og arrangementer",
        data: [
            {
                create_date: 1676639434,
                update_date: 1676639434,
                date: {
                    date_start: 1619164800,
                    date_end: 1619352000
                },
                address: {
                    streetname: "Knoffs gate 18",
                    city: "Drammen",
                    postalcode: "3044"
                },
                venue: "Drammenshallen",
                pos: {
                    lat: 59.73521,
                    lng: 10.20528
                },
                meta: {
                    weekdays: [
                        {day: "Fredag", start: 1619164800, end: 1619175600},
                        {day: "Lørdag", start: 1619254800, end: 1619262000},
                        {day: "Søndag", start: 1619341200, end: 1619352000},
                    ],
                    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum\n"
                },
                img: "https://dhk.no/wp-content/uploads/sites/7/2019/07/Drammenshallen.jpg",
            },

            {
                create_date: 1992258634,
                update_date: 1992258634,
                date: {
                    date_start: 1620646898,
                    date_end: 1618054898
                },
                address: {
                    streetname: "Widerøeveien 1",
                    city: "Fornebu",
                    postalcode: "1360"
                },
                venue: "Telenor Arena",
                pos: {
                    lat: 59.9031487,
                    lng: 10.623884
                },
                meta: {
                    weekdays: [
                        {day: "Fredag", start: 1619164800, end: 1619175600},
                        {day: "Lørdag", start: 1619254800, end: 1619262000},
                    ],
                    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum\n"
                },
                img: "https://upload.wikimedia.org/wikipedia/commons/5/55/Telenor_Arena_Fornebu_%286.juni_2018_cropped%29.jpg",
            },

            {
                create_date: 1992358634,
                update_date: 1992258634,
                date: {
                    date_start: 1621576800,
                    date_end: 1621774800
                },
                address: {
                    streetname: "Sjømannsvegen 16",
                    city: "Ålesund",
                    postalcode: "6008"
                },
                venue: "Sparebanken Møre Arena",
                pos: {
                    lat: 62.4700596,
                    lng: 6.1815532
                },
                meta: {
                    weekdays: [
                        {day: "Fredag", start: 1621576800, end: 1621602000},
                        {day: "Lørdag", start: 1621663200, end: 1621688400},
                        {day: "Søndag", start: 1621760400, end: 1621774800}
                    ],
                    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum\n"
                },
                img: "https://www.kystmagasinet.no/wp-content/uploads/sites/8/2019/10/Untitled-1-3.jpg",
            },

            {
                create_date: 856185034,
                update_date: 856185034,
                date: {
                    date_start: 1621231200,
                    date_end: 1621764000
                },
                address: {
                    streetname: "Idrettsvegen 50",
                    city: "Straume",
                    postalcode: "5353"
                },
                venue: "Sotra Arena",
                pos: {
                    lat: 60.350731,
                    lng: 5.1325811
                },
                meta: {
                    weekdays: [
                        {day: "Mandag", start: 1621231200, end: 1621256400},
                        {day: "Tirsdag", start: 1621317600, end: 1621342800},
                        {day: "Onsdag", start: 1621404000, end: 1621429200},
                        {day: "Torsdag", start: 1621490400, end: 1621515600},
                        {day: "Fredag", start: 1621576800, end: 1621594800},
                        {day: "Lørdag", start: 1621663200, end: 1621681200},
                        {day: "Søndag", start: 1621756800, end: 1621764000},
                    ],
                    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum\n"
                },
                img: "https://via.placeholder.com/1200x500",
            }
        ]
    }
    let history = useHistory();
    const handleClick = (create_date) => {
        history.push(`/Arrangementer/eventkode=${create_date}`);
    }
    //if no data in event show 404
    const getEventObj = (id) => {
        if (id) {
            // return false
            return eventsData.data.filter(event => event.create_date.toString() === id)[0]
        } else {
            return false
        }
    }

    // Check if event exists
    const match = useRouteMatch('/Arrangementer/eventkode=:id');
    if (match !== null) {
        const {params} = match;
        if (getEventObj(params.id)) {
            return <EventPage {...getEventObj(params.id)}/>
        } else {
            return <NotFoundPage/>
        }
    } else {
        return (
            <>
                <div className={`${styles.header}`}>
                    <h1>{eventsData.header}</h1>
                </div>
                    {eventsData.data.map((event) => (
                        <Row className="justify-content-center">
                            <Card className={`${styles.card}`}>
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
                                            <CalendarOutlined style={{position: "relative", top: -4}}/>
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
