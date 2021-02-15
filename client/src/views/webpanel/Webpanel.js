import axios from 'axios';
import { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Jacuzzis from '../../components/webpanel/Jacuzzis';
import Accessories from '../../components/webpanel/Accessories';
import { Route, Switch } from 'react-router-dom';

const Webpanel = ({ match }) => {
	/* 
	useEffect(() => {
		axios
			.get('http://localhost:8080/products')
			.then((response) => console.log(response.data));
	}, []);
 */

	return (
		<Container fluid className="pl-0">
			<Row>
				<Col sm={2} className="bg-white shadow">
					<a href={`${match.url}/jacuzzis`}>
						<div>Legg til spabad</div>
					</a>
					<a href={`${match.url}/produkter`}>
						<div>Legg til produkter</div>
					</a>
				</Col>
				<Col sm={10}>
					<Switch>
						<Route path={`${match.url}/jacuzzis`}>
							<Jacuzzis />
						</Route>
						<Route path={`${match.url}/produkter`}>
							<Accessories />
						</Route>
					</Switch>
				</Col>
				{/* <Col sm={10}>
					<Jacuzzis />
				</Col>

				<Col sm={{ span: 10, offset: 2 }}>
					<Accessories />
				</Col> */}
			</Row>
		</Container>
	);
};

export default Webpanel;
