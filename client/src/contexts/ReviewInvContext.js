import axios from 'axios';
import { createContext, useEffect, useState } from 'react';

export const ReviewInvContext = createContext();

export const ReviewInvProvider = (props) => {
	const [invites, setInvites] = useState([]);
	const [onSuccess, setSuccess] = useState(null);
	const [errors, setErrors] = useState(null);

	const url = '/reviewinvites/';

	useEffect(() => {
		fetchData();
		setSuccess(null);
		setErrors(null);
	}, [onSuccess]);

	const fetchData = () => {
		axios.get(url).then((res) => setInvites(res.data));
	};

	const postData = (item) => {
		axios
			.post(url + 'add', item)
			.then((res) => setSuccess(res.data))
			.catch((err) => setErrors(err.response.data));
	};

	const deleteData = (index) => {
		const { _id } = invites[index];

		console.log(_id);

		axios
			.delete(url + _id)
			.then((res) => setSuccess(res.data))
			.catch((err) => console.log(err));
	};

	const returnError = (field) => {
		if (errors) {
			const index = errors.fields.findIndex((err) => err === field);

			return errors.messages[index];
		}
	};

	return (
		<ReviewInvContext.Provider
			value={{
				invites: invites,
				submitData: postData,
				deleteData: deleteData,
				returnErrors: returnError,
				onSuccess: onSuccess,
			}}>
			{props.children}
		</ReviewInvContext.Provider>
	);
};
