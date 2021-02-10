import { useRef, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import ScrollDiv from '../../components/ScrollDiv';
import Slideshow from '../../components/Slideshow';
import sarekImg1 from '../../images/sarekimg1.png';
import sarekimg2 from '../../images/sarekimg2.png';
import styles from './ProductPage.module.css';
import StarRating from '../../components/StarRating';
import UserReviewList from '../../components/UserReview/UserReviewList';

const ProductPage = () => {
	let { id } = useParams();

	const productPageContent = {
		images: [
			{
				image: sarekImg1,
				textHead: '',
				textP: '',
			},
			{ image: sarekimg2, textHead: '', textP: '' },
		],

		aboutProduct:
			'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.Neque porro quisquamest, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
		price: '56 059,-',
		techSpec: [
			'Størrelse: 200 x 200 x 95cm',
			'Antall plasser: 5, hvorav 2 liggeplasser',
			'Vannkapasitet: 1400 liter',
			'Vekt: 300 kg',
			'Elektriske krav: 230 V eller 400 V / 50 Hz',
			'Kontrollsystem: Gecko In.Ye-3 + K500 fargedisplay',
			'Varmekolbe: Gecko 3 kW',
			'Pumper: 1 stk Jet pumpe, 1 stk Sirkulasjonspumpe',
			'Massasjedyser: 31 stk Rustfrie dyser',
			'Filtreringsystem: Elementfiltrering',
			'Ozonrensing: Ja, XL60',
			'Belysning: Reflekterende LED og Fiberoptisk LED slynge, 20 LED',
			'Akryloverflate: Lucite',
			'Utvendig bekledning: Brun',
			'Isolering: 3 lags + Luftspalte',
			'Farge innvendig: Hvit',
			'Strømtilkobling minimum: 16Amp, 1-fas, 230V',
			'Strømtilkobling Optimalt/Anbefalt: 25Amp, 1-fas, 230',
		],
		relatedProducts: [{ image: sarekImg1, name: 'test' }],
		userReviews: [
			{
				rating: 4,
				author: 'Anonym',
				date: '02.05.20',
				header: 'Meget fornøyd, anbefales!',
				text:
					'Commodo dolor irure ipsum duis in ea nostrud. Dolor incididunt fugiat veniam ullamco eu ad dolore. Ullamco ea consequat adipisicing fugiat. Consequat non consequat est Lorem laboris fugiat est culpa id consectetur. Incididunt amet proident magna excepteur est consequat ipsum in ad quis officia minim.',
			},
			{
				rating: 4,
				author: 'Per kristian Hansen',
				date: '02.01.20',
				header: 'Meget fornøyd, anbefales!',
				text:
					'Commodo dolor irure ipsum duis in ea nostrud. Dolor incididunt fugiat veniam ullamco eu ad dolore. Ullamco ea consequat adipisicing fugiat. Consequat non consequat est Lorem laboris fugiat est culpa id consectetur. Incididunt amet proident magna excepteur est consequat ipsum in ad quis officia minim.',
			},
		],
	};

	const [activeSlideImg, setActiveSlideImg] = useState(0);

	const reviewsRef = useRef(null);

	const renderTechSpec = () => {
		var array = productPageContent.techSpec;

		let newArray = [];

		while (array.length) {
			newArray.push(array.splice(0, 9));
		}

		array = newArray.map((arr, index) => (
			<Col sm={6} key={index}>
				<ul style={{ listStyleType: 'none' }}>
					{arr.map((item, index) => (
						<li key={index}>{item}</li>
					))}
				</ul>
			</Col>
		));

		return array;
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
							slideContent={productPageContent.images}
							styling={styles}
							activeIndex={activeSlideImg}
							setIndex={(index) => setActiveSlideImg(index)}
						/>
					</Col>
				</Row>
				<ScrollDiv
					content={productPageContent.images}
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
						<p>{productPageContent.aboutProduct}</p>
					</Col>
					<Col sm={12} lg={6} className="text-center align-self-center">
						<h1 className="mb-3">{productPageContent.price}</h1>
						<StarRating rating={4} size={2} />
						<p
							className="mb-3 text-secondary"
							onClick={() => reviewsRef.current.scrollIntoView()}>
							<u>Se anmeldelser ({productPageContent.userReviews.length})</u>
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
					{renderTechSpec()}
				</Row>
			</section>
			<section>
				<Row className="justify-content-center align-items-center mt-5 p-5">
					<Col className={`text-left ${styles.marginBottomLine}`}>
						<h1>Relatert tilbehør</h1>
					</Col>
				</Row>

				<ScrollDiv
					content={productPageContent.relatedProducts}
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
				<UserReviewList userReviews={productPageContent.userReviews} />
			</section>
		</Container>
	);
};

export default ProductPage;
