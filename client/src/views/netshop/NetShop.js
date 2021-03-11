import { useContext, useState, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ProductList from '../../components/netshop/ProductList';
import { ProductsContext } from '../../contexts/ProductsContext';
import CardFilter from '../../components/netshop/CardFilter';

const NetShop = () => {
  const { products } = useContext(ProductsContext);

  const [productsState, setProducts] = useState([]);

  useEffect(() => {
    setProducts(products);
  }, [products]);

  return (
    <Container fluid className="h-100">
      <Row className="h-100">
        <Col sm={2} className="h-100 mt-5">
          <CardFilter setFilter={(filtered) => setProducts(filtered)} />
        </Col>
        <Col>
          <Row>
            <ProductList products={productsState} />
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default NetShop;
