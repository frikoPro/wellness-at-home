import { useContext, useEffect, useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useParams } from 'react-router';
import PriceFormatter from '../../components/PriceFormatter';
import TableList from '../../components/TableList';
import Slideshow from '../../components/Slideshow';
import { Link } from 'react-router-dom';
import { ProductsContext } from '../../contexts/ProductsContext';
import styles from './ProductPage.module.css';
import TechSpec from '../../components/TechSpec';
import { CartContext } from '../../contexts/CartContext';

const ProductPage = () => {
	const { id } = useParams();

	const { products } = useContext(ProductsContext);

	const { addToCart } = useContext(CartContext);

	const [product, setProduct] = useState({});

	const [addToCartRes, setResponse] = useState(null);

	const [activeSlideImg, setActiveSlideImg] = useState(0);

	const getStyledDesc = () => {
		if (window.innerWidth > 576)
			return { border: '1px solid rgb(221, 220, 220)' };
	};

	useEffect(() => {
		const productTemp = products.find((item) => item._id === id);

		setProduct(productTemp);
	}, [products]);

	const onAddToCart = () => {
		addToCart(product);
		setResponse('Produkt lagt til i handlekurven');
	};

	return product ? (
		<Container className="bg-white pb-5 pt-5 shadow">
			<section>
				<Row className="mt-0 mt-sm-5 justify-content-center">
					<Col sm={5} className="p-sm-0 mr-sm-5">
						<Slideshow
							slideContent={product.images}
							styling={styles}
							activeIndex={activeSlideImg}
							setIndex={(index) => setActiveSlideImg(index)}
						/>
					</Col>
					<Col
						sm={5}
						className={window.innerWidth > 576 ? 'shadow p-4' : 'p-4'}
						style={getStyledDesc()}>
						<h3 className="text-center">{product.name}</h3>

						<p className="mt-5" style={{ whiteSpace: 'pre-line' }}>
							{product.aboutProduct}
						</p>

						<h3 className="mt-5">{PriceFormatter(product.price)}</h3>
						<div className="mt-5">
							<Button className="btn-warning" onClick={onAddToCart}>
								Legg i handlevogn
							</Button>
							{addToCartRes ? (
								<>
									<div className="text-success">{addToCartRes}</div>
									<Button variant="success" as={Link} to="/handlekurv">
										Se handlevogn
									</Button>
								</>
							) : null}
						</div>
					</Col>
				</Row>
			</section>

			<section>
				<Row className="justify-content-center align-items-center p-5">
					<Col className={`text-left margin-bottom-line`}>
						<h1>Kompatibel med disse badene</h1>
					</Col>
				</Row>
				<Row className="justify-content-center">
					<Col sm={11}>
						<TableList
							values={product.affiliation || []}
							removeValue={() => console.log('test')}
							name="affiliation"
						/>
					</Col>
				</Row>
			</section>
			<TechSpec techSpec={product.techSpec} />
		</Container>
	) : (
		<div
			style={{
				position: 'absolute',
				top: '50%',
				left: '50%',
				transform: 'translate(-50%, -50%)',
			}}>
			<h1>finner ikke dette produktet</h1>
		</div>
	);
};

export default ProductPage;
