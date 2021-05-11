import React, {useContext, useState} from 'react';
import styles from './Events.module.css';
import {useHistory, useRouteMatch, withRouter} from 'react-router-dom';
import EventPage from './EventPage';
import NotFoundPage from '../errorPage/NotFoundPage';
import {EventContext} from '../../contexts/EventContext';
import {Button, Col, Row} from "react-bootstrap";
import {Card, Empty, notification} from "antd"
import {CalendarOutlined, LoadingOutlined} from "@ant-design/icons";
import {LoggedInContext} from "../../contexts/LoggedInContext";
import {Helmet} from "react-helmet";

const Events = () => {
    let history = useHistory();
    const match = useRouteMatch('/Arrangementer/events=:id');
    const {data, deleteData} = useContext(EventContext);
    const loggedIn = useContext(LoggedInContext);
    const eventsData = {header: 'Kommende messer og arrangementer', data: data};

    const handleClick = (event) => {
        history.push(`/Arrangementer/events=${event}`);
    };

    const openNotification = () => {
        notification.success({
            message: 'Arrangement slettet',
            description:
                'Arrangmentet har blitt slettet! ',
            className: 'custom-class',
            placement: 'bottomLeft',
            style: {
                width: 350,
            },
        });
    };

    const getEventObj = (id) => {
        if (id && eventsData !== null && eventsData.data !== null) {
            return eventsData.data.find(
                (event) => event.createdAt.toString() === id
            );
        } else {
            return false;
        }
    };

    //if no data in event, show 404
    if (match !== null) {
        const {params} = match;
        if (getEventObj(params.id)) {
            return <EventPage {...getEventObj(params.id)} />;
        } else if (eventsData.data === null) {
            return (<div style={{textAlign: "center"}}>
                <LoadingOutlined style={{ color: '#08c' }}/>
            </div>)
        } else {
            return <NotFoundPage/>;
        }
    } else { //wait whilst eventData is empty to render
        if (eventsData.data === null) {
            return (<div style={{textAlign: "center"}}>
                <LoadingOutlined style={{ color: '#08c' }}/>
            </div>)
        }

        return (
            <div style={{overflow: `hidden`}}>
                <Helmet>
                    <title>Arrangementer</title>
                </Helmet>
                <div className={`${styles.header}`}>
                    <h1>{eventsData.header}</h1>
                </div>
                {eventsData.data.length === 0 ?
                    <Empty className={`mt-3`} description={<h4>Ingen planlagte messer</h4>}/> :
                    eventsData.data.map((event) => (
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
                                                        onClick={() => handleClick(event.createdAt)}>
                                                    Mer info
                                                </Button>
                                            </div>
                                        </Col>
                                    </Row>
                                </Card>
                                {loggedIn ?
                                    <Row className="align-items-center pl-2">
                                        <Col>
                                            <Button variant={"outline-danger"}
                                                    onClick={() => {
                                                        deleteData(event._id)
                                                        openNotification()
                                                    }}>X</Button>
                                        </Col>
                                    </Row> : null}
                            </Row>
                        )
                    )}
            </div>
        );
    }
};

export default withRouter(Events);
