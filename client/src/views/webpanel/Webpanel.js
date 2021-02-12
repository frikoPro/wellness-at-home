import axios from 'axios';
import { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Jacuzzis from '../../components/webpanel/Jacuzzis';
import Accessories from '../../components/webpanel/Accessories';

const Webpanel = () => {
	/* 
	useEffect(() => {
		axios
			.get('http://localhost:8080/products')
			.then((response) => console.log(response.data));
	}, []);
 */

	return (
		<>
			<div
				sm={2}
				style={{
					backgroundColor: 'white',
					border: '2px solid black',
					position: 'fixed',
				}}>
				<div>legg til produkter</div>
				<div>legg til produkter</div>
				<div>legg til produkter</div>
				<div>legg til produkter</div>
				<div>legg til produkter</div>
				<div>legg til produkter</div>
				<div>legg til produkter</div>
			</div>
			<Container fluid style={{ minHeight: '88vh' }}>
				<Row>
					<Col sm={10}>
						<Jacuzzis />
					</Col>

					{/* 					<Col>
						<Accessories />
					</Col> */}
				</Row>
			</Container>
		</>
	);
};

export default Webpanel;
