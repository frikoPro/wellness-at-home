import { Button, Col, Modal, Row, Form } from 'react-bootstrap';
import { useContext, useEffect } from 'react';
import UseForm from '../UseForm';
import JacuzziForm from './JacuzziForm';
import { JacuzziContext } from '../../../contexts/JacuzziContext';

const UpdateJacuzziModal = (props) => {
	const userInput = UseForm({
		initialValues: { ...props.jacuzzi },
	});

	const {
		deleteData,
		updateData,
		returnErrors,
		onSuccess,
		removeErrors,
		errors,
	} = useContext(JacuzziContext);

	useEffect(() => {
		userInput.setValues({ ...props.jacuzzi });
	}, [props.jacuzzi, props.show]);

	useEffect(() => {
		if (onSuccess) props.onHide();
	}, [onSuccess]);

	useEffect(() => {
		removeErrors();
	}, [props.show]);

	return (
		<Modal
			{...props}
			size="lg"
			aria-labelledby="contained-modal-title-vcenter"
			centered>
			<Modal.Header closeButton>
				<Modal.Title id="contained-modal-title-vcenter">
					Oppdater jacuzzi
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<JacuzziForm returnErrors={returnErrors} userInput={userInput} />
			</Modal.Body>
			<Modal.Footer>
				<Col sm={1} className="mr-2">
					<Button
						className="btn-danger"
						onClick={() => deleteData(userInput.values._id)}>
						Delete
					</Button>
				</Col>
				<Col>
					<Button
						className="btn-warning"
						onClick={() => updateData(userInput.values)}>
						Update
					</Button>
				</Col>
				<Col>
					<Form.Text className="text-danger" style={{ whiteSpace: 'pre-line' }}>
						{errors}
					</Form.Text>
				</Col>
				<Col className="text-right">
					<Button onClick={props.onHide}>Close</Button>
				</Col>
				<Row className="w-100">
					{userInput.values.images[0]
						? userInput.values.images.map((img, i) => (
								<Col sm={2} key={i}>
									<img src={`/${img.image}`} alt="" className="w-100"></img>
								</Col>
						  ))
						: null}
				</Row>
			</Modal.Footer>
		</Modal>
	);
};

export default UpdateJacuzziModal;
