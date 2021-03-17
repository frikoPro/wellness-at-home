import React, {useState} from 'react';
import Gmaps from "../../components/Gmaps";
import CalendarLink from "../../components/ CalendarLink";
import {Breadcrumb, Tab, Tabs} from "react-bootstrap";
import styles from "./EventPage.module.css";
import CalendarView from "../../components/CalendarView";

const EventPage = (props) => {
    console.log(window.location.href)

    return (
        <>
            <div>
                <Breadcrumb>
                    <Breadcrumb.Item href="/">Hjem</Breadcrumb.Item>
                    <Breadcrumb.Item href="/Arrangementer">Arrangementer</Breadcrumb.Item>
                    <Breadcrumb.Item href="">{props.location}</Breadcrumb.Item>
                </Breadcrumb>
            </div>
            <img src={props.img}
                 class="d-flex justify-content-center" className={`${styles.bannerImg}`}/>
            <div className={`${styles.mainContainer}`}>
                <div className={`${styles.title}`}>
                    <h1>Wellness at home - {props.venue}</h1>
                </div>
                <div className={`${styles.tabsContainer}`}>
                    <Tabs defaultActiveKey="main" id="tab" className={`${styles.tab}`}>
                        <Tab eventKey="main" title="Main info" className={`${styles.tabs}`}>
                            <div className={`${styles.mainView}`}>
                                <div>
                                    <h5 style={{textDecoration: "underline"}}>Tider</h5>
                                    <p>
                                        {/*temp code!, this is horrible but ill fix it when I have time!*/}
                                        Fredag: {new Date(props.meta.weekdays.friday.start * 1000)
                                        .toLocaleTimeString("en-GB").slice(0, 5)
                                    }
                                        -
                                        {new Date(props.meta.weekdays.friday.end * 1000)
                                            .toLocaleTimeString("en-GB").slice(0, 5)
                                        }
                                        <br/>
                                        Lørdag: {new Date(props.meta.weekdays.saturday.start * 1000)
                                        .toLocaleTimeString("en-GB").slice(0, 5)
                                    }
                                        -
                                        {new Date(props.meta.weekdays.saturday.end * 1000)
                                            .toLocaleTimeString("en-GB").slice(0, 5)
                                        }
                                        <br/>
                                        Søndag: {new Date(props.meta.weekdays.sunday.start * 1000)
                                        .toLocaleTimeString("en-GB").slice(0, 5)
                                    }
                                        -
                                        {new Date(props.meta.weekdays.sunday.end * 1000)
                                            .toLocaleTimeString("en-GB").slice(0, 5)
                                        }
                                    </p>
                                </div>
                                <div>
                                    <hr/>
                                    <h5 style={{textDecoration: "underline"}}>Generell informasjon</h5>
                                    <p>
                                        {props.meta.desc}
                                    </p>
                                </div>
                            </div>

                            <div className={`${styles.mainSideView}`}>
                                <CalendarView {...props}/>
                                <br/>
                                <CalendarLink {...props.calendarLink}/>
                                <div className="fb-share-button"
                                     data-href={window.location.href}
                                     data-layout="button_count" data-size="small">
                                    <a target="_blank"
                                       href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&amp;src=sdkpreparse"
                                       className="fb-xfbml-parse-ignore">Share</a>
                                </div>
                            </div>
                        </Tab>
                        <Tab eventKey="map" title="Kart og transport" className={`${styles.tabs}`}>
                            <Gmaps {...props}/>
                        </Tab>
                    </Tabs>
                </div>
            </div>
        </>
    );
};

export default EventPage;