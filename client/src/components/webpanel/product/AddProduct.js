import { Button, Card, Col, Row } from 'react-bootstrap';
import UseForm from '../UseForm';
import ProductForm from './ProductForm';

const AddProduct = () => {
	const {
		values,
		handleChange,
		submitData,
		returnErrors,
		onSuccess,
		handleEvent,
		handleImages,
		removeValues,
	} = UseForm({
		initialValues: {
			name: '',
			aboutProduct: '',
			category: '',
			affiliation: [],
			price: null,
			techSpec: [],
			relatedProducts: [],
			images: [],
		},
		url: 'http://localhost:8080/products/',
	});

	return (
		<Card>
			<Card.Body>
				<Card.Title>Legg til produkt</Card.Title>
				<ProductForm
					handleChange={handleChange}
					handleEvent={handleEvent}
					returnErrors={returnErrors}
					handleImages={handleImages}
					removeValues={removeValues}
					values={values}
				/>
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

export default AddProduct;
