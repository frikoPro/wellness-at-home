import axios from 'axios';
import { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import AddJacuzzi from '../../components/webpanel/AddJacuzzi';
import AddProduct from '../../components/webpanel/AddProduct';
import { Route, Switch } from 'react-router-dom';

const Webpanel = ({ match }) => {
	/* 
	useEffect(() => {
		axios
			.get('http://localhost:8080/products')
			.then((response) => console.log(response.data));
	}, []);
 */

	const [styleSpabad, setStyleSpabad] = useState({
		height: '0',
		display: 'none',
		clicked: false,
	});

	const [styleProducts, setStyleProducts] = useState({
		height: '0',
		display: 'none',
		clicked: false,
	});

	const openSpabad = () => {
		setStyleSpabad({
			height: styleSpabad.clicked ? '0' : '100%',
			display: styleSpabad.clicked ? 'none' : 'block',
			clicked: !styleSpabad.clicked,
		});
	};
	const openProducts = () => {
		setStyleProducts({
			height: styleProducts.clicked ? '0' : '100%',
			display: styleProducts.clicked ? 'none' : 'block',
			clicked: !styleProducts.clicked,
		});
	};

	return (
		<Container fluid className="pl-0">
			<Row>
				<Col sm={2} className="bg-white shadow">
					<ul>
						<li onClick={openSpabad}>
							<span style={{ cursor: 'pointer' }}>spabad</span>
							<ul style={styleSpabad}>
								<a href={`${match.url}/jacuzzis`}>
									<li>legg til spabad</li>
								</a>
								<li>Fjern spabad</li>
							</ul>
						</li>

						<li onClick={openProducts}>
							<span>produkter</span>
							<ul style={styleProducts}>
								<a href={`${match.url}/produkter`}>
									<li>Legg til produkter</li>
								</a>
							</ul>
						</li>
					</ul>
				</Col>
				<Col sm={10}>
					<Switch>
						<Route path={`${match.url}/jacuzzis`}>
							<AddJacuzzi />
						</Route>
						<Route path={`${match.url}/produkter`}>
							<AddProduct />
						</Route>
					</Switch>
				</Col>
			</Row>
		</Container>
	);
};

export default Webpanel;
