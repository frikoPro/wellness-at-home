import React, {useState} from 'react';
import Gmaps from "../../components/Gmaps";
import CalendarLink from "../../components/ CalendarLink";
import {Breadcrumb, Tab, Tabs} from "react-bootstrap";
import styles from "./EventPage.module.css";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import './calendar.css'

const EventPage = (props) => {
    const [value, onChange] = useState(new Date());

    return (
        <>
            <div >
                <Breadcrumb>
                    <Breadcrumb.Item href="/">Hjem</Breadcrumb.Item>
                    <Breadcrumb.Item href="/Arrangementer">Arrangementer</Breadcrumb.Item>
                    <Breadcrumb.Item href="">{props.location}</Breadcrumb.Item>
                </Breadcrumb>
            </div>
                <img src={"https://via.placeholder.com/1200x500"}
                     class="d-flex justify-content-center" className={`${styles.bannerImg}`}/>
            <div className={`${styles.mainContainer}`}>
                     <div className={`${styles.title}`}>
                         <h1>Wellness at home - {props.location}</h1>
                     </div>
                <div className={`${styles.tabsContainer}`}>
                    <Tabs defaultActiveKey="map" id="tab" className={`${styles.tab}`}>
                        <Tab eventKey="main" title="Main info" className={`${styles.tabs}`} >
                            <div className={`${styles.mainView}`}>
                                <div>
                                    <h4>Test</h4>
                                </div>
                                <div>
                                    <h4>Test</h4>
                                </div>
                            </div>
                            
                            <div className={`${styles.mainSideView}`}>
                                <Calendar
                                    onChange={onChange}
                                    showWeekNumbers
                                    value={value}
                                />
                                <br/>
                                <CalendarLink {...props.calendar}/>
                            </div>
                        </Tab>
                        <Tab eventKey="map" title="Kart og transport" className={`${styles.tabs}`} >
                            <Gmaps {...props.pos}/>
                        </Tab>
                    </Tabs>
                </div>
            </div>
        </>
    );
};

export default EventPage;