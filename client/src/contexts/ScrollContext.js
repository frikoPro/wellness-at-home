import { createContext, useRef, useState } from 'react';

export const ScrollContext = createContext();

export const ScrollProvider = (props) => {
	const [slideShowScrollPos, setSlideShowScrollPos] = useState(0);

	const slideItem = useRef(null);

	return (
		<ScrollContext.Provider
			value={[slideShowScrollPos, setSlideShowScrollPos, slideItem]}>
			{props.children}
		</ScrollContext.Provider>
	);
};
