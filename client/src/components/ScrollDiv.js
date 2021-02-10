import { useRef } from 'react';
import { Row, Col } from 'react-bootstrap';

const ScrollDiv = ({ content, returnFunction, size }) => {
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

		for (var i = 0; i < Math.floor(content.length / (12 / size)); i++) {
			array.push(<Col sm={size}></Col>);
		}

		return array;
	};

	const scroll = (direction) => {
		const scrollWidth = imgScroll.scrollDiv.current.scrollWidth - 1;
		var scrollPos = imgScroll.scrollDiv.current.scrollLeft;

		const oneScrollMove = imgScroll.scrollDiv.current.offsetWidth;

		if (direction === 'left') {
			if (scrollPos === 0) {
				scrollPos = scrollWidth - oneScrollMove;
			} else if (scrollPos - oneScrollMove < 0) {
				scrollPos = 0;
			} else {
				scrollPos -= oneScrollMove;
			}
		} else {
			if (scrollPos + oneScrollMove >= scrollWidth) {
				scrollPos = 0;
			} else {
				imgScroll.scrollDiv.current.scrollLeft += oneScrollMove + 1;
			}
		}
		imgScroll.scrollDiv.current.scrollLeft = scrollPos;
	};

	return (
		<Row
			onMouseOver={() => onHoverSrollImgDiv('inline-block')}
			onMouseOut={() => onHoverSrollImgDiv('none')}
			className="mt-5 m-3 align-items-center justify-content-center">
			<Col sm={2} className="productPage d-none d-xl-flex">
				<span
					ref={imgScroll.leftArrow}
					className="carousel-control-prev-icon mx-auto"
					onClick={() => scroll('left')}></span>
			</Col>

			<Col
				ref={imgScroll.scrollDiv}
				style={{
					display: 'flex',
					overflowX: 'auto',
					scrollBehavior: 'smooth',
				}}
				className="mx-auto scrolled-div p-0">
				{content.map((item, index) => (
					<Col
						xs={size * 2}
						sm={size}
						className="align-self-center"
						onClick={() => returnFunction(index)}>
						<img src={item.image} alt={index} className="w-100"></img>
						{'name' in item ? (
							<p className="text-center mt-2">{item.name}</p>
						) : (
							<p></p>
						)}
					</Col>
				))}
				{returnEmptyDivs().map((item) => item)}
			</Col>

			<Col sm={2} className="productPage d-none d-xl-flex">
				<span
					ref={imgScroll.rightArrow}
					className="carousel-control-next-icon mx-auto"
					onClick={() => scroll('right')}></span>
			</Col>
		</Row>
	);
};

ScrollDiv.defaultProps = {
	returnFunction: () => {},
};
export default ScrollDiv;
