import axios from 'axios';
import { createContext, useEffect, useState } from 'react';

export const SlideshowContext = createContext();

export const SlideshowProvider = (props) => {
	const [slideshows, setSlideshows] = useState([]);

	useEffect(() => {
		axios
			.get('http://localhost:8080/slideshow')
			.then((res) => setSlideshows(res.data))
			.catch((err) => console.log(err.response.data));
	}, []);

	return (
		<SlideshowContext.Provider value={slideshows}>
			{props.children}
		</SlideshowContext.Provider>
	);
};
