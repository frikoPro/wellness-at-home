import React, {useState} from 'react';
import Gmaps from "../../components/Gmaps";
import CalendarLink from "../../components/ CalendarLink";
import {Link} from "react-router-dom";
import {Breadcrumb, Tab, Tabs} from "react-bootstrap";
import styles from "./EventPage.module.css";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';

const EventPage = (props) => {
    const [value, onChange] = useState(new Date());

    return (
        <>
            <div >
                <Breadcrumb>
                    <Breadcrumb.Item href="/">Hjem</Breadcrumb.Item>
                    <Breadcrumb.Item href="/Arrangementer">Arrangementer</Breadcrumb.Item>
                </Breadcrumb>
            </div>
            <div>
                <h1>Wellness at home - {props.location}</h1>
                <img src={"https://cdn.discordapp.com/attachments/811250538443833374/811252239552479232/AURUA_head_sbiwebb-1024x587.jpg"}
                     class="d-flex justify-content-center"/>
                <div className={`${styles.tabsContainer}`}>
                    <Tabs defaultActiveKey="main" id="tab" >
                        <Tab eventKey="main" title="Main info" className={`${styles.tabs}`} >
                            <h1>Hello world! - {props.location}</h1>
                        </Tab>
                        <Tab eventKey="map" title="Kart og transport" className={`${styles.tabs}`} >
                            <Gmaps {...props.pos}/>
                        </Tab>
                        <Tab eventKey="calendar" title="Kalender" className={`${styles.tabs}`} >
                                        <Calendar
                                            onChange={onChange}
                                            showWeekNumbers
                                            value={value}
                                        />
                            <CalendarLink {...props.calendar}/>
                        </Tab>
                    </Tabs>
                </div>
            </div>
        </>
    );
};

export default EventPage;