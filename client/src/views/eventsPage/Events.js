import React from 'react';
import {Button, Card} from "react-bootstrap";
import styles from './Events.module.css'
import {useHistory, useRouteMatch, withRouter} from "react-router-dom";
import EventPage from "./EventPage";
import NotFoundPage from "../errorPage/NotFoundPage";
import LocationPin from "./LocationPin";
import {renderToStaticMarkup} from "react-dom/server";

const pin = encodeURIComponent(renderToStaticMarkup(<LocationPin/>))

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
            date_start: 1615200485,
            date_end: 1615546085,
            city: "Drammen",
            address: "DrammenVegen 22",
            venue: "Drammenshallen",
            pos: {
                lat: 59.952769,
                lng: 10.945199
            },
            meta: {
                dates: {
                    monday: 0,
                    tuesday: 0,
                    wednesday: 0,
                    thursday: 0,
                    friday: 1619164800,
                    saturday: 	1619254800,
                    sunday: 1619341200
                },
                desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum\n"
            },
            img: "https://via.placeholder.com/1200x500",
            calendarLink: {
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
            date_start: 1620646898,
            date_end: 1618054898,
            city: "Oslo/Fornebu",
            address: "OsloVegen 21",
            venue: "Telenor Arena",
            pos: {
                lat: -34.397,
                lng: 150.644
            },
            meta: {
                dates: {
                    monday: 0,
                    tuesday: 0,
                    wednesday: 0,
                    thursday: 0,
                    friday: 1619164800,
                    saturday: 	1619254800,
                    sunday: 1619341200
                },
                desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum\n"
            },
            img: "https://via.placeholder.com/1200x500",
            calendarLink: {
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
            date_start: 1634466666,
            date_end: 1634725866,
            city: "Kristiansand",
            address: "OsloVegen 21",
            venue: "Telenor Arena",
            pos: {
                lat: -34.397,
                lng: 150.644
            },
            meta: {
                dates: {
                    monday: 0,
                    tuesday: 0,
                    wednesday: 0,
                    thursday: 0,
                    friday: 1619164800,
                    saturday: 	1619254800,
                    sunday: 1619341200
                },
                desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum\n"
            },
            img: "https://via.placeholder.com/1200x500",
            calendarLink: {
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
            date_start: 1778413298,
            date_end: 1618054898,
            city: "Trondheim",
            address: "TrondheimVegen 108",
            venue: "Trondheim fotball Arena",
            pos: {
                lat: -34.397,
                lng: 150.644
            },
            meta: {
                dates: {
                    monday: 0,
                    tuesday: 0,
                    wednesday: 0,
                    thursday: 0,
                    friday: 1619164800,
                    saturday: 	1619254800,
                    sunday: 1619341200
                },
                desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum\n"
            },
            img: "https://via.placeholder.com/1200x500",
            calendarLink: {
                title: "My birthday party4444",
                description: "Be there!",
                start: "2019-12-29 18:00:00 +0100",
                end: "2019-11-29 18:00:00 +0100",
                allDay: true
            }
        }
    ]
    let history = useHistory();

    const handleClick = (create_date) => {
        history.push(`/Arrangementer/eventkode=${create_date}`);
    }
    //if no data in event show 404
    const getEventObj = (id) => {
        if(id){
            // return false
            return eventsData.filter(event => event.create_date.toString() === id)[0]
        }else{
            return false
        }
    }

    const match = useRouteMatch('/Arrangementer/eventkode=:id');
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
                <div className={`col-lg-5 col-md-5 col-sm-5 container ${styles.cardContainer}`}>

                    {eventsData.map((event) => (
                            <>
                                <Card className={`${styles.card}`}>
                                    <div className={`${styles.dateContainer}`}>
                                        <div className={`${styles.month}`}>
                                            {new Date(event.date_start*1000)
                                                .toLocaleDateString('default', { month: 'short' })
                                                .toLocaleUpperCase()
                                            }
                                        </div>
                                        <div className={`${styles.date}`}>
                                            {new Date(event.date_start*1000)
                                                .toLocaleDateString("en-GB").slice(0,2)
                                            }
                                        </div>
                                    </div>
                                    <div className={`${styles.bodyContainer}`}>
                                        <div className={`${styles.title}`}>
                                            <img src={`data:image/svg+xml,${pin}`} height={25}/>
                                            {event.city}
                                        </div>
                                        <div className={`${styles.meta}`}>
                                            {event.venue}
                                        </div>
                                    </div>
                                    <div className={`${styles.linkContainer}`}>
                                        <Button variant="outline-dark"
                                                type="button"
                                                onClick={() => handleClick(event.create_date)}>
                                            Mer info
                                        </Button>
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
