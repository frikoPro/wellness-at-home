import { Button, Col, Modal, Row, Form } from 'react-bootstrap';
import { useEffect } from 'react';
import UseForm from '../UseForm';
import JacuzziForm from './JacuzziForm';

const UpdateJacuzziModal = (props) => {
	const {
		values,
		handleChange,
		submitData,
		returnErrors,
		onSuccess,
		handleEvent,
		handleImages,
		removeValues,
		setValues,
		deleteData,
		updateData,
	} = UseForm({
		initialValues: { ...props.jacuzzi },
		url: 'http://localhost:8080/jacuzzis/',
	});

	useEffect(() => {
		setValues({ ...props.jacuzzi });
	}, [props.jacuzzi, props.show]);

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
				<JacuzziForm
					handleChange={handleChange}
					handleEvent={handleEvent}
					returnErrors={returnErrors}
					handleImages={handleImages}
					removeValues={removeValues}
					values={values}
					onSuccess={onSuccess}
					submitData={submitData}
				/>
			</Modal.Body>
			<Modal.Footer>
				<Col sm={1} className="mr-2">
					<Button className="btn-danger" onClick={deleteData}>
						Delete
					</Button>
				</Col>
				<Col>
					<Button className="btn-warning" onClick={updateData}>
						Update
					</Button>
				</Col>
				<Col>
					<Form.Text className="text-success">{onSuccess}</Form.Text>
				</Col>
				<Col className="text-right">
					<Button onClick={props.onHide}>Close</Button>
				</Col>
				<Row>
					{values.images
						? values.images.map((img, i) => (
								<Col sm={2} key={i}>
									<img
										src={`http://localhost:8080/${img.image}`}
										alt=""
										className="w-100"></img>
								</Col>
						  ))
						: null}
				</Row>
			</Modal.Footer>
		</Modal>
	);
};

export default UpdateJacuzziModal;
