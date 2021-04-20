import React, {useEffect, useState} from 'react';
import {Col, Input, Row, Form} from "antd";
import {InfoCircleOutlined} from "@ant-design/icons";

const EventsPanelAddress = (props) => {
    const [streetName, setStreetName] = useState()
    const [city, setCity] = useState()
    const [postalCode, setPostalCode] = useState()

    const onStreetChange = e => {
        console.log('onStreetChange:', e.target.value);
        setStreetName(e.target.value)
    };
    const onCityChange = e => {
        console.log('onCityChange:', e.target.value);
        setCity(e.target.value)
    };
    const onPostalCodeChange = e => {
        console.log('onPostalCodeChange:', e.target.value);
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
            <Form>
                <br/>
                <Form.Item label="Adresse:" tooltip={{ title: 'Foreslått adresse, kan være feil.', icon: <InfoCircleOutlined /> }}>
                    <Input.Group size="medium">
                        <Row gutter={8}>
                            <Col span={8}>
                                <Input placeholder="Gatenavn" allowClear={true} onChange={onStreetChange} value={props.address.streetname}/>
                            </Col>
                            <Col span={3}>
                                <Input placeholder="Postkode" allowClear={true} onChange={onPostalCodeChange} value={props.address.postalnr}/>
                            </Col>
                            <Col span={4}>
                                <Input placeholder="By" allowClear={true} onChange={onCityChange} value={props.address.city}/>
                            </Col>
                        </Row>
                    </Input.Group>
                </Form.Item>
            </Form>
        </>
    )
};

export default EventsPanelAddress;