import { useContext, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import styled from 'styled-components';
import styles from './HomePage.module.css';

import Slideshow from '../../components/Slideshow';

import { ScrollContext } from '../../contexts/ScrollContext';

import SupplierCardList from '../../components/supplierCard/SupplierCardList';

const HomePage = () => {
	const { homepageEl } = useContext(ScrollContext);

	const [homePageEl, slideshowRef] = homepageEl;

	const slideContent = [
		{
			image: 'slideimg1.png',
			textHead: 'Velkommen til Wellness at home',
			textP:
				'Nulla vitae elit libero, a pharetra augue mollis interdum.Nullavitae elit libero, a pharetra augue mollis interdum.Nulla vitae elit libero, a pharetra augue mollis interdum.',
		},
		{
			image: 'slide2.jpg',
		},
	];

	const [currentSlideImg, setCurrentSlideImg] = useState(0);

	return (
		<>
			<section>
				<div ref={slideshowRef} style={{ position: 'relative', top: '-87px' }}>
					<Slideshow
						slideContent={slideContent}
						setIndex={(index) => setCurrentSlideImg(index)}
						activeIndex={currentSlideImg}
						styling={styles}
					/>
				</div>
			</section>
			<Container fluid className="overflow-hidden">
				<section>
					<Row className="justify-content-center w-100 mx-auto m-5">
						<Div
							ref={homePageEl[0].ref}
							animate={homePageEl[0].show}
							animatePercent={homePageEl[0].percent}>
							<h2>Våre produkter</h2>
						</Div>
					</Row>
					<Row className="justify-content-center text-center mx-auto w-50 m-5">
						<Div
							right
							ref={homePageEl[1].ref}
							animate={homePageEl[1].show}
							animatePercent={homePageEl[1].percent}>
							<span>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
								enim ad minim veniam, quis nostrud exercitation ullamco laboris
								nisi ut aliquip ex ea commodo consequat.
							</span>
						</Div>
					</Row>
				</section>
				<SupplierCardList />
			</Container>
		</>
	);
};

const Div = styled.div`
	transform: translateX(
		${({ animate, right }) => (animate ? '0' : right ? '100vw' : '-100vw')}
	);
	transition: transform 2s;
	opacity: ${({ animatePercent }) =>
		animatePercent ? `${animatePercent / 100}` : `1`};
`;

export default HomePage;
