import React, {useEffect, useState} from 'react';
import {Col, Form, Input, Row} from 'antd';
import {Form as FormBoot} from 'react-bootstrap';
import {InfoCircleOutlined} from '@ant-design/icons';

const EventsPanelAddress = (props) => {
	const [streetName, setStreetName] = useState();
	const [city, setCity] = useState();
	const [postalCode, setPostalCode] = useState();
	const [posLat, setPosLat] = useState();
	const [posLng, setPosLng] = useState();

	const onStreetChange = (e) => {
		console.log('onStreetChange:', e.target.value);
		setStreetName(e.target.value);
	};
	const onCityChange = (e) => {
		console.log('onCityChange:', e.target.value);
		setCity(e.target.value);
	};
	const onPostalCodeChange = (e) => {
		console.log('onPostalCodeChange:', e.target.value);
		setPostalCode(e.target.value);
	};
	const onPosLatChange = (e) => {
		console.log('onPosLatChange:', e.target.value);
		setPosLat(e.target.value);
	};
	const onPosLngChange = (e) => {
		console.log('onPosLngChange:', e.target.value);
		setPosLng(e.target.value);
	};
	//has to be its on useEffects
	useEffect(() => {
		props.onStreetChange(streetName);
	}, [streetName]);

	useEffect(() => {
		props.onCityChange(city);
	}, [city]);

	useEffect(() => {
		props.onPostalCodeChange(postalCode);
	}, [postalCode]);

	useEffect(() => {
		props.onPosLatChange(posLat);
	}, [posLat]);

	useEffect(() => {
		props.onPosLngChange(posLng);
	}, [posLng]);

	return (
		<>
			<Form>
				<br/>
				<Form.Item
					label="Adresse:"
					tooltip={{
						title: 'Foreslått adresse, kan være feil.',
						icon: <InfoCircleOutlined/>,
					}}>
					<Input.Group size="medium">
						<Row gutter={8}>
							<Col span={8}>
								<Input
									placeholder="Gatenavn"
									allowClear={true}
									onChange={onStreetChange}
									value={props.address.streetname}
								/>
								<FormBoot.Text className="text-danger">
									{props.errors('address.streetname')}
								</FormBoot.Text>
							</Col>
							<Col span={3}>
								<Input
									placeholder="Postkode"
									allowClear={true}
									onChange={onPostalCodeChange}
									value={props.address.postalnr}
								/>
								<FormBoot.Text className="text-danger">
									{props.errors('address.postalnr')}
								</FormBoot.Text>
							</Col>
							<Col span={4}>
								<Input
									placeholder="By"
									allowClear={true}
									onChange={onCityChange}
									value={props.address.city}
								/>
								<FormBoot.Text className="text-danger">
									{props.errors('address.city')}
								</FormBoot.Text>
							</Col>
						</Row>
					</Input.Group>
				</Form.Item>
				<Form.Item
					label="Posisjon:"
					tooltip={{
						title: 'Foreslått posisjon. NB: Ikke endre hvis du ikke vet hva du gjør!',
						icon: <InfoCircleOutlined/>,
					}}>
					<Input.Group size="medium">
						<Row gutter={8}>
							<Col span={4}>
								<Input
									placeholder="Lat"
									value={props.lat}
									allowClear={true}
									onChange={onPosLatChange}
								/>
							</Col>
							<Col span={4}>
								<Input
									placeholder="Lng"
									value={props.pos.lng}
									allowClear={true}
									onChange={onPosLngChange}
								/>
							</Col>
						</Row>
					</Input.Group>
				</Form.Item>
			</Form>
		</>
	);
};

export default EventsPanelAddress;
