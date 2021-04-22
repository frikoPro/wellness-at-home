import { useContext, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import AddJacuzzi from '../../components/webpanel/jacuzzi/AddJacuzzi';
import AddProduct from '../../components/webpanel/product/AddProduct';
import { Link, Route, Switch } from 'react-router-dom';
import UpdateJacuzzi from '../../components/webpanel/jacuzzi/UpdateJacuzzi';
import UpdateProducts from '../../components/webpanel/product/UpdateProducts';
import AddSlideshow from '../../components/webpanel/slideshow/AddSlideshow';
import UpdateSlideshow from '../../components/webpanel/slideshow/UpdateSlideshow';
import FAQList from '../../components/FAQ/FAQList';
import { FAQContext } from '../../contexts/FAQContext';
import EventsPanel from '../../components/webpanel/events/EventsPanel';
import Invites from '../../components/webpanel/reviewInvites/Invites';
import axios from 'axios';
import Orders from '../../components/webpanel/orders/Orders';

const Webpanel = ({ match }) => {
	const FAQs = useContext(FAQContext);

	const [isOpen, setOpen] = useState({
		spabad: false,
		products: false,
		slideshow: false,
	});

	const logOut = () => {
		axios
			.get('http://localhost:8080/users/login')
			.then((res) => console.log(res.data))
			.catch((err) => console.log(err));

		window.location.reload();
	};

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
								<Link to={`${match.url}/addJacuzzis`}>
									<li>legg til spabad</li>
								</Link>
								<Link to={`${match.url}/updateJacuzzi`}>
									<li>Oppdater spabad</li>
								</Link>
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
								<Link to={`${match.url}/addProducts`}>
									<li>Legg til produkter</li>
								</Link>
								<Link to={`${match.url}/updateProducts`}>
									<li>Oppdatere produkter</li>
								</Link>
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
								<Link to={`${match.url}/addSlideshow`}>
									<li>legg til slideshow</li>
								</Link>
								<Link to={`${match.url}/updateSlideshow`}>
									<li>oppdater slideshow</li>
								</Link>
							</ul>
						</li>
						<Link to={`${match.url}/FAQ`}>
							<li>FAQ</li>
						</Link>
						<Link to={`${match.url}/arrangementer`}>
							<li>arrangementer</li>
						</Link>
						<Link to={`${match.url}/anmeldelser`}>
							<li>anmeldelser</li>
						</Link>
						<Link to={`${match.url}/ordrer`}>
							<li>ordrer</li>
						</Link>
					</ul>
					<Button variant="warning" onClick={() => logOut()}>
						Logg ut
					</Button>
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
						<Route path={`${match.url}/FAQ`}>
							<FAQList FAQs={FAQs} />
						</Route>
						<Route path={`${match.url}/arrangementer`}>
							<EventsPanel />
						</Route>
						<Route path={`${match.url}/anmeldelser`}>
							<Invites />
						</Route>
						<Route path={`${match.url}/ordrer`}>
							<Orders />
						</Route>
					</Switch>
				</Col>
			</Row>
		</Container>
	);
};

export default Webpanel;
