import { Button, Col, Modal, Row, Form } from 'react-bootstrap';
import { useEffect } from 'react';
import UseForm from '../UseForm';
import JacuzziForm from './JacuzziForm';

const UpdateJacuzziModal = (props) => {
	const {
		handleChange,
		updateData,
		deleteData,
		error,
		onSuccess,
		values,
		setValues,
		handleEvent,
		handleImages,
	} = UseForm({
		initialValues: { ...props.jacuzzi },
	});

	const returnErrors = (field) => {
		if (error) {
			const index = error.fields.findIndex((err) => err === field);

			return error.messages[index];
		}
	};

	useEffect(() => {
		setValues({ ...props.jacuzzi });

		if (onSuccess)
			setTimeout(() => {
				window.location.reload();
			}, 500);
	}, [props.jacuzzi, onSuccess]);

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
					values={values}
					handleChange={handleChange}
					returnErrors={returnErrors}
					handleEvent={handleEvent}
					handleImages={handleImages}
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
