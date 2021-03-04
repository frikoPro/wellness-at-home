import { useContext } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import UseForm from '../UseForm';
import JacuzziForm from './JacuzziForm';
import { JacuzziContext } from '../../../contexts/JacuzziContext';

const AddJacuzzi = () => {
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
			brand: '',
			price: null,
			techSpec: [],
			relatedProducts: [],
			images: [],
		},
		url: 'http://localhost:8080/jacuzzis/',
	});

	const { techSpec } = useContext(JacuzziContext);

	return (
		<Card>
			<Card.Body>
				<Card.Title>Legg til spabad</Card.Title>

				<JacuzziForm
					handleChange={handleChange}
					handleEvent={handleEvent}
					returnErrors={returnErrors}
					handleImages={handleImages}
					removeValues={removeValues}
					values={values}
					techSpec={techSpec}
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

export default AddJacuzzi;
