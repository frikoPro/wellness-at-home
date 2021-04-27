import { useEffect, useRef } from 'react';
import { Row, Col } from 'react-bootstrap';
import styles from './ScrollDiv.module.css';

const ScrollDiv = ({ content, returnFunction, size }) => {
	const imgScroll = {
		leftArrow: useRef(null),
		scrollDiv: useRef(null),
		rightArrow: useRef(null),
		scrollElement: useRef(null),
	};

	const returnEmptyDivs = () => {
		let array = [];

		for (var i = 0; i < Math.floor(content.length % (12 / size)); i++) {
			array.push(<Col key={i} sm={size}></Col>);
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

	useEffect(() => {
		if (content.length > 12 / size) {
			imgScroll.scrollElement.current.className += ' ' + styles.scrollDiv;
		}
	}, [content, size]);

	return (
		<Row
			className={`mt-5 m-3 align-items-center justify-content-center`}
			ref={imgScroll.scrollElement}>
			<Col sm={1} className="productPage">
				<span
					ref={imgScroll.leftArrow}
					className={`${styles.leftArrow} carousel-control-prev-icon`}
					onClick={() => scroll('left')}></span>
			</Col>

			<Col
				sm={8}
				ref={imgScroll.scrollDiv}
				style={{
					display: 'flex',
					overflowX: 'auto',
					scrollBehavior: 'smooth',
				}}
				className="scrolled-div p-0">
				{content.map((item, index) => (
					<Col
						xs={size * 2}
						sm={size * 2}
						md={size * 1.5}
						lg={size}
						style={{ cursor: 'pointer' }}
						className="align-self-center"
						key={index}
						onClick={() => returnFunction(index, item._id)}>
						<img src={`/${item.image}`} alt={index} className="w-100"></img>
						{'textHead' in item ? (
							<p className="text-center mt-2">{item.textHead}</p>
						) : null}
					</Col>
				))}
				{returnEmptyDivs().map((item) => item)}
			</Col>

			<Col sm={1} className="productPage text-right">
				<span
					ref={imgScroll.rightArrow}
					className={`${styles.rightArrow} carousel-control-next-icon`}
					onClick={() => scroll('right')}></span>
			</Col>
		</Row>
	);
};

ScrollDiv.defaultProps = {
	returnFunction: () => {},
	content: [],
};
export default ScrollDiv;
