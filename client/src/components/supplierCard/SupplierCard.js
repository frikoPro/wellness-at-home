import { Col, Container, Row, Button } from 'react-bootstrap';

const SupplierCard = ({ image, logo, text }) => {
	return (
		<Row className="justify-content-center w-100 mx-auto">
			<Container className="bg-white shadow p-0 mt-5">
				<Row className="m-0" style={{ height: '100%' }}>
					<Col md={6} className="p-0 d-none d-md-block">
						<img
							src={image}
							alt=""
							style={{ width: '100%', height: '100%' }}></img>
					</Col>

					<Col md={6}>
						<Row className="justify-content-center text-center">
							<img
								className="p-5"
								src={logo}
								alt=""
								style={{ width: '60%', height: '40%' }}></img>
						</Row>
						<Row className="justify-content-center">
							<span className="pr-5 pl-5 text-center">{text}</span>
						</Row>
						<Row className="justify-content-center m-5">
							<Button className="btn-warning">Les mer</Button>
						</Row>
					</Col>
				</Row>
			</Container>
		</Row>
	);
};

export default SupplierCard;
