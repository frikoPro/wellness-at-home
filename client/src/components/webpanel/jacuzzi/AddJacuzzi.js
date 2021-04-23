import { useContext, useEffect } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { JacuzziContext } from '../../../contexts/JacuzziContext';
import UseForm from '../UseForm';
import JacuzziForm from './JacuzziForm';

const AddJacuzzi = () => {
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
			brand: '',
			price: null,
			techSpec: [],
			relatedProducts: [],
			images: [],
		},
	});

	const {
		submitData,
		returnErrors,
		errors,
		onSuccess,
		removeErrors,
	} = useContext(JacuzziContext);

	useEffect(() => {
		return () => removeErrors();
	}, []);

	const returnResponse = () => {
		if (errors)
			return (
				<Card.Text
					className="text-danger text-center"
					style={{ whiteSpace: 'pre-line' }}>
					{errors}
				</Card.Text>
			);
		else if (onSuccess)
			return (
				<Card.Text className="text-success text-center">{onSuccess}</Card.Text>
			);
	};

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
				/>
			</Card.Body>
			<Card.Footer>
				<Row>
					<Col sm={2}>
						<Button onClick={() => submitData(values)}>Lagre produkt</Button>
					</Col>
					<Col className="align-self-center">{returnResponse()}</Col>
				</Row>
			</Card.Footer>
		</Card>
	);
};

export default AddJacuzzi;
