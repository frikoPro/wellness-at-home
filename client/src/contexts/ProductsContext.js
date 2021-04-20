import axios from 'axios';
import { createContext, useEffect, useState } from 'react';

export const ProductsContext = createContext();

export const ProductsProvider = (props) => {
	const [products, setProducts] = useState([]);

	const [cart, setCart] = useState([]);

	useEffect(() => {
		const url = 'http://localhost:8080/products';
		axios.get(url).then((response) => {
			setProducts(response.data);
		});

		const ids = JSON.parse(localStorage.getItem('shoppedItems'));

		if (ids) setCart(ids);
	}, []);

	const returnCategories = () => {
		const unique = [];

		products.forEach((item) => {
			if (!unique.includes(item.category) && item.category !== undefined)
				unique.push(item.category);
		});

		return unique;
	};

	const returnTechSpec = () => {
		const unique = [];

		products.forEach((item) => {
			item.techSpec.forEach((tech) => {
				if (!unique.includes(tech.property)) unique.push(tech.property);
			});
		});

		return unique;
	};

	const addToCart = (item) => {
		const index = cart.findIndex((el) => el._id === item._id);
		console.log(index);

		if (index === -1) {
			item.qty = 1;
			setCart([...cart, item]);

			localStorage.setItem('shoppedItems', JSON.stringify([...cart, item]));
		} else {
			let items = cart;

			items[index].qty = items[index].qty + 1;

			setCart([...items]);

			localStorage.setItem('shoppedItems', JSON.stringify([...items]));
		}
	};

	const updateCart = (items) => {
		setCart([...items]);
		localStorage.setItem('shoppedItems', JSON.stringify([...items]));
	};

	return (
		<ProductsContext.Provider
			value={{
				products: products,
				categories: returnCategories(),
				techSpec: returnTechSpec(),
				cart: cart,
				addToCart: (item) => addToCart(item),
				updateCart: (items) => updateCart(items),
			}}>
			{props.children}
		</ProductsContext.Provider>
	);
};
