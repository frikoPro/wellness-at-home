import React, { useContext, useState } from 'react';
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
import {Helmet} from "react-helmet";
import PrivacyPanel from "../../components/webpanel/privacy/PrivacyPanel";
import {EventContext} from "../../contexts/EventContext";

const Webpanel = ({ match }) => {
	const FAQs = useContext(FAQContext);
	const {postData} = useContext(EventContext);
	const [isOpen, setOpen] = useState({
		spabad: false,
		products: false,
		slideshow: false,
	});

	const logOut = () => {
		axios
			.get('/users/login')
			.then((res) => console.log(res.data))
			.catch((err) => console.log(err));

		window.location.reload();
	};

	return (
		<Container fluid className="pl-0" style={{ textDecoration: 'none' }}>
			<Helmet>
				<title>Webpanel</title>
			</Helmet>
			<Row>
				<div
					className="bg-white shadow position-fixed p-2 m-2"
					style={{ width: '15%' }}>
					<ul>
						<li>
							<span
								style={{ cursor: 'pointer' }}
								onClick={() => setOpen({ ...isOpen, spabad: !isOpen.spabad })}>
								Spabad
							</span>
							<ul
								style={{
									height: isOpen.spabad ? '100%' : '1',
									display: isOpen.spabad ? 'block' : 'none',
								}}>
								<Link
									to={`${match.url}/addJacuzzis`}
									style={{ color: '#000000' }}>
									<li>Legg til spabad</li>
								</Link>
								<Link
									to={`${match.url}/updateJacuzzi`}
									style={{ color: '#000000' }}>
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
								Tilbehør
							</span>
							<ul
								style={{
									height: isOpen.products ? '100%' : '0',
									display: isOpen.products ? 'block' : 'none',
								}}>
								<Link
									to={`${match.url}/addProducts`}
									style={{ color: '#000000' }}>
									<li>Legg til tilbehør</li>
								</Link>
								<Link
									to={`${match.url}/updateProducts`}
									style={{ color: '#000000' }}>
									<li>Oppdatere tilbehør</li>
								</Link>
							</ul>
						</li>
						<li>
							<span
								onClick={() =>
									setOpen({ ...isOpen, slideshow: !isOpen.slideshow })
								}
								style={{ cursor: 'pointer' }}>
								Forsidebilder
							</span>
							<ul
								style={{
									height: isOpen.slideshow ? '100%' : 0,
									display: isOpen.slideshow ? 'block' : 'none',
								}}>
								<Link
									to={`${match.url}/addSlideshow`}
									style={{ color: '#000000' }}>
									<li>Legg til forsidebilder</li>
								</Link>
								<Link
									to={`${match.url}/updateSlideshow`}
									style={{ color: '#000000' }}>
									<li>Oppdater forsidebilder</li>
								</Link>
							</ul>
						</li>
						<Link to={`${match.url}/FAQ`} style={{ color: '#000000' }}>
							<li>FAQ</li>
						</Link>
						<Link
							to={`${match.url}/arrangementer`}
							style={{ color: '#000000' }}>
							<li>Arrangementer</li>
						</Link>
						<Link to={`${match.url}/anmeldelser`} style={{ color: '#000000' }}>
							<li>Anmeldelser</li>
						</Link>
						<Link to={`${match.url}/ordrer`} style={{ color: '#000000' }}>
							<li>Ordrer</li>
						</Link>
						<Link to={`${match.url}/privacypanel`} style={{ color: '#000000' }}>
							<li>Personvern</li>
						</Link>
					</ul>
					<Button className={`m-2`} variant="warning" onClick={() => logOut()}>
						Logg ut
					</Button>
				</div>
				<Col sm={{ offset: 2 }}>
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
							<EventsPanel submitData={postData}/>
						</Route>
						<Route path={`${match.url}/anmeldelser`}>
							<Invites />
						</Route>
						<Route path={`${match.url}/ordrer`}>
							<Orders />
						</Route>
						<Route path={`${match.url}/privacypanel`}>
							<PrivacyPanel />
						</Route>
					</Switch>
				</Col>
			</Row>
		</Container>
	);
};

export default Webpanel;
