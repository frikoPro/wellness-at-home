import { createContext, useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';

export const ScrollContext = createContext();

export const ScrollProvider = (props) => {
	// Bottom position of slideshow Y-axis
	const [slideShowScrollPos, setSlideShowScrollPos] = useState(0);

	//Positon of elements on homepage
	const [homePageEl, setHomePageEl] = useState([
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

	//Opacity value for homepage
	const [opacity, setOpacity] = useState(0);

	const [isNavCollapsed, setCollapse] = useState(false);

	const slideshowRef = useRef(null);

	const location = useLocation();

	useEffect(() => {
		const getTopPos = (element) => element.getBoundingClientRect().top;
		const getHeight = (element) => element.offsetHeight;

		const getNewPos = () => {
			const scrollY = window.scrollY;
			const scrollX = window.scrollX;

			window.scrollTo(0, 0);

			let newArray = [];

			homePageEl.forEach((item) => {
				let alteredItem = item;
				alteredItem.position = getTopPos(item.ref.current);
				alteredItem.height = getHeight(item.ref.current);

				newArray.push(alteredItem);
			});

			setSlideShowScrollPos(
				getTopPos(slideshowRef.current) + getHeight(slideshowRef.current)
			);

			setHomePageEl(newArray);

			window.scrollTo(scrollX, scrollY);

			checkElementPos();

			setCollapse(window.innerWidth < 992 ? true : false);
		};

		if (location.pathname === '/') {
			window.onload = getNewPos;

			window.onresize = getNewPos;

			const onScroll = () => {
				setOpacity(window.scrollY / slideShowScrollPos);
				checkElementPos();
			};
			window.addEventListener('scroll', onScroll);
			return () => window.removeEventListener('scroll', onScroll);
		} else {
			setOpacity(1);
		}
	});

	const checkElementPos = () => {
		let newArray = [];

		const scrollPos = window.scrollY + window.innerHeight;

		homePageEl.forEach((item, i) => {
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
		setHomePageEl(newArray);
	};

	return (
		<ScrollContext.Provider
			value={{
				homepageEl: [homePageEl, slideshowRef],
				navbar: [opacity, isNavCollapsed],
			}}>
			{props.children}
		</ScrollContext.Provider>
	);
};
