import { useContext, useEffect } from 'react';
import { ProductsContext } from '../../../contexts/ProductsContext';
import { Button, Card, Col, Row } from 'react-bootstrap';
import UseForm from '../UseForm';
import JacuzziForm from './JacuzziForm';

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

	const returnErrors = (field) => {
		if (error) {
			const index = error.fields.findIndex((err) => err === field);

			return error.messages[index];
		}
	};

	useEffect(() => {
		if (onSuccess) {
			setTimeout(() => {
				window.location.reload();
			}, 500);
		}
	}, [onSuccess]);

	return (
		<Card>
			<Card.Body>
				<Card.Title>Legg til spabad</Card.Title>
				<JacuzziForm
					handleChange={handleChange}
					handleEvent={handleEvent}
					returnErrors={returnErrors}
					handleImages={handleImages}
					values={values}
				/>
				<Row>
					{values.images.preview
						? values.images.preview.map((img, i) => (
								<Col sm={2} key={i}>
									<img src={img} alt="" className="w-100"></img>
								</Col>
						  ))
						: null}
				</Row>
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
