import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import AddJacuzzi from '../../components/webpanel/jacuzzi/AddJacuzzi';
import AddProduct from '../../components/webpanel/product/AddProduct';
import { Route, Switch } from 'react-router-dom';
import UpdateJacuzzi from '../../components/webpanel/jacuzzi/UpdateJacuzzi';
import UpdateProducts from '../../components/webpanel/product/UpdateProducts';
import AddSlideshow from '../../components/webpanel/slideshow/AddSlideshow';
import UpdateSlideshow from '../../components/webpanel/slideshow/UpdateSlideshow';

const Webpanel = ({ match }) => {
	const [isOpen, setOpen] = useState({
		spabad: false,
		products: false,
		slideshow: false,
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
								<a href={`${match.url}/addJacuzzis`}>
									<li>legg til spabad</li>
								</a>
								<a href={`${match.url}/updateJacuzzi`}>
									<li>Oppdater spabad</li>
								</a>
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
								<a href={`${match.url}/addProducts`}>
									<li>Legg til produkter</li>
								</a>
								<a href={`${match.url}/updateProducts`}>
									<li>Oppdatere produkter</li>
								</a>
							</ul>
						</li>
						<li>
							<span
								onClick={() =>
									setOpen({ ...isOpen, slideshow: !isOpen.slideshow })
								}
								style={{ cursor: 'pointer' }}>
								slideshow
							</span>
							<ul
								style={{
									height: isOpen.slideshow ? '100%' : 0,
									display: isOpen.slideshow ? 'block' : 'none',
								}}>
								<a href={`${match.url}/addSlideshow`}>
									<li>legg til slideshow</li>
								</a>
								<a href={`${match.url}/updateSlideshow`}>
									<li>oppdater slideshow</li>
								</a>
							</ul>
						</li>
					</ul>
				</Col>
				<Col sm={10}>
					<Switch>
						<Route path={`${match.url}/addJacuzzis`}>
							<AddJacuzzi />
						</Route>
						<Route path={`${match.url}/updateJacuzzi`}>
							<UpdateJacuzzi />
						</Route>
						<Route path={`${match.url}/addProducts`}>
							<AddProduct />
						</Route>
						<Route path={`${match.url}/updateProducts`}>
							<UpdateProducts />
						</Route>
						<Route path={`${match.url}/addSlideshow`}>
							<AddSlideshow />
						</Route>
						<Route path={`${match.url}/updateSlideshow`}>
							<UpdateSlideshow />
						</Route>
					</Switch>
				</Col>
			</Row>
		</Container>
	);
};

export default Webpanel;
