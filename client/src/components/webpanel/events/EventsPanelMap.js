import React, {useEffect, useState} from 'react';
import {Col, Input, Row, Tooltip} from "antd";
import {Form} from "react-bootstrap";
import Gmap from "./Gmap";
import { InfoCircleOutlined } from '@ant-design/icons';

const EventsPanelMap = (props) => {
    const [streetName, setStreetName] = useState()
    const [city, setCity] = useState()
    const [postalCode, setPostalCode] = useState()
    const [address, setAddress] = useState([])
    const [pos, setPos] = useState([])

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

    // useEffect(() => {
    //     props.onPlacesChanged(address)
    // },[address]) todo: pass this up to EventsPanel 

    console.log(address)

    return (
        <>
            <Form.Group controlId="description">
                <Form.Label>Adresse</Form.Label>
                <Gmap
                    onPlacesChanged={(address) => setAddress(address)}
                />
                <br/>
                <br/>
                <Form.Label>Foreslått adresse</Form.Label>
                <Input.Group size="medium">
                    <Row gutter={8}>
                        <Col span={8}>
                            <Input placeholder="Gatenavn" allowClear={true} onChange={onStreetChange} value={address[0] + " " + address[1]}/>
                        </Col>
                        <Col span={3}>
                            <Input placeholder="Postkode" allowClear={true} onChange={onPostalCodeChange} maxLength={4} value={address[2]} suffix={
                                <Tooltip title="4-siffer">
                                    <InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
                                </Tooltip>}/>
                        </Col>
                        <Col span={4}>
                            <Input placeholder="By" allowClear={true} onChange={onCityChange} value={address[3]}/>
                        </Col>
                    </Row>
                </Input.Group>
            </Form.Group>
        </>
    )
};

export default EventsPanelMap;