import axios from 'axios';
import { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import AddJacuzzi from '../../components/webpanel/AddJacuzzi';
import AddProduct from '../../components/webpanel/AddProduct';
import { Route, Switch } from 'react-router-dom';

const Webpanel = ({ match }) => {
	const [isOpen, setOpen] = useState({
		spabad: false,
		products: false,
	});

	return (
		<Container fluid className="pl-0">
			<Row>
				<Col sm={2} className="bg-white shadow">
					<ul>
						<li>
							<span
								style={{ cursor: 'pointer' }}
								onClick={() => setOpen({ ...isOpen, spabad: !isOpen.spabad })}>
								spabad
							</span>
							<ul
								style={{
									height: isOpen.spabad ? '100%' : '1',
									display: isOpen.spabad ? 'block' : 'none',
								}}>
								<a href={`${match.url}/jacuzzis`}>
									<li>legg til spabad</li>
								</a>
								<li>Fjern spabad</li>
							</ul>
						</li>

						<li>
							<span
								onClick={() =>
									setOpen({ ...isOpen, products: !isOpen.products })
								}
								style={{ cursor: 'pointer' }}>
								produkter
							</span>
							<ul
								style={{
									height: isOpen.products ? '100%' : '0',
									display: isOpen.products ? 'block' : 'none',
								}}>
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
