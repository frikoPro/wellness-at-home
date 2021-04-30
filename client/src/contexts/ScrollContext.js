import { createContext, useRef, useState } from 'react';

export const ScrollContext = createContext();

export const ScrollProvider = (props) => {
	// Bottom position of slideshow Y-axis

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
		{
			show: false,
			percent: 0,
			position: null,
			height: null,
			ref: useRef(null),
		},
	]);

	//Opacity value for homepage
	const [opacity, setOpacity] = useState(1);

	const isNavCollapsed = window.innerWidth < 992 ? true : false;

	const slideshowRef = useRef(null);

	const getTopPos = (element) => element.getBoundingClientRect().top;

	const getHeight = (element) => element.offsetHeight;

	const getNewPos = () => {
		const scrollY = window.scrollY;

		let newArray = [];

		homePageEl.forEach((item) => {
			let alteredItem = item;
			alteredItem.position = getTopPos(item.ref.current);
			alteredItem.height = getHeight(item.ref.current);

			newArray.push(alteredItem);
		});

		const height = getHeight(slideshowRef.current);

		console.log(scrollY / height);
		setOpacity(scrollY / height);

		setHomePageEl(newArray);

		checkElementPos();
	};

	const onScroll = () => {
		getNewPos();
		checkElementPos();
	};

	const removeOpacity = () => {
		setOpacity(1);
	};

	const checkElementPos = () => {
		let newArray = [];

		const scrollPos = window.scrollY + window.innerHeight;

		homePageEl.forEach((item) => {
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
				homepageEl: [
					homePageEl,
					slideshowRef,
					getNewPos,
					onScroll,
					removeOpacity,
				],
				navbar: { opacity: opacity, navCollapsed: isNavCollapsed },
			}}>
			{props.children}
		</ScrollContext.Provider>
	);
};
