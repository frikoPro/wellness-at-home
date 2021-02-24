import { useContext, useEffect, useRef, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import ScrollDiv from '../../components/scrolldiv/ScrollDiv';
import Slideshow from '../../components/Slideshow';

import styles from './JacuzziPage.module.css';
import StarRating from '../../components/StarRating';
import UserReviewList from '../../components/UserReview/UserReviewList';

import { JacuzziContext } from '../../contexts/JacuzziContext';
import { ProductsContext } from '../../contexts/ProductsContext';

const JacuzziPage = () => {
	let { id } = useParams();

	const { jacuzzis } = useContext(JacuzziContext);

	const products = useContext(ProductsContext);

	const [jacuzziPageContent, setPageContent] = useState({});

	const [averageRating, setAverageRating] = useState(0);

	useEffect(() => {
		let tempObj = jacuzzis.find((product) => product.name === id);

		if (tempObj !== undefined) {
			const newArray = [...tempObj.techSpec];
			let newArr = [];
			while (newArray.length) {
				newArr.push(newArray.splice(0, 9));
			}

			tempObj.techSpecRendered = newArr.map((arr, index) => (
				<Col sm={6} key={index}>
					<ul style={{ listStyleType: 'none' }}>
						{arr.map((item, index) => (
							<li key={index}>{item.property + ': ' + item.value}</li>
						))}
					</ul>
				</Col>
			));

			const sum = (acc, val) => acc.rating + val.rating;

			if (tempObj.userReviews.length > 0) {
				if (tempObj.userReviews.length > 1) {
					setAverageRating(
						tempObj.userReviews.reduce(sum) / tempObj.userReviews.length
					);
				} else {
					setAverageRating(tempObj.userReviews[0].rating);
				}
			}

			let productsFiltered = products.filter((item) =>
				tempObj.relatedProducts.includes(item._id)
			);

			productsFiltered = productsFiltered.map((item) => ({
				image: item.images[0].image,
				name: item.name,
			}));

			tempObj.relatedProductsRendered = productsFiltered;

			setPageContent({ ...tempObj });
		}
	}, [jacuzzis, id, products]);

	const [activeSlideImg, setActiveSlideImg] = useState(0);

	const reviewsRef = useRef(null);

	const returnPrice = () => {
		return new Intl.NumberFormat('no-NO', {
			style: 'currency',
			currency: 'NOK',
		}).format(jacuzziPageContent.price);
	};

	return (
		<Container
			className="shadow"
			style={{ backgroundColor: 'white', marginTop: '5%' }}>
			<section>
				<Row>
					<Col sm={12} className="mx-auto">
						<Slideshow
							classId="productPage"
							interval={null}
							indicators={false}
							slideContent={jacuzziPageContent.images}
							styling={styles}
							activeIndex={activeSlideImg}
							setIndex={(index) => setActiveSlideImg(index)}
						/>
					</Col>
				</Row>
				<ScrollDiv
					content={jacuzziPageContent.images}
					returnFunction={(index) => setActiveSlideImg(index)}
					size={2}
				/>
			</section>
			<section>
				<Row className="justify-content-center align-items-center p-5">
					<Col className={`text-center margin-bottom-line`}>
						<h1>{id.toUpperCase()}</h1>
					</Col>
				</Row>
				<Row className="justify-content-between">
					<Col sm={12} lg={6} className="mx-auto p-5 text-center">
						<p>{jacuzziPageContent.aboutProduct}</p>
					</Col>
					<Col sm={12} lg={6} className="text-center align-self-center">
						<h1 className="mb-3">{returnPrice()},-</h1>
						<StarRating rating={averageRating} size={2} />
						<p
							className="mb-3 text-secondary"
							style={{ cursor: 'pointer' }}
							onClick={() => reviewsRef.current.scrollIntoView(false)}>
							<u>
								Se anmeldelser (
								{jacuzziPageContent.userReviews !== undefined
									? jacuzziPageContent.userReviews.length
									: 0}
								)
							</u>
						</p>
						<Button className="btn-warning mb-sm-3">
							Interessert? Ta kontakt
						</Button>
						<Button className="ml-3 mb-sm-3">Sammenlign</Button>
					</Col>
				</Row>
			</section>
			<section>
				<Row className="justify-content-center align-items-center p-5">
					<Col className={`text-left margin-bottom-line`}>
						<h1>Tekniske spesifikasjoner</h1>
					</Col>
				</Row>
				<Row style={{ maxHeight: '200px', overflowY: 'auto' }}>
					{jacuzziPageContent.techSpecRendered}
				</Row>
			</section>
			<section>
				<Row className="justify-content-center align-items-center mt-5 p-5">
					<Col className={`text-left margin-bottom-line`}>
						<h1>Relatert tilbehør</h1>
					</Col>
				</Row>
				<ScrollDiv
					content={jacuzziPageContent.relatedProductsRendered}
					size={3}
				/>
			</section>
			<section ref={reviewsRef}>
				<Row className="justify-content-center align-items-center mt-5 p-5">
					<Col className={`text-left margin-bottom-line`}>
						<h1>Anmeldelser</h1>
					</Col>
				</Row>
				<UserReviewList userReviews={jacuzziPageContent.userReviews} />
			</section>
		</Container>
	);
};

export default JacuzziPage;
