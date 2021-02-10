import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import styles from './SupportPage.module.css';
import FAQList from '../../components/FAQ/FAQList'

const SupportPage = () => {
	const frequentQuestionsContent = {
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
				<FAQList FAQs={frequentQuestionsContent.FAQs}/>
			</Row>
			<Row className="mt-5">
				<Col className={'text-center'}>
					<h2>Finner ikke svar?</h2>
				</Col>
			</Row>
			<Row>
				<Col className={'text-center'}>
					<p>Send oss en mail i feltet under</p>
				</Col>
			</Row>
			<div className="mx-auto" style={{width: "50%"}}>
				<Form>
					<Form.Group controlId="supportForm.ControlInputName">
						<Form.Label>Navn:</Form.Label>
						<Form.Control/>
					</Form.Group>
					<Form.Group controlId="supportForm.ControlInputEmail">
						<Form.Label>E-post:</Form.Label>
						<Form.Control type="email" placeholder="navn@eksempel.no" />
					</Form.Group>
					<Form.Group controlId="supportForm.ControlInputPhone">
						<Form.Label>Telefon:</Form.Label>
						<Form.Control/>
					</Form.Group>
					<Form.Group controlId="supportForm.ControlInputProblem">
						<Form.Label>Type problem:</Form.Label>
						<Form.Control/>
					</Form.Group>
					<Form.Group controlId="exampleForm.ControlTextareaMessage">
						<Form.Label>Melding:</Form.Label>
						<Form.Control as="textarea" rows={5} />
					</Form.Group>
					<Button className="btn-warning">Send inn</Button>
				</Form>
			</div>
			
			<Row>
				<Col className="text-center pt-5">
					<p>Eller kontakt oss direkte</p>
				</Col>
			</Row>
			
			<Row className="mx-auto">
				<Col md={{offset: 2}}>
					<div>
						<Form>
							<Form.Label>Hans Petter Sandvold</Form.Label>
							<Form.Group as={Row}>
								<Form.Label column sm={4}>Telefon:</Form.Label>
								<Col>
									<Form.Control plaintext readOnly value="456 20 830"/>
								</Col>
							</Form.Group>
							<Form.Group as={Row}>
								<Form.Label column sm={4}>E-post:</Form.Label>
								<Col>
									<Form.Control plaintext readOnly value="hanspetter@wellness.no"/>
								</Col>
							</Form.Group>
						</Form>
					</div>
				</Col>
				<Col>
					<div>
						<Form>
							<Form.Label>Kenneth Nygård</Form.Label>
							<Form.Group as={Row}>
								<Form.Label column sm={4}>Telefon</Form.Label>
								<Col>
									<Form.Control plaintext readOnly value="654 45 560"/>
								</Col>
							</Form.Group>
							<Form.Group as={Row}>
								<Form.Label column sm={4}>E-post</Form.Label>
								<Col>
									<Form.Control plaintext readOnly value="kenneth@wellness.no"/>
								</Col>
							</Form.Group>
						</Form>
					</div>
				</Col>
			</Row>
		</Container>
	);
};
export default SupportPage;
