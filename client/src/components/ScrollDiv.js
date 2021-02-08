import { useRef } from 'react';
import { Row, Col } from 'react-bootstrap';

const ScrollDiv = ({ content, returnFunction }) => {
	const imgScroll = {
		leftArrow: useRef(null),
		scrollDiv: useRef(null),
		rightArrow: useRef(null),
	};

	const onHoverSrollImgDiv = (display) => {
		imgScroll.leftArrow.current.style.display = display;
		imgScroll.rightArrow.current.style.display = display;
	};

	const returnEmptyDivs = () => {
		let array = [];

		for (var i = 0; i < Math.abs((content.length % 5) - 5); i++) {
			array.push(
				<div
					style={{
						padding: '10%',
					}}></div>
			);
		}

		return array;
	};

	const scroll = (direction) => {
		const scrollWidth = imgScroll.scrollDiv.current.scrollWidth;
		const scrollLeft = imgScroll.scrollDiv.current.scrollLeft;
		const numberOfSlides = Math.ceil(content.length / 5);

		const oneScrollMove = scrollWidth / numberOfSlides;

		if (direction === 'left') {
			if (scrollLeft - oneScrollMove < 0) {
				imgScroll.scrollDiv.current.scrollLeft = scrollWidth - oneScrollMove;
			} else {
				imgScroll.scrollDiv.current.scrollLeft -= oneScrollMove;
			}
		} else {
			if (scrollLeft + oneScrollMove >= scrollWidth) {
				imgScroll.scrollDiv.current.scrollLeft = 0;
			} else {
				imgScroll.scrollDiv.current.scrollLeft += oneScrollMove;
			}
		}
	};

	return (
		<Row
			xl={2}
			onMouseOver={() => onHoverSrollImgDiv('inline-block')}
			onMouseOut={() => onHoverSrollImgDiv('none')}
			className="mt-5 d-none d-sm-flex">
			<Col xs={1} xl={2} className="productPage">
				<span
					ref={imgScroll.leftArrow}
					className="carousel-control-prev-icon"
					style={{
						display: 'none',
						position: 'relative',
						left: '50%',
						top: '50%',
						transform: 'translate(-50%, -50%)',
					}}
					onClick={() => scroll('left')}></span>
			</Col>

			<Col
				ref={imgScroll.scrollDiv}
				style={{
					display: 'flex',
					overflowX: 'auto',
					flexWrap: 'nowrap',
					width: '100%',
					scrollBehavior: 'smooth',
				}}
				className="mx-auto scrolled-div p-0">
				{content.map((item, index) => (
					<img
						src={item.image}
						style={{
							width: '19%',
							marginRight: '1%',
						}}
						alt={index}
						onClick={() => returnFunction(index)}
						className="my-auto"></img>
				))}
				{returnEmptyDivs().map((item) => item)}
			</Col>

			<Col xs={1} xl={2} className="productPage">
				<span
					ref={imgScroll.rightArrow}
					className="carousel-control-next-icon"
					style={{
						display: 'none',

						position: 'relative',
						left: '50%',
						top: '50%',
						transform: 'translate(-50%, -50%)',
					}}
					onClick={() => scroll('right')}></span>
			</Col>
		</Row>
	);
};

export default ScrollDiv;
