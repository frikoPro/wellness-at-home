import { useContext, useEffect } from 'react';
import { Container, Card, Form, Row, Col } from 'react-bootstrap';
import { ProductsContext } from '../../contexts/ProductsContext';
import PriceFormatter from '../PriceFormatter';
import UseForm from '../webpanel/UseForm';

const Checkout = ({ setRecipt }) => {
	const { cart, totalPrice, updateCart } = useContext(ProductsContext);

	const {
		handleChange,
		submitData,
		setValues,
		returnErrors,
		onSuccess,
		values,
	} = UseForm({
		url: 'http://localhost:8080/orders/',
	});

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

					{cart.map((item) => (
						<Row className="margin-bottom-line pb-2">
							<Col sm={2} xs={2}>
								<Card.Img
									src={`http://localhost:8080/${item.images[0].image}`}
								/>
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

							<Card.Img
								src={`http://localhost:8080/vipps.png`}
								onClick={submitData}
							/>
						</Col>
					</Row>
				</Card.Body>
			</Card>
		</Container>
	);
};

export default Checkout;
