import { useContext, useEffect } from 'react';
import { Container, Card, Form, Row, Col } from 'react-bootstrap';
import { OrderContext } from '../../contexts/OrderContext';
import PriceFormatter from '../PriceFormatter';
import UseForm from '../webpanel/UseForm';

const Checkout = ({ setRecipt, cart, totalPrice, updateCart }) => {
	const { postData, returnErrors, onSuccess, cleanUp } = useContext(
		OrderContext
	);

	const { handleChange, setValues, values } = UseForm({});

	useEffect(() => {
		if (cart.length > 0) {
			setValues({ cart: cart });
		}
	}, [cart]);

	useEffect(() => {
		if (onSuccess) {
			setRecipt({ ...values, totalPrice: totalPrice });
			updateCart([]);
		}

		return () => cleanUp();
	}, [onSuccess]);

	return (
		<Container>
			<Card>
				<Card.Body>
					<Card.Title>Kassen</Card.Title>
					<Form>
						<Form.Group>
							<Form.Label>Fornavn</Form.Label>
							<Form.Control
								placeholder="Ola/Kari"
								name="firstName"
								onChange={handleChange}
							/>
							<Form.Text className="text-danger">
								{returnErrors('firstName')}
							</Form.Text>
						</Form.Group>
						<Form.Group>
							<Form.Label>Etternavn</Form.Label>
							<Form.Control
								placeholder="Nordmann"
								name="lastName"
								onChange={handleChange}
							/>
							<Form.Text className="text-danger">
								{returnErrors('lastName')}
							</Form.Text>
						</Form.Group>
						<Form.Group>
							<Form.Label>Adresse</Form.Label>
							<Form.Control
								placeholder="Dælengata 30"
								name="address"
								onChange={handleChange}
							/>
							<Form.Text className="text-danger">
								{returnErrors('address')}
							</Form.Text>
						</Form.Group>
						<Form.Group>
							<Form.Label>Epost</Form.Label>
							<Form.Control
								placeholder="kariNordmann@gmail.com"
								name="email"
								onChange={handleChange}
							/>
						</Form.Group>
						<Form.Group>
							<Form.Label>Tlf</Form.Label>
							<Form.Control
								placeholder="45322620"
								name="tlf"
								onChange={handleChange}
							/>
							<Form.Text>{returnErrors('tlf')}</Form.Text>
						</Form.Group>
						<Row>
							<Col sm={2} xs={2}>
								<Form.Group>
									<Form.Label>Postnummer</Form.Label>
									<Form.Control
										placeholder="0555"
										name="postalCode"
										onChange={handleChange}
									/>
									<Form.Text className="text-danger">
										{returnErrors('postalCode')}
									</Form.Text>
								</Form.Group>
							</Col>
							<Col>
								<Form.Group>
									<Form.Label>Poststed</Form.Label>
									<Form.Control
										placeholder="Oslo"
										name="postalPlace"
										onChange={handleChange}
									/>
									<Form.Text className="text-danger">
										{returnErrors('postalPlace')}
									</Form.Text>
								</Form.Group>
							</Col>
						</Row>
					</Form>
					<Card.Title>Dine varer</Card.Title>

					{cart.map((item, i) => (
						<Row className="margin-bottom-line pb-2" key={i}>
							<Col sm={2} xs={2}>
								<Card.Img src={`/${item.images[0].image}`} />
							</Col>
							<Col>
								<Card.Title>
									{item.name} ({item.qty} stk)
								</Card.Title>
								<Card.Text>{item.aboutProduct}</Card.Text>
							</Col>
							<Col className="text-right">
								{PriceFormatter(item.qty * item.price)}
							</Col>
						</Row>
					))}
					<Row>
						<Col className="text-right mt-4">
							Totalt beløp: {PriceFormatter(totalPrice)}
						</Col>
					</Row>
					<Row>
						<Col
							xs={{ span: 3, offset: 9 }}
							sm={{ span: 3, offset: 9 }}
							md={{ span: 2, offset: 10 }}
							className="mt-4">
							<Card.Text>Betal nå med vipps</Card.Text>

							<Card.Img src={`/vipps.png`} onClick={() => postData(values)} />
						</Col>
					</Row>
				</Card.Body>
			</Card>
		</Container>
	);
};

export default Checkout;
