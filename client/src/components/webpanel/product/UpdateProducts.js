import { Container, Row, Col } from 'react-bootstrap';
import { ProductsContext } from '../../../contexts/ProductsContext';
import { useContext, useEffect, useState } from 'react';
import ProductList from './ProductList';

const UpdateProducts = () => {
  const { products } = useContext(ProductsContext);

  const [productsState, setProductsState] = useState(products || []);

  useEffect(() => {
    setProductsState(products);
  }, [products]);

  const filterProducts = (name) => {
    const items = products.filter((item) =>
      item.name.toLowerCase().includes(name.toLowerCase())
    );

    setProductsState(items);
  };

  return (
    <Container>
      <Row className="mb-5 mt-5">
        <Col sm={4}>
          <input
            placeholder="Søk navn"
            onChange={(e) => filterProducts(e.target.value)}
            className="form-control"
          />
        </Col>
      </Row>
      <Row>
        <ProductList products={productsState} />
      </Row>
    </Container>
  );
};

export default UpdateProducts;
