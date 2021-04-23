import axios from 'axios';
import { createContext, useEffect, useState } from 'react';

export const JacuzziContext = createContext();

export const JacuzziProvider = (props) => {
	const url = 'http://localhost:8080/jacuzzis/';

	const [jacuzzis, setJacuzzis] = useState([]);
	const [onSuccess, setSuccess] = useState(null);
	const [errors, setErrors] = useState(null);

	const fetchData = () => {
		axios.get(url).then((response) => {
			setJacuzzis(response.data);
		});
	};

	const deleteData = (id) => {
		axios
			.delete(url + id)
			.then((res) => okResponse(res))
			.catch((err) => console.log(err));
	};

	useEffect(() => {
		fetchData();
	}, []);

	useEffect(() => {
		setErrors(null);
		setTimeout(() => {
			setSuccess(null);
		}, 1500);
	}, [onSuccess]);

	const postData = (item) => {
		const formData = new FormData();

		formData.append('data', JSON.stringify(item));

		if (item.newImages)
			item.newImages.files.forEach((image) => formData.append('files', image));

		axios
			.post(url + 'add', formData)
			.then((res) => okResponse(res))
			.catch((err) => setErrors(err.response.data));
	};

	const updateData = (item) => {
		console.log(item);
		const formData = new FormData();

		formData.append('data', JSON.stringify(item));

		if (item.newImages)
			item.newImages.files.forEach((image) => formData.append('files', image));

		axios
			.patch(url + item._id, formData)
			.then((res) => okResponse(res))
			.catch((err) => {
				setErrors(err.response.data);
				setTimeout(() => {
					fetchData();
				}, 1550);
			});
	};

	const returnBrands = () => {
		const unique = [...new Set(jacuzzis.map((item) => item.brand))];
		return unique;
	};

	const returnTechSpec = () => {
		const unique = [];

		jacuzzis.forEach((item) => {
			item.techSpec.forEach((tech) => {
				if (!unique.includes(tech.egenskap)) unique.push(tech.egenskap);
			});
		});

		return unique;
	};

	const okResponse = (res) => {
		fetchData();
		setErrors(null);
		setSuccess(res.data);
	};

	const returnError = (field) => {
		if (errors) {
			const index = errors.fields.findIndex((err) => err === field);

			return errors.messages[index];
		}
	};

	return (
		<JacuzziContext.Provider
			value={{
				jacuzzis: jacuzzis,
				deleteData: deleteData,
				updateData: updateData,
				submitData: postData,
				onSuccess: onSuccess,
				returnErrors: returnError,
				errors: errors
					? errors.messages.reduce(
							(acc, val) => `${acc} 
				${val}`
					  )
					: null,
				removeErrors: () => setErrors(null),
				brands: returnBrands(),
				techSpec: returnTechSpec(),
			}}>
			{props.children}
		</JacuzziContext.Provider>
	);
};
