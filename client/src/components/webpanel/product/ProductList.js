import { Col } from 'react-bootstrap';
import ProductCard from './ProductCard';

const ProductList = ({ products }) => {
  return products.map((item, i) => (
    <Col key={i} sm={4}>
      <ProductCard product={item} />
    </Col>
  ));
};

export default ProductList;
