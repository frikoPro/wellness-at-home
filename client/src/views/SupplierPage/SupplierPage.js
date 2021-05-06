import React, { useContext, useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Col, Container, Row, Button } from 'react-bootstrap';
import { JacuzziContext } from '../../contexts/JacuzziContext';
import ScrollDiv from '../../components/scrolldiv/ScrollDiv';
import {Helmet} from "react-helmet";

const SupplierPage = () => {
	let { id } = useParams();
	const [currentJacuzzi, setCurrentJacuzzi] = useState(0);
	const { jacuzzis } = useContext(JacuzziContext);
	const [mappedJacuzzis, setMappedJacuzzis] = useState([]);

	const getLogo = () => {
		if (id === 'Nordpool') {
			return '/nordpoolLogo_noBackground.png';
		} else if (id === 'Svenska Bad') {
			return '/svenskaBadLogoNoBackground.png';
		} else if (id === 'Svenska Pro') {
			return '/SvenskaProLogo.png';
		}
	};

	const getText = () => {
		if (id === 'Nordpool') {
			return "Spabad fra NordPool gir den perfekte badeopplevelsen for avslapping med familie og barn. Spabadene er nå også klargjort for saltvannsrensing og styring med WIFI app!";
		} else if (id === 'Svenska Bad') {
			return "Svenska Bad er blitt utviklet for å klare det skandinaviske klimaets ekstreme utfordringer. Vi benytter det beste av materialer, mest effektive isoleringen og den mest moderne teknologien for å holde et balansert badevann, som er enkelt å bruke.";
		} else if (id === 'Svenska Pro') {
			return "Svenska Pro har tatt spabad til et nytt nivå. Et nivå fullt av muligheter som betyr at du kan designe ditt personlige spabad og lage ditt eget unike bademiljø.";
		}
	}

	useEffect(() => {
		const tempArr = jacuzzis.filter((jacuzzi) => jacuzzi.brand === id);
		const mapped = tempArr.map((obj) => ({
			textHead: obj.name,
			about: obj.aboutProduct,
			image: obj.images[0].image,
			link: obj._id,
		}));
		setMappedJacuzzis(mapped);
	}, [jacuzzis, id]);

	return (
		<Container
			className="shadow"
			style={{ backgroundColor: 'white', marginTop: '5%' }}>
			<Helmet>
				<title>{`Leverandør - ${id}`}</title>
			</Helmet>
			<Row
				className="justify-content-center p-5"
				style={{ backgroundColor: '#F2F3F7' }}>
				<Col sm={6}>
					<img src={getLogo()} alt="" className="w-100"/>
				</Col>
				
			</Row>
			<Row className="justify-content-center text-center m-4">
				<Col>
					<h5>
						{getText()}
					</h5>
				</Col>
			</Row>
			<Row className="justify-content-center mb-1 text-center">
				<Col>
					<h2>{id}s spabad</h2>
				</Col>
			</Row>
			<section>
				<Row className="shadow border border-dark m-2">
					<Col className="m-3">
						<Row className="justify-content-center">
							<Col sm={7}>
								<img
									className="w-100"
									src={
										mappedJacuzzis[currentJacuzzi] &&
										`/${mappedJacuzzis[currentJacuzzi].image}`
									}
									alt="">
								</img>
							</Col>
						</Row>
						<Row className="justify-content-center text-center">
							<Col>
								<h1>
									{mappedJacuzzis[currentJacuzzi] &&
										mappedJacuzzis[currentJacuzzi].textHead}
								</h1>
							</Col>
						</Row>
						<Row className="justify-content-center text-center">
							<Col sm={10}>
								<p>
									{mappedJacuzzis[currentJacuzzi] &&
										mappedJacuzzis[currentJacuzzi].about}
								</p>
							</Col>
						</Row>
						<Row>
							<Col sm={12} className="justify-content-center text-center">
								<Button
									as={Link}
									to={
										mappedJacuzzis[currentJacuzzi] &&
										`/spabad/${mappedJacuzzis[currentJacuzzi].link}`
									}
									className="shadow btn-warning">
									Les mer
								</Button>
							</Col>
						</Row>
					</Col>
				</Row>
				<Row>
					<Col>
						<ScrollDiv
							content={mappedJacuzzis}
							returnFunction={(index) => setCurrentJacuzzi(index)}
							size={3}
						/>
					</Col>
				</Row>
			</section>
		</Container>
	);
};
export default SupplierPage;
