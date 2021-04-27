import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { Button, Card, Container, Form, Modal } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router';
import { JacuzziContext } from '../../contexts/JacuzziContext';
import { ReviewInvContext } from '../../contexts/ReviewInvContext';
import StarRating from '../StarRating';
import UseForm from '../webpanel/UseForm';

const AddReview = () => {
	const { id } = useParams();

	const { invites } = useContext(ReviewInvContext);

	const { jacuzzis, updateData, onSuccess } = useContext(JacuzziContext);

	const [validInv, setValid] = useState(false);

	const [rating, setRating] = useState(0);

	const [show, setShow] = useState(false);

	const { handleChange, setValues, values } = UseForm({});

	let history = useHistory();

	useEffect(() => {
		const arrInv = invites.find((inv) => inv._id === id);

		if (arrInv) {
			setValid(true);
			const jacuzzi = jacuzzis.find((item) => item._id === arrInv.product);
			setValues({ ...jacuzzi });
		}
	}, [invites, jacuzzis]);

	const handleUpdate = () => {
		const review = {
			author: values.author,
			header: values.header,
			text: values.text,
			rating: rating,
		};

		setValues({ ...values, userReviews: [...values.userReviews, review] });
		setShow(true);
	};

	const handleRequest = () => {
		axios
			.delete(`/reviewinvites/${id}`)
			.then((res) => console.log(res.data))
			.catch((err) => console.log(err));

		updateData(values);
	};

	useEffect(() => {
		if (onSuccess) history.push(`/spabad/${values._id}`);
	}, [onSuccess]);

	return (
		<Container>
			{validInv ? (
				<Card>
					<Card.Body>
						<Card.Title>Opprett ny anmeldelse</Card.Title>
						<Form>
							<Form.Group>
								<Form.Label>Navn</Form.Label>
								<Form.Control
									placeholder="Anonym/Ole Nordmann"
									onChange={handleChange}
									name="author"
								/>
							</Form.Group>
							<Form.Group>
								<Form.Label>Tittel</Form.Label>
								<Form.Control
									placeholder="Perfekt for meg/Skuffende opplevelse"
									onChange={handleChange}
									name="header"
								/>
							</Form.Group>
							<Form.Group>
								<Form.Label>Hva syntes du om produktet?</Form.Label>
								<textarea
									className="form-control"
									rows={5}
									onChange={handleChange}
									name="text"></textarea>
							</Form.Group>
						</Form>
						<Form.Group>
							<Form.Label>Stjerne rangering</Form.Label>
							<div>
								<Button
									onClick={() => setRating(rating !== 0 ? rating - 1 : rating)}>
									-
								</Button>
								<StarRating rating={rating} size={2} />
								<Button
									onClick={() => setRating(rating !== 5 ? rating + 1 : rating)}>
									+
								</Button>
							</div>
						</Form.Group>
					</Card.Body>
					<Card.Footer>
						<Button onClick={handleUpdate}>Send inn</Button>
					</Card.Footer>
					<Modal show={show} onHide={() => setShow(false)} centered>
						<Modal.Header closeButton>
							<Modal.Title>Modal heading</Modal.Title>
						</Modal.Header>
						<Modal.Body>
							Du er nå i ferd med å sende inn din anmeldelse. Når du først har
							sendt din anmeldelse kan du ikke endre på den.
						</Modal.Body>
						<Modal.Footer>
							<Button variant="warning" onClick={() => setShow(false)}>
								avbryt
							</Button>
							<Button variant="primary" onClick={handleRequest}>
								Send inn
							</Button>
							<Card.Text className="text-success">
								{onSuccess ? 'Anmeldelse sendt inn' : null}
							</Card.Text>
						</Modal.Footer>
					</Modal>
				</Card>
			) : (
				<h1>Denne linken er ikke lenger gylid eller er allerede brukt</h1>
			)}
		</Container>
	);
};

export default AddReview;
