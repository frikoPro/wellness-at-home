import React, {useEffect} from 'react';
import Gmaps from "../../components/Gmaps";
import CalendarLink from "../../components/ CalendarLink";
import {Tab, Tabs} from "react-bootstrap";
import styles from "./EventPage.module.css";
import CalendarView from "../../components/CalendarView";
import {PageHeader} from "antd";

const EventPage = (props) => {
    console.log(window.location.href)

    useEffect(() => {
        window?.FB?.XFBML?.parse();
    }, [])

    return (
        <>
            <div>
                <PageHeader
                    className="site-page-header"
                    onBack={() => window.location.href = "/Arrangementer"}
                    title="Arrangementer"
                    subTitle={props.venue}
                />
            </div>
            <img src={props.img}
                 class="d-flex justify-content-center" className={`${styles.bannerImg}`}
                 alt={"img"}/>
            <div className={`${styles.mainContainer}`}>
                <div className={`${styles.title}`}>
                    <h1>Wellness at home - {props.venue}</h1>
                </div>
                <div className={`${styles.tabsContainer}`}>
                    <Tabs defaultActiveKey="main" id="tab" className={`${styles.tab}`}>
                        <Tab eventKey="main" title="Main info" className={`${styles.tabs}`}>
                            <div className={`${styles.mainView}`}>
                                <div>
                                    <h5 style={{textDecoration: "underline"}}>Generell informasjon</h5>
                                    <p>
                                        {props.meta.desc}
                                    </p>
                                </div>
                                <hr/>
                                <div>
                                    <h5 style={{textDecoration: "underline"}}>Åpningstider</h5>
                                    <p>
                                        {new Date(props.date_start * 1000)
                                            .toLocaleDateString("en-GB").slice(0, 5)}
                                        -
                                        {new Date(props.date.date_end * 1000)
                                            .toLocaleDateString("en-GB").slice(0, 5)}
                                        <br/>
                                        <br/>
                                        {/*todo: revert this code back to original or remove it completely*/}
                                        {props.meta.weekdays.map((day) => (
                                            <>
                                                {day.day}: {new Date(day.start * 1000)
                                                .toLocaleTimeString("en-GB").slice(0, 5)}
                                                -
                                                {new Date(day.end * 1000)
                                                    .toLocaleTimeString("en-GB").slice(0, 5)}
                                                <br/>
                                            </>
                                        ))}
                                    </p>
                                </div>
                                <hr/>
                                <div>
                                    <h5 style={{textDecoration: "underline"}}>Adresse</h5>
                                    <p>
                                        {`${props.address.streetname}, ${props.address.postalcode} ${props.address.city}`}
                                    </p>
                                </div>
                            </div>
                            <div className={`${styles.mainSideView}`}>
                                <CalendarView {...props}/>
                                <br/>
                                <CalendarLink {...props}/>
                                <div className="fb-share-button"
                                     data-href={window.location.href}
                                     data-layout="button"
                                     data-size="large"
                                     style={{top: 5}}
                                ><a target="_blank"
                                    href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&amp;src=sdkpreparse"
                                    className="fb-xfbml-parse-ignore">Del</a>
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