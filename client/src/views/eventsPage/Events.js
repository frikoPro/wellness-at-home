import React, {useState} from 'react';
import {Card} from "react-bootstrap";
import styles from './Events.module.css'
import locPointer from './pin.svg'
import calendar from './calendar.svg'
import {useHistory, useRouteMatch, withRouter} from "react-router-dom";
import EventPage from "./EventPage";
import NotFoundPage from "../errorPage/NotFoundPage";

const Events = () => {
    let time;
/*todo:
   1) fetch eventsData from db, via Axios.
   2) assign eventsData to state
   3) before rendering events page, pass id jhkgbv
   to events page via mapping through the data and returning that objects info
*
* */
    // OBS calendar must be set as variable event
    const eventsData = [
        {
            create_date: 1676639434,
            update_date: 1676639434,
            date: 1618054898,
            city: "Drammen",
            address: "DrammenVegen 22",
            location: "Drammenshallen",
            pos: {
                lat: -34.397,
                lng: 150.644
            },
            img: "https://via.placeholder.com/200x100",
            calendar: {
                title: "My birthday party",
                description: "Be there!",
                start: "2019-12-29 18:00:00 +0100",
                end: "2019-11-29 18:00:00 +0100",
                allDay: true
            }

        },
        {
            create_date: 1992258634,
            update_date: 1992258634,
            date: 1620646898,
            city: "Oslo/Fornebu",
            address: "OsloVegen 21",
            location: "Telenor Arena",
            pos: {
                lat: -34.397,
                lng: 150.644
            },
            img: "https://via.placeholder.com/200x100",
            calendar: {
                title: "My birthday party",
                description: "Be there!",
                start: "2019-12-29 18:00:00 +0100",
                end: "2019-11-29 18:00:00 +0100",
                allDay: true
            }

        },
        {
            create_date: 1992258634,
            update_date: 1992258634,
            date: 1652182898,
            city: "Kristiansand",
            address: "OsloVegen 21",
            location: "Telenor Arena",
            pos: {
                lat: -34.397,
                lng: 150.644
            },
            img: "https://via.placeholder.com/200x100",
            calendar: {
                title: "My birthday party",
                description: "Be there!",
                start: "2019-12-29 18:00:00 +0100",
                end: "2019-11-29 18:00:00 +0100",
                allDay: true
            }

        },
        {
            create_date: 856185034,
            update_date: 856185034,
            date: 1778413298,
            city: "Trondheim",
            address: "TrondheimVegen 108",
            location: "Trondheim fotball Arena",
            pos: {
                lat: -34.397,
                lng: 150.644
            },
            img: "https://via.placeholder.com/200x100",
            calendar: {
                title: "My birthday party",
                description: "Be there!",
                start: "2019-12-29 18:00:00 +0100",
                end: "2019-11-29 18:00:00 +0100",
                allDay: true
            }
        }
    ]

    const [id, setId] = useState();

    let history = useHistory();

    const handleClick = (create_date) => {
        history.push(`/Arrangementer/${create_date}`);
    }

    const idExists = (id) => {
        // true or false if id exists in events data
        return true;
    }

    const getEventObj = (id) => {
        return eventsData.filter(event => event.create_date.toString() === id)[0]
    }

    const match = useRouteMatch('/Arrangementer/:id');
    // console.log(match)

    if (match !== null) {
        const { params } = match;
        if(idExists(params.id)) {
            return <EventPage {...getEventObj(params.id)}/>
        } else {
            return <NotFoundPage/>
        }

    } else {
        return (
            <>
                <div style={{backgroundColor: "grey"}}
                     className="col-lg-5 col-md-5 col-sm-5 container justify-content-center">
                    {eventsData.map((event) => (
                            <>
                                <Card className={`${styles.cardContainer}`}>
                                    <datecontainer className={`${styles.dateContainer}`}>
                                        <h4>Dato:</h4>
                                        {time = new Date(event.date).toLocaleDateString("en-US")}
                                    </datecontainer>
                                    <bodycontainer className={`${styles.bodyContainer}`}>
                                        <h1 style={{fontSize: 25}}>
                                            {event.location}
                                        </h1>
                                        <h2 style={{fontSize: 18}}>
                                            {event.city} - {event.address}
                                        </h2>
                                        <linkcontainer className={`${styles.linkContainer}`}>
                                            <button className={`${styles.btn}`}>
                                                <img src={locPointer}/>
                                            </button>
                                            <button className={`${styles.btn}`}>
                                                <img style={{height: 16}} src={calendar}/>
                                            </button>
                                            <button type="button" onClick={ () => handleClick(event.create_date)}>
                                                {event.create_date}
                                            </button>
                                        </linkcontainer>
                                    </bodycontainer>
                                </Card>
                            </>
                        )
                    )}
                </div>
            </>
        );
    }
};


export default withRouter(Events);
