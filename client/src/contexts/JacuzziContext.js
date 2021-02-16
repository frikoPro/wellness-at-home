import axios from 'axios';
import { createContext, useEffect, useState } from 'react';

export const JacuzziContext = createContext();

export const JacuzziProvider = (props) => {
	const [jacuzzis, setJacuzzis] = useState([]);

	useEffect(() => {
		const url = 'http://localhost:8080/jacuzzis';
		axios.get(url).then((response) => {
			setJacuzzis(response.data);
		});
	}, []);

	return (
		<JacuzziContext.Provider value={jacuzzis}>
			{props.children}
		</JacuzziContext.Provider>
	);
};
