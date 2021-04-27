import { useEffect } from 'react';
import { Button, Col, Modal, Row, Form } from 'react-bootstrap';
import ProductForm from './ProductForm';

const UpdateProductModal = (props) => {
	const {
		values,
		handleChange,
		returnErrors,
		errors,
		handleEvent,
		handleImages,
		removeValues,
		updateData,
		onSuccess,
	} = props;

	useEffect(() => {
		if (onSuccess) props.onHide();
	}, [onSuccess]);

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
						<Button onClick={() => updateData(values)}>Lagre produkt</Button>
					</Col>
					<Col className="align-self-center text-center">
						<Form.Text className="text-danger">{errors}</Form.Text>
					</Col>
					<Col className="text-right">
						<Button onClick={props.onHide}>Close</Button>
					</Col>
				</Row>
				<Row className="w-100">
					{values.images[0]
						? values.images.map((img, i) => (
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

export default UpdateProductModal;
