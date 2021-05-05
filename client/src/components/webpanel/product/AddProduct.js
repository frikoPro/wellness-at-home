import { useContext, useEffect } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { ProductsContext } from '../../../contexts/ProductsContext';
import UseForm from '../UseForm';
import ProductForm from './ProductForm';

const AddProduct = () => {
	const {
		values,
		handleChange,
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
	});

	const {
		submitData,
		returnErrors,
		onSuccess,
		errors,
		removeErrors,
	} = useContext(ProductsContext);

	const getResponse = () => {
		if (onSuccess)
			return (
				<Card.Text className="text-success text-center">{onSuccess}</Card.Text>
			);
		else if (errors)
			return (
				<Card.Text
					className="text-danger text-center"
					style={{ whiteSpace: 'pre-line' }}>
					{errors}
				</Card.Text>
			);
	};

	useEffect(() => {
		return () => removeErrors();
	}, []);

	return (
		<Card>
			<Card.Body>
				<Card.Title>Legg til tilbehør</Card.Title>
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
						<Button onClick={() => submitData(values)}>Lagre tilbehør</Button>
					</Col>
					<Col className="align-self-center">{getResponse()}</Col>
				</Row>
			</Card.Footer>
		</Card>
	);
};

export default AddProduct;
