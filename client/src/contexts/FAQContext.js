import axios from 'axios';
import { createContext, useEffect, useState } from 'react';

export const FAQContext = createContext();

export const FAQProvider = (props) => {
	const [FAQs, setFAQs] = useState([]);

	useEffect(() => {
		axios
			.get('http://localhost:8080/FAQ')
			.then((res) => setFAQs(res.data))
			.catch((err) => console.log(err.response.data));
	}, []);

	return (
		<FAQContext.Provider value={FAQs}>{props.children}</FAQContext.Provider>
	);
};
