import axios from 'axios';
import { createContext, useEffect, useState } from 'react';
import Invites from '../components/webpanel/reviewInvites/Invites';

export const SlideshowContext = createContext();

export const SlideshowProvider = (props) => {
	const [slideshows, setSlideshows] = useState([]);
	const [onSuccess, setSuccess] = useState(null);
	const [errors, setErrors] = useState(null);

	const url = '/slideshow/';

	useEffect(() => {
		fetchData();
		setErrors(null);
		setTimeout(() => {
			setSuccess(null);
		}, 1500);
	}, [onSuccess]);

	const fetchData = () => {
		axios
			.get(url)
			.then((res) => setSlideshows(res.data))
			.catch((err) => console.log(err.response.data));
	};

	const postData = (item) => {
		const formData = new FormData();

		formData.append('data', JSON.stringify(item));

		if (item.newImages)
			item.newImages.files.forEach((image) => formData.append('files', image));

		axios
			.post(url + 'add', formData)
			.then((res) => setSuccess(res.data))
			.catch((err) => setErrors(err.response.data));
	};

	const deleteData = (id) => {
		axios
			.delete(url + id)
			.then((res) => setSuccess(res.data))
			.catch((err) => console.log(err));
	};

	const updateData = (item) => {
		const formData = new FormData();

		formData.append('data', JSON.stringify(item));

		if (item.newImages)
			item.newImages.files.forEach((image) => formData.append('files', image));

		axios
			.patch(url + item._id, formData)
			.then((res) => setSuccess(res.data))
			.catch((err) => setErrors(err.response.data));
	};

	const returnError = (field) => {
		if (errors) {
			const index = errors.fields.findIndex((err) => err === field);

			return errors.messages[index];
		}
	};

	return (
		<SlideshowContext.Provider
			value={{
				slideshows: slideshows,
				submitData: postData,
				deleteData: deleteData,
				updateData: updateData,
				returnErrors: returnError,
				onSuccess: onSuccess,
			}}>
			{props.children}
		</SlideshowContext.Provider>
	);
};
