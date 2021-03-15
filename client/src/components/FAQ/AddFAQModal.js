import FAQForm from './FAQForm';
import { Form, Modal, Col, Row, Button } from 'react-bootstrap';

const AddFAQModal = (props) => {
	return (
		<Modal
			{...props}
			size="lg"
			aria-labelledby="contained-modal-title-vcenter"
			centered>
			<Modal.Header closeButton>
				<Modal.Title id="contained-modal-title-vcenter">
					Legg til FAQ
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<FAQForm
					handleChange={props.handleChange}
					values={props.FAQ}
					errors={props.errors}
				/>
			</Modal.Body>
			<Modal.Footer>
				<Row className="w-100">
					<Col>
						<Button onClick={props.uploadData}>Lagre</Button>
					</Col>
					<Col>
						<Form.Text className="text-success">{props.onSuccess}</Form.Text>
					</Col>
					<Col className="text-right">
						<Button onClick={props.onHide}>Close</Button>
					</Col>
				</Row>
			</Modal.Footer>
		</Modal>
	);
};

export default AddFAQModal;
