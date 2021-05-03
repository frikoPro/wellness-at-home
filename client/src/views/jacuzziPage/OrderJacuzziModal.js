import { Button, Col, Modal } from 'react-bootstrap';
import SupportForm from '../../components/SupportForm';

const OrderJacuzziModal = (props) => {
	return (
		<Modal
			{...props}
			size="lg"
			aria-labelledby="contained-modal-title-vcenter"
			centered>
			<Modal.Header closeButton>
				<Modal.Title id="contained-modal-title-vcenter">
					Bestill bad
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
                <SupportForm/>
			</Modal.Body>
			<Modal.Footer>
				<Col className="text-right">
					<Button onClick={props.onHide}>Close</Button>
				</Col>
			</Modal.Footer>
		</Modal>
	);
};

export default OrderJacuzziModal;
