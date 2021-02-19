import { Button, Col, Modal, Row, Form } from 'react-bootstrap';
import { ProductsContext } from '../../contexts/ProductsContext';
import { useContext } from 'react';

import UseForm from './UseForm';

import TechSpecInput from './TechSpecInput';
import SelectInput from './SelectInput';

const UpdateJacuzziModal = (props) => {
	const {
		handleChange,
		submitData,
		error,
		values,
		handleEvent,
		handleImages,
	} = UseForm({
		initialValues: {
			name: '',
			aboutProduct: '',
			brand: '',
			price: null,
			techSpec: [],
			relatedProducts: [],
			images: [],
		},
	});

	const products = useContext(ProductsContext);

	const returnErrors = (field) => {
		if (error) {
			const index = error.fields.findIndex((err) => err === field);

			return error.messages[index];
		}
	};

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
				<Form>
					<Form.Group>
						<Form.Label>Modell navn</Form.Label>
						<Form.Control
							placeholder="navn"
							name="name"
							value={values.name}
							onChange={handleChange}
						/>

						<Form.Text className="text-danger">
							{returnErrors('name')}
						</Form.Text>
					</Form.Group>

					<SelectInput
						handleChange={handleChange}
						options={['Svenska bad', 'Svenska bad pro', 'Nordpool']}
						name="brand"
					/>
					<Form.Text className="text-danger">{returnErrors('brand')}</Form.Text>
					<Form.Group>
						<Form.Label>Beskrivelse</Form.Label>
						<textarea
							className="form-control"
							name="aboutProduct"
							rows={4}
							onChange={handleChange}
						/>
						<Form.Text className="text-danger">
							{returnErrors('aboutProduct')}
						</Form.Text>
					</Form.Group>
					<Form.Group>
						<Form.Label>Pris</Form.Label>
						<Form.Control
							type="number"
							placeholder="pris"
							name="price"
							onChange={handleChange}
						/>
						<Form.Text className="text-danger">
							{returnErrors('price')}
						</Form.Text>
					</Form.Group>
					<TechSpecInput
						submitChange={handleChange}
						techSpec={values.techSpec}
					/>

					<Form.Group>
						<Form.Label>Relaterte produkter</Form.Label>
						<SelectInput
							name="relatedProducts"
							options={products.map((item) => item.name)}
							handleChange={(e) =>
								handleEvent(e.target.name, [
									...values.relatedProducts,
									products[e.target.value]._id,
								])
							}
						/>
					</Form.Group>
					<Form.Group>
						<Form.Label>Bilder</Form.Label>
						<Form.Control
							type="file"
							name="multi-files"
							onChange={handleImages}
							multiple
						/>
						<Form.Text className="text-danger">
							{returnErrors('images')}
						</Form.Text>
					</Form.Group>
					<Row>
						{values.images.preview
							? values.images.preview.map((img, i) => (
									<Col sm={2} key={i}>
										<img src={img} alt="" className="w-100"></img>
									</Col>
							  ))
							: null}
					</Row>
					<Row>
						<Col>
							<Button onClick={submitData}>Lagre produkt</Button>
						</Col>
					</Row>
				</Form>
			</Modal.Body>
			<Modal.Footer>
				<Col sm={1} className="mr-2">
					<Button className="btn-danger" /* onClick={deleteJacuzzi} */>
						Delete
					</Button>
				</Col>
				<Col>
					<Button className="btn-warning" /* onClick={updateJacuzzi} */>
						Update
					</Button>
				</Col>
				{/* 			<Col style={{ color: result.failed ? 'red' : 'green' }}>
					{result.resultText}
				</Col> */}
				<Col className="text-right">
					<Button onClick={props.onHide}>Close</Button>
				</Col>
			</Modal.Footer>
		</Modal>
	);
};

export default UpdateJacuzziModal;
