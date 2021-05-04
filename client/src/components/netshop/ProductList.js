import { useContext } from 'react';
import { Col } from 'react-bootstrap';
import { CartContext } from '../../contexts/CartContext';
import ProductCard from './ProductCard';

const ProductList = ({ products }) => {
	const { addToCart } = useContext(CartContext);

	return products.map((item, i) => (
		<Col sm={6} lg={4} xl={3} className="mb-5" key={i}>
			<ProductCard
				image={item.images[0].image}
				item={item}
				addToCart={addToCart}
			/>
		</Col>
	));
};

export default ProductList;
