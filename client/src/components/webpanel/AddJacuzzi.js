import { useContext, useEffect } from 'react';
import { ProductsContext } from '../../contexts/ProductsContext';

import { Button, Card, Col, Form, Row } from 'react-bootstrap';
import UseForm from './UseForm';
import TechSpecInput from './TechSpecInput';
import SelectInput from './SelectInput';
const AddJacuzzi = () => {
	const {
		values,
		handleChange,
		submitData,
		error,
		onSuccess,
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

	useEffect(() => {
		if (onSuccess) {
			window.location.reload();
		}
	}, [onSuccess]);

	return (
		<Card>
			<Card.Body>
				<Card.Title>Legg til spabad</Card.Title>
				<Form>
					<Form.Group>
						<Form.Label>Modell navn</Form.Label>
						<Form.Control
							placeholder="navn"
							name="name"
							onChange={handleChange}
						/>

						<Form.Text className="text-danger">
							{returnErrors('name')}
						</Form.Text>
					</Form.Group>
					<Form.Group>
						<Form.Label>Velg merke</Form.Label>
						<SelectInput
							handleChange={handleChange}
							options={['Svenska bad', 'Svenska bad pro', 'Nordpool']}
							name="brand"
						/>
						<Form.Text className="text-danger">
							{returnErrors('brand')}
						</Form.Text>
					</Form.Group>

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
					<Form.Group>
						<Form.Label>Tekniske spesifikasjoner</Form.Label>
						<TechSpecInput
							submitChange={handleChange}
							techSpec={values.techSpec}
						/>
						<Form.Text className="text-danger text-center">
							{returnErrors('techSpec')}
						</Form.Text>
					</Form.Group>
					<Form.Group>
						<Form.Label>Relaterte produkter</Form.Label>
						<SelectInput
							name="relatedProducts"
							options={products.map((item) => item.name)}
							handleChange={(e) =>
								handleEvent(e.target.name, [
									...values.relatedProducts,
									products[e.target.name]._id,
								])
							}
						/>
					</Form.Group>
					<Form.Group>
						<Form.Label>Bilder</Form.Label>
						<Form.Control
							type="file"
							name="multi-files"
							accept="image/x-png,image/gif,image/jpeg"
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
				</Form>
			</Card.Body>
			<Card.Footer>
				<Row>
					<Col sm={2}>
						<Button onClick={submitData}>Lagre produkt</Button>
					</Col>
					<Col className="align-self-center">
						<Card.Text className="text-success text-center">
							{onSuccess}
						</Card.Text>
					</Col>
				</Row>
			</Card.Footer>
		</Card>
	);
};

export default AddJacuzzi;
