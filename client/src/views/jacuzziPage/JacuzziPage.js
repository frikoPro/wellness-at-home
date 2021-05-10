import React, { useContext, useEffect, useRef, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import ScrollDiv from '../../components/scrolldiv/ScrollDiv';
import Slideshow from '../../components/Slideshow';

import styles from './JacuzziPage.module.css';
import StarRating from '../../components/StarRating';
import UserReviewList from '../../components/UserReview/UserReviewList';
import { useHistory } from 'react-router-dom';
import { JacuzziContext } from '../../contexts/JacuzziContext';
import { ProductsContext } from '../../contexts/ProductsContext';
import TechSpec from '../../components/TechSpec';
import PriceFormatter from '../../components/PriceFormatter';
import UseForm from '../../components/webpanel/UseForm';
import { LoggedInContext } from '../../contexts/LoggedInContext';
import OrderJacuzziModal from './OrderJacuzziModal';
import { Helmet } from 'react-helmet';

const JacuzziPage = () => {
	let { id } = useParams();

	const { jacuzzis, updateData, onSuccess, errors, removeErrors } = useContext(
		JacuzziContext
	);

	const { products } = useContext(ProductsContext);

	const loggedIn = useContext(LoggedInContext);

	const [modalShow, setModalShow] = useState(false);

	const userInput = UseForm({
		initialValues: { relatedProducts: [], userReviews: [] },
	});

	const { setValues, values, removeValues } = userInput;

	let history = useHistory();

	useEffect(() => {
		const tempObj = { ...jacuzzis.find((product) => product._id === id) };

		if (Object.keys(tempObj).length > 0) {
			let productsFiltered = products.filter((item) =>
				tempObj.relatedProducts.includes(item._id)
			);

			productsFiltered = productsFiltered.map((item) => ({
				image: item.images[0].image,
				textHead: item.name,
				_id: item._id,
			}));

			tempObj.relatedProducts = productsFiltered;

			setValues(tempObj);
		}
	}, [jacuzzis, id, products]);

	useEffect(() => {
		removeErrors();
	}, [values]);

	const [activeSlideImg, setActiveSlideImg] = useState(0);

	const reviewsRef = useRef(null);

	const scrollToReview = async () => {
		const topPos =
			reviewsRef.current.getBoundingClientRect().top + window.scrollY - 87;

		window.scrollTo({ top: topPos, behavior: 'smooth' });
	};
	return values ? (
		<Container className="shadow p-5 bg-white">
			<Helmet>
				<title>{`Spabad -  ${
					values.name ? values.name.toUpperCase() : `Spabad`
				}`}</title>
			</Helmet>
			<section>
				<Row>
					<Col sm={12} className="mx-auto">
						<Slideshow
							classId="productPage"
							interval={null}
							indicators={false}
							slideContent={values.images}
							styling={styles}
							activeIndex={activeSlideImg}
							setIndex={(index) => setActiveSlideImg(index)}
						/>
					</Col>
				</Row>
				<ScrollDiv
					content={values.images}
					returnFunction={(index) => setActiveSlideImg(index)}
					size={2}
				/>
			</section>
			<section>
				<Row className="justify-content-center align-items-center p-5">
					<Col className={`text-center margin-bottom-line`}>
						<h1>{values.name ? values.name.toUpperCase() : null}</h1>
					</Col>
				</Row>
				<Row className="justify-content-between">
					<Col sm={12} lg={6} className="mx-auto p-sm-5 p-1">
						<p style={{ whiteSpace: 'pre-line' }}>{values.aboutProduct}</p>
					</Col>
					<Col sm={12} lg={6} className="text-center align-self-center">
						<h1 className="mb-3">{PriceFormatter(values.price)}</h1>
						{values.userReviews.length > 0 ? (
							<>
								<StarRating rating={values.averageRating} size={2} />
								<p
									className="mb-3 text-secondary"
									style={{ cursor: 'pointer' }}
									onClick={scrollToReview}>
									<u>
										Se anmeldelser (
										{values.userReviews !== undefined
											? values.userReviews.length
											: 0}
										)
									</u>
								</p>
							</>
						) : null}
						<Button
							className="btn-warning mb-3"
							onClick={() => setModalShow(true)}>
							Interessert? Ta kontakt
						</Button>
						<Button as={Link} to={`/Sammenlign/${id}`} className="ml-3 mb-sm-3">
							Sammenlign
						</Button>
					</Col>
				</Row>
				<OrderJacuzziModal
					show={modalShow}
					onHide={() => setModalShow(false)}
				/>
			</section>
			<div>
				<TechSpec {...userInput} />
			</div>
			{values.relatedProducts.length > 0 ? (
				<section>
					<Row className="justify-content-center align-items-center mt-5 p-5">
						<Col className={`text-left margin-bottom-line`}>
							<h1>Relatert tilbehør</h1>
						</Col>
					</Row>

					<ScrollDiv
						content={values.relatedProducts}
						size={3}
						returnFunction={(i, id) => {
							history.push(`/nettbutikk/${id}`);
						}}
					/>
				</section>
			) : null}

			{values.userReviews.length > 0 ? (
				<section ref={reviewsRef}>
					<Row className="justify-content-center align-items-center mt-5 p-5">
						<Col className={`text-left margin-bottom-line`}>
							<h1>Anmeldelser</h1>
						</Col>
					</Row>
					<UserReviewList
						userReviews={values.userReviews}
						onDelete={removeValues}
					/>
				</section>
			) : null}

			{loggedIn ? (
				<Row>
					<Col sm={1} xs={1}>
						<Button onClick={() => updateData(values)}>Lagre</Button>
					</Col>
					<Col sm={11} xs={11} className="align-self-center text-center">
						{onSuccess ? (
							<span className="text-success">{onSuccess}</span>
						) : (
							<span className="text-danger">{errors}</span>
						)}
					</Col>
				</Row>
			) : null}
		</Container>
	) : (
		<div
			style={{
				position: 'absolute',
				top: '50%',
				left: '50%',
				transform: 'translate(-50%, -50%)',
			}}>
			<h1>Finner ikke dette spabadet</h1>
		</div>
	);
};

export default JacuzziPage;
