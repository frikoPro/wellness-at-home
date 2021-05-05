import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PriceFormatter from '../PriceFormatter';

const ProductCard = ({ item, image, addToCart }) => {
	return (
		<Card
			as={Link}
			to={`/nettbutikk/${item._id}`}
			style={{ border: 0 }}
			className="h-100 product-card">
			<Card.Body style={{ display: 'flex', flexFlow: 'column' }}>
				<Card.Img src={`/${image}`} />
				<div
					style={{
						display: 'flex',
						flexFlow: 'column',
						flexGrow: 2,
						justifyContent: 'flex-end',
						color: "black",
					}}>
					<Card.Text style={{ fontSize: '20px' }}>{item.name}</Card.Text>
					<Card.Text>
						{item.aboutProduct.length > 100
							? item.aboutProduct.substring(0, 100) + '...'
							: item.aboutProduct}
					</Card.Text>
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
