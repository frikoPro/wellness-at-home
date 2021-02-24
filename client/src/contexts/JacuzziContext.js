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

	const returnBrands = () => {
		const unique = [...new Set(jacuzzis.map((item) => item.brand))];
		return unique;
	};

	const returnTechSpec = () => {
		const unique = [];

		jacuzzis.map((item) => {
			item.techSpec.map((tech) => {
				if (!unique.includes(tech.property)) unique.push(tech.property);
			});
		});

		return unique;
	};

	return (
		<JacuzziContext.Provider
			value={{
				jacuzzis: jacuzzis,
				brands: returnBrands(),
				techSpec: returnTechSpec(),
			}}>
			{props.children}
		</JacuzziContext.Provider>
	);
};
