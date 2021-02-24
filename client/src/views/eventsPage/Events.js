import React, {useState} from 'react';
import {Card} from "react-bootstrap";
import styles from './Events.module.css'
import {useHistory, useRouteMatch, withRouter} from "react-router-dom";
import EventPage from "./EventPage";
import NotFoundPage from "../errorPage/NotFoundPage";

const Events = () => {
    let time;
/*todo:
   1) fetch eventsData from db, via Axios.
   2) assign eventsData to state
   3) CHECK  before rendering events page, pass id
   to events page via mapping through the data and returning that objects info
* */
    // OBS calendar must be set as variable event
    const eventsData = [
        {
            create_date: 1676639434,
            update_date: 1676639434,
            date: 1618054898,
            date_end: 1618054898,
            city: "Drammen",
            address: "DrammenVegen 22",
            location: "Drammenshallen",
            pos: {
                lat: 59.952769,
                lng: 10.945199
            },
            img: "https://via.placeholder.com/200x100",
            calendar: {
                title: "My birthday party111",
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
            date_end: 1618054898,
            city: "Oslo/Fornebu",
            address: "OsloVegen 21",
            location: "Telenor Arena",
            pos: {
                lat: -34.397,
                lng: 150.644
            },
            img: "https://via.placeholder.com/200x100",
            calendar: {
                title: "My birthday party222",
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
            date_end: 1618054898,
            city: "Kristiansand",
            address: "OsloVegen 21",
            location: "Telenor Arena",
            pos: {
                lat: -34.397,
                lng: 150.644
            },
            img: "https://via.placeholder.com/200x100",
            calendar: {
                title: "My birthday party333",
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
            date_end: 1618054898,
            city: "Trondheim",
            address: "TrondheimVegen 108",
            location: "Trondheim fotball Arena",
            pos: {
                lat: -34.397,
                lng: 150.644
            },
            img: "https://via.placeholder.com/200x100",
            calendar: {
                title: "My birthday party4444",
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
    //if no data in event show 404
    const getEventObj = (id) => {
        if(id){
            return eventsData.filter(event => event.create_date.toString() === id)[0]
        }else{
            return false
        }
    }

    const match = useRouteMatch('/Arrangementer/:id');
    // console.log(match)

    if (match !== null) {
        const { params } = match;
        if(getEventObj(params.id)) {
            return <EventPage {...getEventObj(params.id)}/>
        } else {
            return <NotFoundPage/>
        }

    } else {
        return (
            <>
                <div className={`${styles.header}`}>
                    <h1>Kommende messer og arrangementer hvor vi har stand</h1>
                </div>
                <div style={{backgroundColor: "#000000"}}
                     className={`col-lg-5 col-md-5 col-sm-5 container ${styles.cardContainer}`}>

                    {eventsData.map((event) => (
                            <>
                                <Card className={`${styles.card}`}>
                                    <div className={`${styles.dateContainer}`}>
                                        {time = new Date(event.date).toLocaleDateString("en-US")}
                                        <br/> - <br/>
                                        {time = new Date(event.date_end).toLocaleDateString("en-US")}
                                    </div>
                                    <div className={`${styles.bodyContainer}`}>
                                        <h1 style={{fontSize: 25}}>
                                            {event.city} - {event.location}
                                        </h1>
                                        <h2 style={{fontSize: 18}}>
                                            {event.address}
                                        </h2>
                                    </div>
                                    <div className={`${styles.linkContainer}`}>
                                        <button class=" btn-warning btn btn-primary hover-gold" type="button" onClick={ () => handleClick(event.create_date)}>
                                            Mer info
                                        </button>
                                    </div>
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
