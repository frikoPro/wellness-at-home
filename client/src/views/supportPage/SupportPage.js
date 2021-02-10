import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import styles from './SupportPage.module.css';
import FAQList from '../../components/FAQ/FAQList';
import ContactCard from '../../components/ContactCard';

const SupportPage = () => {
	const supportPageContent = {
		FAQs: [
			{
				question: 'Hvor lang tid tar bestillingen?',
				answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
			},
			{
				question: 'Har mistet brukermanual',
				answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
			},
			{
				question: 'Kan man bestille med faktura?',
				answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
			},
			{
				question: 'Hva er forskjellen på saltvann og klor?',
				answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
			},
		],
	};
	

	return (
		<Container>
			<Row className="justify-content-center p-5">
				<Col className={'text-center'}>
					<h1>Ofte stilte spørsmål</h1>
				</Col>
			</Row>
			<Row sm={2} className="justify-content-center align-items-center ml-5">
				<FAQList FAQs={supportPageContent.FAQs}/>
			</Row>
			<Row className="mt-5">
				<Col className={'text-center'}>
					<h2>Finner du ikke svar?</h2>
				</Col>
			</Row>
			<Row>
				<Col className={'text-center'}>
					<p>Fyll ut skjemaet under så hjelper vi deg</p>
				</Col>
			</Row>
			<div className="mx-auto border border-dark p-3" style={{width: "60%"}}>
				<Form className="mx-auto" style={{width: "70%"}}>
					<Form.Group controlId="supportForm.ControlInputName">
						<Form.Label>Navn:</Form.Label>
						<Form.Control className="border-dark"/>
					</Form.Group>
					<Form.Group controlId="supportForm.ControlInputEmail">
						<Form.Label>E-post:</Form.Label>
						<Form.Control className="border-dark" type="email" placeholder="navn@eksempel.no" />
					</Form.Group>
					<Form.Group controlId="supportForm.ControlInputPhone">
						<Form.Label>Telefon:</Form.Label>
						<Form.Control className="border-dark"/>
					</Form.Group>
					<Form.Group controlId="supportForm.ControlInputProblem">
						<Form.Label>Type problem:</Form.Label>
						<Form.Control className="border-dark"/>
					</Form.Group>
					<Form.Group controlId="exampleForm.ControlTextareaMessage">
						<Form.Label>Melding:</Form.Label>
						<Form.Control className="border-dark" as="textarea" rows={5} />
					</Form.Group>
					<Button className="btn-warning">Send inn</Button>
				</Form>
			</div>
			
			<Row>
				<Col className="text-center pt-5">
					<p>Eller kontakt oss direkte</p>
				</Col>
			</Row>
			
			<Row>
				<Col>
					<ContactCard name="Hans Petter Sandvold" phone="456 20 830" email="hanspetter@wellness.no"/>
				</Col>
				<Col>
					<ContactCard name="Kenneth Nygård" phone="654 45 560" email="kenneth@wellness.no"/>
				</Col>
			</Row>
		</Container>
	);
};
export default SupportPage;
