import { createContext, useEffect, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = (props) => {
	const [cart, setCart] = useState([]);

	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = () => {
		const ids = JSON.parse(localStorage.getItem('shoppedItems'));

		if (ids) setCart(ids);
	};

	const addToCart = (item) => {
		const index = cart.findIndex((el) => el._id === item._id);

		if (index === -1) {
			item.qty = 1;

			localStorage.setItem('shoppedItems', JSON.stringify([...cart, item]));
		} else {
			let items = cart;

			items[index].qty = items[index].qty + 1;

			localStorage.setItem('shoppedItems', JSON.stringify([...items]));
		}

		fetchData();
	};

	const updateCart = (items) => {
		localStorage.setItem('shoppedItems', JSON.stringify([...items]));
		fetchData();
	};

	const getTotalPrice = () => {
		const price = cart.map((item) => item.qty * item.price);

		if (price.length > 0) {
			const totalPrice = price.reduce((acc, val) => acc + val);
			return totalPrice;
		}
	};

	return (
		<CartContext.Provider
			value={{
				cart: cart,
				updateCart: updateCart,
				totalPrice: getTotalPrice(),
				addToCart: addToCart,
			}}>
			{props.children}
		</CartContext.Provider>
	);
};
