import { useContext, useState } from 'react';
import { LoggedInContext } from '../../contexts/LoggedInContext';
import { Accordion, Button, Card, Row, Col } from 'react-bootstrap';
import UseForm from '../webpanel/UseForm';
import AddFAQModal from './AddFAQModal';

const FAQ = ({
	question,
	answer,
	_id,
	deleteData,
	updateData,
	onSuccess,
	returnErrors,
}) => {
	const loggedIn = useContext(LoggedInContext);

	const [modalShow, setShow] = useState(false);

	const { values, handleChange } = UseForm({
		initialValues: { question, answer, _id },
	});

	return (
		<Accordion>
			<Card style={{ cursor: 'pointer' }}>
				<Accordion.Toggle as={Card.Header} eventKey="0" className="hover-gold">
					<Row>
						<Col xs={9}>
							<span>{question}</span>
						</Col>
						<Col className="text-right">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								height="24px"
								viewBox="0 0 24 24"
								width="24px"
								fill="#000000">
								<path d="M0 0h24v24H0V0z" fill="none" />
								<path d="M7 10l5 5 5-5H7z" />
							</svg>
						</Col>
					</Row>
				</Accordion.Toggle>
				<Accordion.Collapse eventKey="0">
					<Card.Body>{answer}</Card.Body>
				</Accordion.Collapse>
				{loggedIn ? (
					<Card.Footer>
						<Button className="btn-danger mr-5" onClick={() => deleteData(_id)}>
							Delete
						</Button>
						<Button className="btn-warning" onClick={() => setShow(true)}>
							Update
						</Button>
					</Card.Footer>
				) : null}
			</Card>

			{modalShow ? (
				<AddFAQModal
					show={modalShow}
					onHide={() => setShow(false)}
					FAQ={values}
					handleChange={handleChange}
					uploadData={updateData}
					errors={returnErrors}
					onSuccess={onSuccess}
				/>
			) : null}
		</Accordion>
	);
};

export default FAQ;
