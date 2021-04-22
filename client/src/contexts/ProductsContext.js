import axios from 'axios';
import { createContext, useEffect, useState } from 'react';

export const ProductsContext = createContext();

export const ProductsProvider = (props) => {
	const [products, setProducts] = useState([]);
	const [onSuccess, setSuccess] = useState(null);
	const [errors, setErrors] = useState(null);

	const url = 'http://localhost:8080/products/';

	const fetchData = () => {
		axios
			.get(url)
			.then((res) => {
				setProducts(res.data);
			})
			.catch((err) => console.log(err));
	};

	useEffect(() => {
		fetchData();
	}, []);

	useEffect(() => {
		if (onSuccess)
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
				if (!unique.includes(tech.egenskap)) unique.push(tech.egenskap);
			});
		});

		return unique;
	};

	return (
		<ProductsContext.Provider
			value={{
				products: products,
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
				categories: returnCategories(),
				techSpec: returnTechSpec(),
			}}>
			{props.children}
		</ProductsContext.Provider>
	);
};
