import { Button, Col, Container, Row } from 'react-bootstrap';
import styles from './SupportPage.module.css';

const SupportPage = () => {
	return (
		<Container>
			<Row className="justify-content-center p-5">
				<Col className={'text-center'}>
					<h1>Ofte stilte spørsmål</h1>
				</Col>
			</Row>
			<Row>
				<Col className={'text-center'}>
					<h1>Ofte stilte spørsmål</h1>
				</Col>
			</Row>
			<Row>
				<Col className={'text-center'}>
					<h1>Ofte stilte spørsmål</h1>
				</Col>
			</Row>
			<Row>
				<Col className={'text-center'}>
					<h1>Ofte stilte spørsmål</h1>
				</Col>
			</Row>
			<Row>
				<Col className={'text-center'}>
					<h1>Ofte stilte spørsmål</h1>
				</Col>
			</Row>
			<Row className="mt-5">
				<Col className={'text-center'}>
					<h2>Finner ikke svar?</h2>
				</Col>
			</Row>
			<Row>
				<Col xl={6} className="mx-auto">
					<p>Send oss en mail i feltet under</p>
				</Col>
			</Row>
			<Row>
				<Col xl={6} className="mx-auto">
					<p>Navn:</p>
				</Col>
			</Row>
			<Row>
				<Col xl={6} className="mx-auto">
					<input></input>
				</Col>
			</Row>
			<Row>
				<Col xl={6} className="mx-auto">
					<p>E-post:</p>
				</Col>
			</Row>
			<Row>
				<Col xl={6} className="mx-auto">
					<input></input>
				</Col>
			</Row>
			<Row>
				<Col xl={6} className="mx-auto">
					<p>Telefon</p>
				</Col>
			</Row>
			<Row>
				<Col xl={6} className="mx-auto">
					<input></input>
				</Col>
			</Row>
			<Row>
				<Col xl={6} className="mx-auto">
					<p>Type problem:</p>
				</Col>
			</Row>
			<Row>
				<Col xl={6} className="mx-auto">
					<input></input>
				</Col>
			</Row>
			<Row>
				<Col xl={6} className="mx-auto">
					<p>Melding:</p>
				</Col>
			</Row>
			<Row>
				<Col xl={6} className="mx-auto">
					<textarea rows="5"></textarea>
				</Col>
			</Row>
			<Row>
				<Col xl={6} className="mx-auto">
					<Button className="btn-warning">Send inn</Button>
				</Col>
			</Row>
			<Row>
				<Col className="text-center pt-5">
					<p>Eller kontakt oss direkte</p>
				</Col>
			</Row>
			<Row>
				<Col className="text-center pt-5">
					<p>Hans Petter Sandvold</p>
				</Col>
				<Col className="text-center pt-5">
					<p>Kenneth Nygård</p>
				</Col>
			</Row>
			<Row xl="6" className="text-center">
				<Col className="offset-md-1">
					<p>Telefon</p>
				</Col>
				<Col>
					<b>456 20 830</b>
				</Col>
				<Col className="offset-md-2">
					<p>Telefon</p>
				</Col>
				<Col>
					<b>654 45 560</b>
				</Col>
			</Row>
			<Row xl="6" className="text-center">
				<Col className="offset-md-1">
					<p>E-post</p>
				</Col>
				<Col>
					<b>hanspetter@wellness.no</b>
				</Col>
				<Col className="offset-md-2">
					<p>E-post</p>
				</Col>
				<Col>
					<b>kenneth@wellness.no</b>
				</Col>
			</Row>
		</Container>
	);
};
export default SupportPage;
