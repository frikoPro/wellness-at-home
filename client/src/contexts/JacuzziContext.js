import axios from 'axios';
import { createContext, useEffect, useState } from 'react';

export const JacuzziContext = createContext();

export const JacuzziProvider = (props) => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		const url = 'http://localhost:8080/products';
		axios.get(url).then((response) => {
			console.log('axios: ', response.data);
			setProducts(response.data);
		});
	}, []);

	const getProductByName = (name) => {
		return products.find((product) => product.name === name);
	};

	const val = 2;

	return (
		<JacuzziContext.Provider value={getProductByName}>
			{props.children}
		</JacuzziContext.Provider>
	);
};
