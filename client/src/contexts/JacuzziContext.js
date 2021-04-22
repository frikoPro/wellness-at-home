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
			.then(() => okResposne())
			.catch((err) => console.log(err));
	};

	useEffect(() => {
		fetchData();
	}, []);

	useEffect(() => {
		setSuccess(null);
	}, [onSuccess]);

	const updateData = (item) => {
		const formData = new FormData();

		formData.append('data', JSON.stringify(item));

		if (item.newImages)
			item.newImages.files.forEach((image) => formData.append('files', image));

		axios
			.patch(url + item._id, formData)
			.then(() => okResposne())
			.catch((err) => setErrors(err.response.data));
	};

	const returnBrands = () => {
		const unique = [...new Set(jacuzzis.map((item) => item.brand))];
		return unique;
	};

	const returnTechSpec = () => {
		const unique = [];

		jacuzzis.forEach((item) => {
			item.techSpec.forEach((tech) => {
				if (!unique.includes(tech.property)) unique.push(tech.property);
			});
		});

		return unique;
	};

	const okResposne = () => {
		fetchData();
		setErrors(null);
		setSuccess(true);
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
				onSuccess: onSuccess,
				returnErrors: returnError,
				errors: errors,
				removeErrors: () => setErrors(null),
				brands: returnBrands(),
				techSpec: returnTechSpec(),
			}}>
			{props.children}
		</JacuzziContext.Provider>
	);
};
