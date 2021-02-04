import { Carousel } from 'react-bootstrap';
import slideImg1 from '../images/slideImg1.png';
import slideImg2 from '../images/slide2.jpg';
import { useContext } from 'react';
import { ScrollContext } from '../contexts/ScrollContext';

const Slideshow = () => {
	const { slideshow } = useContext(ScrollContext);

	const [slideShowSCrollPos, slideItem] = slideshow;

	return (
		<Carousel className="mt-nav">
			<Carousel.Item>
				<img
					className="w-100 slideshow"
					ref={slideItem}
					src={slideImg1}
					alt="First slide slideshow"
				/>
				<Carousel.Caption>
					<h1 className="text-responsive-h1 animate-fade-1">
						Velkommen til Wellness at home
					</h1>
					<p className="text-responsive-p animate-fade-2">
						Nulla vitae elit libero, a pharetra augue mollis interdum.Nulla
						vitae elit libero, a pharetra augue mollis interdum.Nulla vitae elit
						libero, a pharetra augue mollis interdum.
					</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img
					className="w-100 slideshow"
					alt="Second slide slideshow"
					src={slideImg2}></img>
			</Carousel.Item>
		</Carousel>
	);
};

export default Slideshow;
