import { Col, Container, Row } from 'react-bootstrap';
import FAQList from '../../components/FAQ/FAQList';
import ContactCard from '../../components/ContactCard';
import SupportForm from '../../components/SupportForm';
import styles from './SupportPage.module.css';

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
		<Container 
			className="shadow"
			style={{ backgroundColor: 'white', marginTop: '5%' }}>
			<Row className="justify-content-center p-5">
				<Col className={'text-center'}>
					<h1>Ofte stilte spørsmål</h1>
				</Col>
			</Row>
			<Row className="justify-content-center mx-auto ml-5" style={{width: "70%"}}>
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
			<Row className="justify-content-center">
				<div className={`border border-dark p-3 ${styles.divResponsive}`}>
					<SupportForm/>
				</div>
			</Row>
			<Row>
				<Col className="text-center pt-5">
					<p>Eller kontakt oss direkte</p>
				</Col>
			</Row>
			
			<Row className="pb-5">
				<Col>
					<ContactCard name="Hans Petter Sandvold" phone="456 20 830" email="hanspetter@wellnessathome.no"/>
				</Col>
				<Col>
					<ContactCard name="Kenneth Nygård" phone="654 45 560" email="kenneth@wellnessathome.no"/>
				</Col>
			</Row>
		</Container>
	);
};
export default SupportPage;