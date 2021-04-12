import { Button, Card, Row, Col } from 'react-bootstrap';
import UseForm from '../UseForm';
import SlideshowForm from './SlideshowForm';

const AddSlideshow = () => {
	const {
		submitData,
		handleImages,
		handleChange,
		values,
		onSuccess,
		returnErrors,
	} = UseForm({
		initialValues: {
			textHead: '',
			textP: '',
		},
		url: 'http://localhost:8080/slideshow/',
	});

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
						<Button onClick={submitData}>Lagre slideshow</Button>
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
