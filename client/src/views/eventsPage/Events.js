import React, {useContext} from 'react';
import styles from './Events.module.css';
import {useHistory, useRouteMatch, withRouter} from 'react-router-dom';
import EventPage from './EventPage';
import NotFoundPage from '../errorPage/NotFoundPage';
import {EventContext} from '../../contexts/EventContext';
import {Button, Col, Row} from "react-bootstrap";
import {Card} from "antd"
import {CalendarOutlined} from "@ant-design/icons";
import {LoggedInContext} from "../../contexts/LoggedInContext";

const Events = () => {
    let history = useHistory();
    const match = useRouteMatch('/Arrangementer/events=:id');
    const {data, deleteData, updateData} = useContext(EventContext);
    const loggedIn = useContext(LoggedInContext);

    const eventsData = {header: 'Kommende messer og arrangementer', data: data};

    const handleClick = (create_date) => {
        history.push(`/Arrangementer/events=${create_date}`);
    };
    //if no data in event show 404
    const getEventObj = (id) => {
        if (id && eventsData !== null && eventsData.data !== null) {
            // return false
            return eventsData.data.filter(
                (event) => event.createdAt.toString() === id
            )[0];
        } else {
            return false;
        }
    };
    // console.log(match)

    //checks if there is data
    if (match !== null) {
        const {params} = match;
        if (getEventObj(params.id)) {
            return <EventPage {...getEventObj(params.id)} />;
        } else if (eventsData.data === null) {
            return <p>loading...</p> //Add skeleton loading instead
        } else {
            return <NotFoundPage/>;
        }
    } else { //wait whilst eventData is empty to render
        if (eventsData.data === null) {
            return <p>loading...</p>
        }

        return (
            <>
                <div className={`${styles.header}`}>
                    <h1>{eventsData.header}</h1>
                </div>
                {eventsData.data.length === 0 ?
                    <p className={`justify-content-center`}>Ingen planlagte messer</p> :
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
                                                    onClick={() => deleteData(event.createdAt.toString())}>X</Button>
                                        </Col>
                                    </Row> : null}
                            </Row>
                        )
                    )}
            </>
        );
    }
};

export default withRouter(Events);
