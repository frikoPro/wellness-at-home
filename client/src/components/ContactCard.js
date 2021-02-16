import { Col, Container, Row } from 'react-bootstrap';

const ContactCard = ({ name, phone, email }) => {
	return (
		<Row className="justify-content-center w-100 mx-auto">
			<Container className="bg-white shadow p-0">
				<Row className="m-0" style={{ height: '100%' }}>
					<Col md={5} className="p-0 d-none d-md-block">
						<img
							src={defaultImage}
							alt=""
							style={{ width: '100%', height: '100%' }}></img>
					</Col>

					<Col md={7}>
						<Row className="justify-content-center mt-3">
							<img src={'http://localhost:8080/wellnessLogo.png'} />
						</Row>
						<Row className="justify-content-center text-center">
							<h3>{name}</h3>
						</Row>
						<Row className="justify-content-center">
							<span>
								Telefon: <strong>{phone}</strong>
							</span>
						</Row>
						<Row className="justify-content-center">
							<span>
								E-post: <strong>{email}</strong>
							</span>
						</Row>
					</Col>
				</Row>
			</Container>
		</Row>
	);
};

export default ContactCard;
