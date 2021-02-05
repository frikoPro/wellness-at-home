import { Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const ProductPage = () => {
	let { id } = useParams();

	return (
		<Container>
			<Row className="justify-content-center align-items-center">
				<h1>PRODUCT PAGE {id}</h1>
			</Row>
		</Container>
	);
};

export default ProductPage;
