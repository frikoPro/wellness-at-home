import { Button, Col, Modal, Row, Form } from 'react-bootstrap';
import ProductForm from './ProductForm';

const UpdateProductModal = (props) => {
	const {
		values,
		handleChange,
		returnErrors,
		onSuccess,
		handleEvent,
		handleImages,
		removeValues,
		updateData,
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
				<ProductForm
					handleChange={handleChange}
					handleEvent={handleEvent}
					returnErrors={returnErrors}
					handleImages={handleImages}
					removeValues={removeValues}
					values={values}
				/>
			</Modal.Body>
			<Modal.Footer>
				<Row className="w-100">
					<Col>
						<Button onClick={updateData}>Lagre produkt</Button>
					</Col>
					<Col>
						<Form.Text className="text-success">{onSuccess}</Form.Text>
					</Col>
					<Col className="text-right">
						<Button onClick={props.onHide}>Close</Button>
					</Col>
				</Row>
				<Row className="w-100">
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

export default UpdateProductModal;
