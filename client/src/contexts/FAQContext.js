import axios from 'axios';
import { createContext, useEffect, useState } from 'react';

export const FAQContext = createContext();

export const FAQProvider = (props) => {
	const [FAQs, setFAQs] = useState([]);
	const [errors, setErrors] = useState(null);
	const [success, setSuccess] = useState(null);

	const url = '/FAQ';

	useEffect(() => {
		setSuccess(null);
	}, [success]);

	const fetchData = () => {
		axios
			.get(url)
			.then((res) => setFAQs(res.data))
			.catch((err) => console.log(err.response.data));
	};

	useEffect(() => {
		fetchData();
	}, []);

	const postData = (item) => {
		axios
			.post(url + '/add', item)
			.then((res) => okResponse(res))
			.catch((err) => setErrors(err.response.data));
	};

	const deleteData = (id) => {
		axios
			.delete(url + `/${id}`)
			.then((res) => okResponse(res))
			.catch((err) => setErrors(err.response.data));
	};

	const updateData = (item) => {
		axios
			.patch(url + `/${item._id}`, { ...item })
			.then((res) => okResponse(res))
			.catch((err) => setErrors(err.response.data));
	};

	const returnError = (field) => {
		if (errors) {
			const index = errors.fields.findIndex((err) => err === field);

			return errors.messages[index];
		}
	};

	const okResponse = (res) => {
		fetchData();
		setSuccess(res.data);
		setErrors(null);
	};

	return (
		<FAQContext.Provider
			value={{
				data: FAQs,
				updateData: updateData,
				deleteData: deleteData,
				submitData: postData,
				returnErrors: returnError,
				onSuccess: success,
				cleanUp: () => {
					setErrors(null);
					setSuccess(null);
				},
			}}>
			{props.children}
		</FAQContext.Provider>
	);
};
