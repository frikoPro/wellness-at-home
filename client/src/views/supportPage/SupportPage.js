import { Col, Container, Row } from 'react-bootstrap';
import FAQList from '../../components/FAQ/FAQList';
import ContactCard from '../../components/ContactCard';
import SupportForm from '../../components/SupportForm';
import styles from './SupportPage.module.css';
import { Helmet } from 'react-helmet';
import React from 'react';

const SupportPage = () => {
	return (
		<Container
			className="shadow"
			style={{ backgroundColor: 'white', marginTop: '5%' }}>
			<Helmet>
				<title>Kundeservice</title>
			</Helmet>
			<Row className="justify-content-center p-5">
				<Col className={'text-center'}>
					<h1>Ofte stilte spørsmål</h1>
				</Col>
			</Row>
			<Row
				className="justify-content-center mx-auto ml-5"
				style={{ width: '70%' }}>
				<FAQList />
			</Row>
			<Row className="mt-5">
				<Col className={'text-center'}>
					<h2>Finner du ikke svar?</h2>
				</Col>
			</Row>
			<Row>
				<Col className={'text-center'}>
					<p>Fyll ut skjemaet under så hjelper vi deg</p>
					<span>
						Felter merket med <span style={{ color: '#FF0000' }}>*</span> må
						fylles ut.
					</span>
				</Col>
			</Row>
			<Row className="justify-content-center">
				<div className={`border border-dark p-3 ${styles.divResponsive}`}>
					<SupportForm />
				</div>
			</Row>
			<Row>
				<Col className="text-center pt-5">
					<p>Eller kontakt oss direkte</p>
				</Col>
			</Row>

			<Row className="pb-5">
				<Col>
					<ContactCard
						name="Hans Petter Sandvold"
						phone="456 20 830"
						email="hanspetter@wellnessathome.no"
					/>
				</Col>
				<Col>
					<ContactCard
						name="Kenneth Nygård"
						phone="654 45 560"
						email="kenneth@wellnessathome.no"
					/>
				</Col>
			</Row>
		</Container>
	);
};
export default SupportPage;
