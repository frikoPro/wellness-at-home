import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PriceFormatter from '../PriceFormatter';

const ProductCard = ({ item, image, addToCart }) => {
	return (
		<Card
			as={Link}
			to={`/nettbutikk/${item._id}`}
			className="h-100 product-card">
			<Card.Body style={{ display: 'flex', flexFlow: 'column' }}>
				<Card.Img src={`/${image}`} />
				<div
					style={{
						display: 'flex',
						flexFlow: 'column',
						flexGrow: 2,
						justifyContent: 'flex-end',
					}}>
					<Card.Text style={{ fontSize: '20px' }}>{item.name}</Card.Text>
					<Card.Text className="limit-text">{item.aboutProduct}</Card.Text>
					<Card.Text className="mt-3" style={{ fontSize: '20px' }}>
						{PriceFormatter(item.price)}
					</Card.Text>
					<Button
						variant="warning"
						onClick={(e) => {
							e.preventDefault();
							addToCart(item);
						}}>
						Legg i handlevogn
					</Button>
				</div>
			</Card.Body>
		</Card>
	);
};

export default ProductCard;
