import { Col } from 'react-bootstrap';
import ProductCard from './ProductCard';

const ProductList = ({ products }) => {
	return products.map((item, i) => (
		<Col sm={6} lg={4} xl={3} className="mb-5" key={i}>
			<ProductCard image={item.images[0].image} {...item} />
		</Col>
	));
};

export default ProductList;
