import { Carousel } from 'react-bootstrap';

const Slideshow = ({ styling, slideContent, id }) => {
	return (
		<Carousel id={id} className={styling.mtSlide}>
			{slideContent.map((item, i) => (
				<Carousel.Item key={i}>
					<img
						src={item.image}
						alt={`${i + 1}. slideshow`}
						className={`d-block w-100 ${styling.slideshow}`}></img>
					<Carousel.Caption>
						<h1
							className={`${styling.textResponsiveH1} ${styling.animateFade1}`}>
							{item.textHead}
						</h1>
						<p className={`${styling.textResponsiveP} ${styling.animateFade2}`}>
							{item.textP}
						</p>
					</Carousel.Caption>
				</Carousel.Item>
			))}
		</Carousel>
	);
};

export default Slideshow;
