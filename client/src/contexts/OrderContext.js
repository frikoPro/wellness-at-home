import axios from 'axios';
import { createContext, useEffect, useState } from 'react';

export const OrderContext = createContext();

export const OrderProvider = (props) => {
	const url = 'http://localhost:8080/orders';

	const [orders, setOrders] = useState([]);
	const [errors, setErrors] = useState(null);
	const [onSuccess, setSuccess] = useState(null);

	const fetchData = () => {
		axios
			.get(url)
			.then((res) => setOrders(res.data))
			.catch((err) => console.log(err));
	};

	const deleteData = (id) => {
		const item = orders[id];
		axios
			.delete(`${url}/${item._id}`)
			.then((res) => fetchData())
			.catch((err) => console.log(err));
	};

	const postData = (data) => {
		axios
			.post(url + '/add', { ...data })
			.then((res) => setSuccess(res.data))
			.catch((err) => setErrors(err.response.data));
	};

	const returnError = (field) => {
		if (errors) {
			const index = errors.fields.findIndex((err) => err === field);

			return errors.messages[index];
		}
	};

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<OrderContext.Provider
			value={{
				data: orders,
				deleteData: deleteData,
				postData: postData,
				returnErrors: returnError,
				onSuccess: onSuccess,
				cleanUp: () => {
					setSuccess(null);
					setErrors(null);
				},
			}}>
			{props.children}
		</OrderContext.Provider>
	);
};
