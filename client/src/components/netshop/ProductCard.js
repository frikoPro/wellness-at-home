import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PriceFormatter from '../PriceFormatter';

const ProductCard = ({ image, name, price, _id }) => {
	return (
		<Card className="product-card" as={Link} to={`/nettbutikk/${_id}`}>
			<Card.Body>
				<Card.Img src={`/${image}`} />
				<Card.Title className="mt-3">{name}</Card.Title>
				<Card.Text className="mt-3" style={{ fontSize: '20px' }}>
					{PriceFormatter(price)}
				</Card.Text>
			</Card.Body>
		</Card>
	);
};

export default ProductCard;
