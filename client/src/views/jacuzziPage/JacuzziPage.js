import { useContext, useEffect, useRef, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import ScrollDiv from '../../components/ScrollDiv';
import Slideshow from '../../components/Slideshow';

import styles from './JacuzziPage.module.css';
import StarRating from '../../components/StarRating';
import UserReviewList from '../../components/UserReview/UserReviewList';

import { JacuzziContext } from '../../contexts/JacuzziContext';

const JacuzziPage = () => {
	let { id } = useParams();

	const products = useContext(JacuzziContext);

	const [jacuzziPageContent, setPageContent] = useState({});

	const [averageRating, setAverageRating] = useState(0);

	useEffect(() => {
		let tempObj = products.find((product) => product.name === id);

		if (tempObj !== undefined) {
			const renderTechSpec = () => {
				let newArray = [];

				while (tempObj.techSpec.length) {
					newArray.push(tempObj.techSpec.splice(0, 9));
				}

				tempObj.techSpec = newArray.map((arr, index) => (
					<Col sm={6} key={index}>
						<ul style={{ listStyleType: 'none' }}>
							{arr.map((item, index) => (
								<li key={index}>{item}</li>
							))}
						</ul>
					</Col>
				));
			};

			const sum = (acc, val) => acc.rating + val.rating;

			if (tempObj.userReviews.length > 1) {
				setAverageRating(
					tempObj.userReviews.reduce(sum) / tempObj.userReviews.length
				);
			} else {
				setAverageRating(tempObj.userReviews[0].rating);
			}

			renderTechSpec();
			setPageContent({ ...tempObj });
		}
	}, [products, id]);

	const [activeSlideImg, setActiveSlideImg] = useState(0);

	const reviewsRef = useRef(null);

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
					styles={styles}
					returnFunction={(index) => setActiveSlideImg(index)}
					size={2}
				/>
			</section>
			<section>
				<Row className="justify-content-center align-items-center p-5">
					<Col className={`text-center ${styles.marginBottomLine}`}>
						<h1>{id.toUpperCase()}</h1>
					</Col>
				</Row>
				<Row className="justify-content-between">
					<Col sm={12} lg={6} className="mx-auto p-5 text-center">
						<p>{jacuzziPageContent.aboutProduct}</p>
					</Col>
					<Col sm={12} lg={6} className="text-center align-self-center">
						<h1 className="mb-3">{jacuzziPageContent.price},-</h1>
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
					<Col className={`text-left ${styles.marginBottomLine}`}>
						<h1>Tekniske spesifikasjoner</h1>
					</Col>
				</Row>
				<Row style={{ height: '100%', overflowY: 'auto' }}>
					{jacuzziPageContent.techSpec}
				</Row>
			</section>
			<section>
				<Row className="justify-content-center align-items-center mt-5 p-5">
					<Col className={`text-left ${styles.marginBottomLine}`}>
						<h1>Relatert tilbehør</h1>
					</Col>
				</Row>

				<ScrollDiv
					content={jacuzziPageContent.relatedProducts}
					styles={styles}
					size={3}
				/>
			</section>
			<section ref={reviewsRef}>
				<Row className="justify-content-center align-items-center mt-5 p-5">
					<Col className={`text-left ${styles.marginBottomLine}`}>
						<h1>Anmeldelser</h1>
					</Col>
				</Row>
				<UserReviewList userReviews={jacuzziPageContent.userReviews} />
			</section>
		</Container>
	);
};

export default JacuzziPage;
