import { useContext, useState } from 'react';
import { LoggedInContext } from '../../contexts/LoggedInContext';
import { Accordion, Button, Card } from 'react-bootstrap';
import UseForm from '../webpanel/UseForm';
import AddFAQModal from './AddFAQModal';

const FAQ = ({ question, answer, _id }) => {
	const loggedIn = useContext(LoggedInContext);

	const [modalShow, setShow] = useState(false);

	const {
		updateData,
		values,
		handleChange,
		handleImage,
		setValues,
		onSuccess,
		returnErrors,
		deleteData,
	} = UseForm({
		initialValues: { question, answer, _id },
		url: 'http://localhost:8080/FAQ/',
	});

	return (
		<Accordion>
			<Card style={{cursor: "pointer"}}>
				<Accordion.Toggle as={Card.Header} eventKey="0">
					{question}
				</Accordion.Toggle>
				<Accordion.Collapse eventKey="0">
					<Card.Body>{answer}</Card.Body>
				</Accordion.Collapse>
				{loggedIn ? (
					<Card.Footer>
						<Button className="btn-danger mr-5" onClick={deleteData}>
							Delete
						</Button>
						<Button className="btn-warning" onClick={() => setShow(true)}>
							Update
						</Button>
						<Card.Text className="text-success">{onSuccess}</Card.Text>
					</Card.Footer>
				) : null}
			</Card>

			<AddFAQModal
				show={modalShow}
				onHide={() => setShow(false)}
				FAQ={values}
				handleChange={handleChange}
				uploadData={updateData}
				errors={returnErrors}
				onSuccess={onSuccess}
			/>
		</Accordion>
	);
};

export default FAQ;
