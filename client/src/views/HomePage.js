import { useLayoutEffect, useRef } from 'react';
import { Container, Row } from 'react-bootstrap';
import Slideshow from '../components/Slideshow';
import SupplierCard from '../components/SupplierCard';
import nordpoolCardImg from '../images/nordpoolCardImg.png';
import nordpoolLogo from '../images/nordpoolLogo.png';
import svenskaBadImg from '../images/svenskaBadImg.png';
import svenskaBadLogo from '../images/svenskaBadLogo.png';

const HomePage = () => {
	const ourProductsTitle = useRef(null);

	useLayoutEffect(() => {
		const positionProductTitle = ourProductsTitle.current.getBoundingClientRect()
			.bottom;

		const onScroll = () => {
			if (window.scrollY >= positionProductTitle) {
				console.log('trigger action!');
			}

			console.log(window.scrollY + window.screen.height);
			console.log(positionProductTitle);
		};
		window.addEventListener('scroll', onScroll);
		return () => window.removeEventListener('scroll', onScroll);
	}, []);

	return (
		<>
			<Slideshow />
			<Container className="justify-content-center">
				<Row ref={ourProductsTitle} className="justify-content-center m-5">
					<h2>Våre produkter</h2>
				</Row>

				<Row className="justify-content-center text-center m-5">
					<span style={{ width: '75%' }}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat.
					</span>
				</Row>

				<Row className="m-1">
					<SupplierCard image={nordpoolCardImg} logo={nordpoolLogo} />
				</Row>

				<Row className="m-1">
					<SupplierCard image={svenskaBadImg} logo={svenskaBadLogo} />
				</Row>
			</Container>
		</>
	);
};

export default HomePage;
