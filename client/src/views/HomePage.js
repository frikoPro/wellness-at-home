import { useContext, useLayoutEffect, useRef, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import styled from 'styled-components';

import Slideshow from '../components/Slideshow';
import SupplierCard from '../components/SupplierCard';
import { ScrollContext } from '../contexts/ScrollContext';
import nordpoolCardImg from '../images/nordpoolCardImg.png';
import nordpoolLogo from '../images/nordpoolLogo.png';
import svenskaBadImg from '../images/svenskaBadImg.png';
import svenskaBadLogo from '../images/svenskaBadLogo.png';

const HomePage = () => {
	const [show, doShow] = useState([
		{
			show: false,
			percent: 0,
			position: 0,
			height: 0,
			ref: useRef(null),
		},
		{
			show: false,
			percent: 0,
			position: 0,
			height: 0,
			ref: useRef(null),
		},
		{
			show: false,
			percent: 0,
			position: 0,
			height: 0,
			ref: useRef(null),
		},
		{
			show: false,
			percent: 0,
			position: null,
			height: null,
			ref: useRef(null),
		},
	]);

	const [slideShowScrollPos, setSlideShowScrollPos, slideShowRef] = useContext(
		ScrollContext
	);

	useLayoutEffect(() => {
		const getTopPos = (element) => element.getBoundingClientRect().top;
		const getHeight = (element) => element.offsetHeight;

		const getNewPos = () => {
			const scrollY = window.scrollY;
			const scrollX = window.scrollX;

			window.scrollTo(0, 0);

			let newArray = [];

			show.forEach((item) => {
				let alteredItem = item;
				alteredItem.position = getTopPos(item.ref.current);
				alteredItem.height = getHeight(item.ref.current);

				newArray.push(alteredItem);
			});

			setSlideShowScrollPos(
				getTopPos(slideShowRef.current) + getHeight(slideShowRef.current)
			);

			doShow(newArray);

			window.scrollTo(scrollX, scrollY);

			checkElementPos();
		};

		window.onload = getNewPos;

		window.onresize = getNewPos;

		const onScroll = () => {
			checkElementPos();
		};
		window.addEventListener('scroll', onScroll);
		return () => window.removeEventListener('scroll', onScroll);
	});

	const checkElementPos = () => {
		let newArray = [];

		const scrollPos = window.scrollY + window.innerHeight;

		show.forEach((item, i) => {
			let alteredItem = item;

			if (alteredItem.position < scrollPos) {
				alteredItem.show = true;
				alteredItem.percent =
					((scrollPos - alteredItem.position) * 100) / alteredItem.height;
				if (alteredItem.percent > 100) alteredItem.percent = 100;
				if (alteredItem.percent < 0) alteredItem.percent = 0;
			} else if (alteredItem.position > scrollPos) {
				alteredItem.show = false;
			}

			newArray.push(alteredItem);
		});
		doShow(newArray);
	};

	return (
		<>
			<Slideshow slideItem={slideShowRef} />

			<Container fluid className="overflow-hidden">
				<Row className="justify-content-center w-100 mx-auto m-5">
					<Div
						ref={show[0].ref}
						animate={show[0].show}
						animatePercent={show[0].percent}>
						<h2>Våre produkter</h2>
					</Div>
				</Row>
				<Row className="justify-content-center text-center mx-auto w-50 m-5">
					<Div
						right
						ref={show[1].ref}
						animate={show[1].show}
						animatePercent={show[1].percent}>
						<span>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam, quis nostrud exercitation ullamco laboris
							nisi ut aliquip ex ea commodo consequat.
						</span>
					</Div>
				</Row>

				<Row className="justify-content-center w-100 mx-auto">
					<Div
						ref={show[2].ref}
						animate={show[2].show}
						animatePercent={show[2].percent}>
						<SupplierCard image={nordpoolCardImg} logo={nordpoolLogo} />
					</Div>
				</Row>

				<Row className="justify-content-center w-100 mx-auto">
					<Div
						right
						ref={show[3].ref}
						animate={show[3].show}
						animatePercent={show[3].percent}>
						<SupplierCard image={svenskaBadImg} logo={svenskaBadLogo} />
					</Div>
				</Row>
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
