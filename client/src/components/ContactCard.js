import { Col, Container, Row} from 'react-bootstrap';
import defaultImage from '../images/Profile-PNG-Icon.png';

const ContactCard = ({ name, phone, email }) => {
	return (
		<Row className="justify-content-center w-100 mx-auto">
			<Container className="bg-white shadow p-0 mt-5">
				<Row className="m-0" style={{ height: '100%' }}>
					<Col md={5} className="p-0 d-none d-md-block">
						<img
							src={defaultImage}
							alt=""
							style={{ width: '100%', height: '100%' }}></img>
					</Col>

					<Col md={7}>
						<Row className="justify-content-center text-center mt-5">
							<h3>{name}</h3>
						</Row>
						<Row className="justify-content-center">
							<p>Telefon: <strong>{phone}</strong></p>
						</Row>
						<Row className="justify-content-center">
							<p>E-post: <strong>{email}</strong></p>
						</Row>
					</Col>
				</Row>
			</Container>
		</Row>
	);
};

export default ContactCard;