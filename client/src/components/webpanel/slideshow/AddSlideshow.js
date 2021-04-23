import { useContext } from 'react';
import { Button, Card, Row, Col } from 'react-bootstrap';
import { SlideshowContext } from '../../../contexts/SlideshowContext';
import UseForm from '../UseForm';
import SlideshowForm from './SlideshowForm';

const AddSlideshow = () => {
	const { handleImages, handleChange, values } = UseForm({
		initialValues: {
			textHead: '',
			textP: '',
		},
	});

	const { submitData, returnErrors, onSuccess } = useContext(SlideshowContext);

	return (
		<Card>
			<Card.Body>
				<Card.Title>Legg til slideshow</Card.Title>
				<SlideshowForm
					handleChange={handleChange}
					handleImage={handleImages}
					values={values}
					error={returnErrors}
				/>
			</Card.Body>
			<Card.Footer>
				<Row className="align-items-center">
					<Col>
						<Button onClick={() => submitData(values)}>Lagre slideshow</Button>
					</Col>
					<Col>
						<Card.Text className="text-success">{onSuccess}</Card.Text>
					</Col>
				</Row>
			</Card.Footer>
		</Card>
	);
};

export default AddSlideshow;
