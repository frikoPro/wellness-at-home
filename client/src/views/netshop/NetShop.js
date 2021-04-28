import { useContext, useState, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ProductList from '../../components/netshop/ProductList';
import { ProductsContext } from '../../contexts/ProductsContext';
import CardFilter from '../../components/netshop/CardFilter';
import { Route, Switch } from 'react-router-dom';
import ProductPage from '../productPage/ProductPage';

const NetShop = ({ match }) => {
	const { products } = useContext(ProductsContext);

	const [productsState, setProducts] = useState([]);

	useEffect(() => {
		setProducts(products);
	}, [products]);

	return (
		<Switch>
			<Route exact path={match.url}>
				<Container fluid className="h-100">
					<Row className="h-100">
						<Col sm={{ offset: 2, span: 10 }}>
							<h1>Tilbehør</h1>
						</Col>
						<Col sm={2} className="h-100 mb-5 mb-sm-0">
							<CardFilter setFilter={(filtered) => setProducts(filtered)} />
						</Col>
						<Col>
							<Row>
								<ProductList products={productsState} />
							</Row>
						</Col>
					</Row>
				</Container>
			</Route>
			<Route path={`${match.url}/:id`}>
				<ProductPage />
			</Route>
		</Switch>
	);
};

export default NetShop;
