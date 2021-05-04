import React, { useContext, useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import styled from 'styled-components';
import styles from './HomePage.module.css';

import Slideshow from '../../components/Slideshow';

import { ScrollContext } from '../../contexts/ScrollContext';

import SupplierCardList from '../../components/supplierCard/SupplierCardList';
import { SlideshowContext } from '../../contexts/SlideshowContext';
import {Helmet} from "react-helmet";

const HomePage = () => {
	const { homepageEl, navbar } = useContext(ScrollContext);

	const [
		homePageEl,
		slideshowRef,
		getNewPos,
		onScroll,
		removeOpacity,
	] = homepageEl;

	const { checkNavCollapsed } = navbar;

	const { slideshows } = useContext(SlideshowContext);

	const [currentSlideImg, setCurrentSlideImg] = useState(0);

	useEffect(() => {
		window.scrollTo(0, 0);

		getNewPos();

		window.onload = getNewPos;

		window.onresize = () => {
			getNewPos();
			checkNavCollapsed();
		};

		window.onscroll = onScroll;

		return () => {
			window.onload = null;
			window.onresize = checkNavCollapsed;
			window.onscroll = null;
			removeOpacity();
		};
	}, []);

	return (
		<>
			<section>
				<div
					ref={slideshowRef}
					style={{
						position: 'relative',
						top: '-87px',
						backgroundColor: 'black',
					}}>
					<Slideshow
						slideContent={slideshows}
						setIndex={(index) => setCurrentSlideImg(index)}
						activeIndex={currentSlideImg}
						styling={styles}
					/>
					<ArrowDown />
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

const ArrowDown = () => {
	const style = {
		position: 'absolute',
		opacity: '0.8',
		left: '2%',
		bottom: '5%',
		zIndex: '1',
		cursor: 'pointer',
	};

	return (
		<svg
			style={style}
			onClick={() =>
				window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })
			}
			className={`${styles.upAndDown} d-none d-lg-block`}
			xmlns="http://www.w3.org/2000/svg"
			height="5rem"
			viewBox="0 0 24 24"
			width="5rem"
			fill="#FFFFFF">
			<path d="M0 0h24v24H0V0z" fill="none" />
			<path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z" />
		</svg>
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
