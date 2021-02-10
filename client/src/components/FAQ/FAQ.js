import { Accordion, Card } from 'react-bootstrap';

const FAQ = ({ question, answer }) => {

	return (
		<Accordion>
			<Card>
				<Accordion.Toggle as={Card.Header} eventKey="0">
					{question}
				</Accordion.Toggle>
				<Accordion.Collapse eventKey="0">
					<Card.Body>{answer}</Card.Body>
				</Accordion.Collapse>
			</Card>
		</Accordion>
	);
};

export default FAQ;
