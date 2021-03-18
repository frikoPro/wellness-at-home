import { Carousel } from 'react-bootstrap';

const Slideshow = ({
	styling,
	slideContent,
	indicators,
	activeIndex,
	setIndex,
	classId,
	interval,
}) => {
	return (
		<Carousel
			indicators={indicators}
			activeIndex={activeIndex}
			onSelect={(newIndx) => setIndex(newIndx)}
			className={`${styling.mtSlide} ${classId}`}
			interval={interval}>
			{slideContent.map((item, i) => (
				<Carousel.Item key={i}>
					<img
						src={`http://localhost:8080/${item.image}`}
						alt={`${i + 1}. slideshow`}
						className={`d-block w-100 ${styling.slideshow}`}
						style={{ opacity: '0.7' }}></img>

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

Slideshow.defaultProps = {
	slideContent: [],
};

export default Slideshow;
