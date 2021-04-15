import React, {useEffect, useState} from 'react';
import {Col, Input, Row} from "antd";
import {Form} from "react-bootstrap";
import Gmap from "./Gmap";

const EventsPanelMap = (props) => {
    // Going to add Google maps here to get lon and lat, also a autocomplete
    //Fredrik: Skal gjøre om denne siden litt, skal implimentere lat og lon fra google maps så kanskje vent litt med denne.
    const [streetName, setStreetName] = useState()
    const [city, setCity] = useState()
    const [postalCode, setPostalCode] = useState()

    const onStreetChange = e => {
        console.log('Description:', e.target.value);
        setStreetName(e.target.value)
    };
    const onCityChange = e => {
        console.log('Description:', e.target.value);
        setCity(e.target.value)
    };
    const onPostalCodeChange = e => {
        console.log('Description:', e.target.value);
        setPostalCode(e.target.value)
    };
    //has to be its on useEffects
    useEffect(() => {
        props.onStreetChange(streetName)
    },[streetName])

    useEffect(() => {
        props.onCityChange(city)
    },[city])

    useEffect(() => {
        props.onPostalCodeChange(postalCode)
    },[postalCode])

    return (
        <>
            <Form.Group controlId="description">
                <Form.Label>Adresse</Form.Label>
                <Input.Group size="medium">
                    <Row gutter={8}>
                        <Col span={8}>
                            <Input placeholder="Gatenavn" allowClear={true} onChange={onStreetChange}/>
                        </Col>
                        <Col span={5}>
                            <Input placeholder="By" allowClear={true} onChange={onCityChange}/>
                        </Col>
                        <Col span={3}>
                            <Input placeholder="Postkode" allowClear={true} onChange={onPostalCodeChange}/>
                        </Col>
                    </Row>
                </Input.Group>
                <br/>
                <br/>
                <Gmap/>
            </Form.Group>
        </>
    )
};

export default EventsPanelMap;