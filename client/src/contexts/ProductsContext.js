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

	const returnCategories = () => {
		const unique = [];

		products.map((item) => {
			if (!unique.includes(item.category) && item.category !== undefined)
				unique.push(item.category);
		});

		return unique;
	};

	const returnTechSpec = () => {
		const unique = [];

		products.map((item) => {
			item.techSpec.map((tech) => {
				if (!unique.includes(tech.property)) unique.push(tech.property);
			});
		});

		return unique;
	};

	return (
		<ProductsContext.Provider
			value={{
				products: products,
				categories: returnCategories(),
				techSpec: returnTechSpec(),
			}}>
			{props.children}
		</ProductsContext.Provider>
	);
};
