import axios from 'axios';
import { createContext, useEffect, useState } from 'react';

export const ProductsContext = createContext();

export const ProductsProvider = (props) => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		const url = 'http://localhost:8080/products';
		axios.get(url).then((response) => {
			setProducts(response.data);
		});
	}, []);

	const val = 2;

	return (
		<ProductsContext.Provider value={products}>
			{props.children}
		</ProductsContext.Provider>
	);
};