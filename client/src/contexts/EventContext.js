import axios from 'axios';
import { createContext, useEffect, useState } from 'react';

export const EventContext = createContext();

export const EventProvider = (props) => {
	const url = '/events/';

	const [events, setEvents] = useState([]);
	const [errors, setErrors] = useState(null);
	const [onSuccess, setSuccess] = useState(null);

	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = () => {
		axios.get(url).then((res) => setEvents(res.data));
	};

	const postData = (item) => {
		const formData = new FormData();

		formData.append('data', JSON.stringify(item));

		formData.append('files', item.img);

		axios
			.post(url + 'add', formData)
			.then((res) => okResponse(res))
			.catch((err) => setErrors(err.response.data));
	};

	const updateData = (data) => {
		const formData = new FormData();

		formData.append('data', JSON.stringify(data));

		if (data.newImg) formData.append('files', data.newImg);

		axios
			.patch(url + data._id, formData)
			.then((res) => okResponse(res))
			.catch((err) => setErrors(err.response.data));
	};

	const deleteData = (id) => {
		axios
			.delete(url + id)
			.then(() => fetchData())
			.catch((err) => console.log(err));
	};

	const returnError = (field) => {
		if (errors) {
			const index = errors.fields.findIndex((err) => err === field);

			return errors.messages[index];
		}
	};

	const okResponse = (res) => {
		setErrors(null);
		setSuccess(res.data);
		fetchData();
	};

	return (
		<EventContext.Provider
			value={{
				data: events,
				postData: postData,
				deleteData: deleteData,
				updateData: updateData,
				returnErrors: returnError,
				onSuccess: onSuccess,
				cleanUp: () => {
					setErrors(null);
					setSuccess(null);
				},
			}}>
			{props.children}
		</EventContext.Provider>
	);
};
