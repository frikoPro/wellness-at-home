import { Carousel } from 'react-bootstrap';
import slideImg1 from '../images/slideImg1.png';

const Slideshow = () => {
	return (
		<Carousel className="mt-nav">
			<Carousel.Item>
				<Carousel.Caption
					style={{
						top: '50%',
						left: '50%',
						transform: 'translate(-50%, -50%)',
						bottom: 'initial',
						width: '70vw',
					}}>
					<h1 className="text-responsive-h1 animate-fade-1">
						Velkommen til Wellness at home
					</h1>
					<p className="text-responsive-p animate-fade-2">
						Nulla vitae elit libero, a pharetra augue mollis interdum.Nulla
						vitae elit libero, a pharetra augue mollis interdum.Nulla vitae elit
						libero, a pharetra augue mollis interdum.
					</p>
				</Carousel.Caption>
				<img className="w-100" src={slideImg1} alt="First slide" />
			</Carousel.Item>
		</Carousel>
	);
};

export default Slideshow;
