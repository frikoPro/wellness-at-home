import axios from 'axios';
import { useState, useEffect } from 'react';

const UseForm = ({ initialValues, url }) => {
	const [values, setValues] = useState(initialValues || {});
	const [error, setError] = useState(null);
	const [onSuccess, setSuccess] = useState(null);

	// useEffect is called everytime when the api is successful. If successful, then timeout 500ms, then update page for reloading new items.
	// useEffect(() => {
	// 	if (onSuccess) {
	// 		setTimeout(() => {
	// 			window.location.reload();
	// 		}, 500);
	// 	}
	// }, [onSuccess]);

	//Setting value for corresponding name/property.
	const handleChange = (event) => {
		const value = event.target.value;
		const name = event.target.name;

		setValues({
			...values,
			[name]: value,
		});
	};

	const returnErrors = (field) => {
		if (error) {
			const index = error.fields.findIndex((err) => err === field);

			return error.messages[index];
		}
	};

	// Is used when data structures is more complex and needs to be handled differently.
	const handleEvent = (name, val) => {
		handleChange({ target: { name: name, value: val } });
	};

	//Is used when removing spesific tech specifications
	const removeValues = (target, id) => {
		const newArray = [...values[target]];

		const index =
			typeof id === 'number' ? id : newArray.findIndex((item) => item === id);

		newArray.splice(index, 1);

		handleEvent(target, newArray);
	};

	// Is called when you are uploading images through the "Velg filer" button.
	const handleImages = (event) => {
		let tempImages = {
			files: [...event.target.files],
			preview: [],
		};

		tempImages.files.forEach((image) => {
			tempImages.preview.push(URL.createObjectURL(image));
		});

		handleEvent('newImages', tempImages);
	};

	//POST Request in form-data for handling images and text fields in same request.
	const submitData = () => {
		let formData = new FormData();

		//text fields
		formData.append('data', JSON.stringify(values));

		//if images has been uploaded, append to formData.
		if (values.newImages)
			values.newImages.files.forEach((image) => {
				formData.append('files', image);
			});

		axios
			.post(`${url}add`, formData)
			.then((res) => {
				//request was successful
				setSuccess(res.data);
			})
			.catch((err) => {
				//request failed
				handleError(err);
			});
	};

	const deleteData = () => {
		axios
			.delete(`${url}${values._id}`)
			.then((res) => setSuccess(res.data))
			.catch((err) => handleError(err));
	};

	const deleteById = (id) => {
		axios
			.delete(`${url}${id}`)
			.then((res) => setSuccess(res.data))
			.catch((err) => handleError(err));
	};

	const updateData = () => {
		let formData = new FormData();

		if (values.newImages)
			values.newImages.files.forEach((image) =>
				formData.append('files', image)
			);

		formData.append('data', JSON.stringify(values));

		axios
			.patch(`${url}${values._id}`, formData)
			.then((res) => setSuccess(res.data))
			.catch((err) => {
				handleError(err);
			});
	};

	//Sometimes error is not structured as err.response.data, then just console.log(err)
	const handleError = (err) => {
		if (err.response) {
			console.log(err.response);
			setError(err.response.data);
		} else console.log(err);
	};

	return {
		handleChange,
		values,
		setError,
		submitData,
		deleteData,
		updateData,
		returnErrors,
		handleEvent,
		handleImages,
		onSuccess,
		setValues,
		removeValues,
		deleteById,
	};
};

export default UseForm;
