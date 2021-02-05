import { useContext } from 'react';
import { Container, Row } from 'react-bootstrap';
import styled from 'styled-components';
import './HomePage.css';

import Slideshow from '../components/Slideshow';
import SupplierCard from '../components/SupplierCard';
import { ScrollContext } from '../contexts/ScrollContext';
import nordpoolCardImg from '../images/nordpoolCardImg.png';
import nordpoolLogo from '../images/nordpoolLogo.png';
import svenskaBadImg from '../images/svenskaBadImg.png';
import svenskaBadLogo from '../images/svenskaBadLogo.png';

const HomePage = () => {
	const { homepageEl } = useContext(ScrollContext);

	const [homePageEl, slideshowRef] = homepageEl;

	return (
		<>
			<div ref={slideshowRef} style={{ position: 'relative', top: '-58px' }}>
				<Slideshow />
			</div>
			<Container fluid className="overflow-hidden">
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

				<Row className="justify-content-center w-100 mx-auto">
					<Div
						ref={homePageEl[2].ref}
						animate={homePageEl[2].show}
						animatePercent={homePageEl[2].percent}>
						<SupplierCard image={nordpoolCardImg} logo={nordpoolLogo} />
					</Div>
				</Row>

				<Row className="justify-content-center w-100 mx-auto">
					<Div
						right
						ref={homePageEl[3].ref}
						animate={homePageEl[3].show}
						animatePercent={homePageEl[3].percent}>
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
