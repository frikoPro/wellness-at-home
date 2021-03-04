import { Button, Modal, Col, Row, Form } from 'react-bootstrap';
import SlideshowForm from './SlideshowForm';

const UpdateSlideModal = (props) => {
	const {
		onSuccess,
		values,
		updateData,
		handleImage,
		handleChange,
		error,
		deleteData,
	} = props;

	return (
		<Modal
			{...props}
			size="lg"
			aria-labelledby="contained-modal-title-vcenter"
			centered>
			<Modal.Header closeButton>
				<Modal.Title id="contained-modal-title-vcenter">
					Oppdater produkt
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<SlideshowForm
					handleChange={handleChange}
					handleImage={handleImage}
					values={values}
					error={error}
				/>
			</Modal.Body>
			<Modal.Footer>
				<Row className="w-100">
					<Col>
						<Button className="btn-warning" onClick={updateData}>
							Update
						</Button>
					</Col>
					<Col>
						<Button className="btn-danger" onClick={deleteData}>
							Slett produkt
						</Button>
					</Col>
					<Col>
						<Form.Text className="text-success">{onSuccess}</Form.Text>
					</Col>
					<Col className="text-right">
						<Button onClick={props.onHide}>Close</Button>
					</Col>
				</Row>
				<Row className="w-100">
					<Col sm={2}>
						<img
							src={`http://localhost:8080/${values.images}`}
							alt=""
							className="w-100"></img>
					</Col>
				</Row>
			</Modal.Footer>
		</Modal>
	);
};

export default UpdateSlideModal;
