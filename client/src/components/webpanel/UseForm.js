import axios from 'axios';
import { useState, useEffect } from 'react';

const UseForm = ({ initialValues, url }) => {
	const [values, setValues] = useState(initialValues || {});
	const [error, setError] = useState(null);
	const [onSuccess, setSuccess] = useState(null);

	useEffect(() => {
		if (onSuccess) {
			setTimeout(() => {
				window.location.reload();
			}, 500);
		}
	}, [onSuccess]);

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

	const handleEvent = (name, val) => {
		handleChange({ target: { name: name, value: val } });
	};

	const removeValues = (target, id) => {
		const newArray = [...values[target]];

		console.log(typeof id);

		const index =
			typeof id === 'number' ? id : newArray.findIndex((item) => item === id);

		newArray.splice(index, 1);

		handleEvent(target, newArray);
	};

	const handleImages = (event) => {
		let tempImages = {
			files: [...event.target.files],
			preview: [],
			filenames: [],
		};

		tempImages.files.forEach((image) => {
			tempImages.filenames.push({ image: image.name });
			tempImages.preview.push(URL.createObjectURL(image));
		});

		handleEvent('images', tempImages);
	};

	const uploadImages = () => {
		let formData = new FormData();

		values.images.files.forEach((image) => {
			formData.append('multi-files', image);
		});

		axios({
			method: 'POST',
			url: 'http://localhost:8080/images/upload',
			data: formData,
			config: { headers: { 'Content-Type': 'multipart/form-data' } },
		})
			.then((response) => console.log(response.data))
			.catch((err) => console.log(err));
	};

	const submitData = () => {
		axios
			.post(`${url}add`, {
				...values,
				images: values.images.filenames,
			})
			.then((res) => {
				if (values.images.files !== undefined) uploadImages();

				setSuccess(res.data);
			})
			.catch((err) => {
				console.log(err.response.data);
				setError(err.response.data);
			});
	};

	const deleteData = () => {
		axios
			.delete(`${url}${values._id}`)
			.then((res) => setSuccess(res.data))
			.catch((err) => console.log(err.response.data));
	};

	const updateData = () => {
		axios
			.patch(`${url}${values._id}`, values)
			.then((res) => setSuccess(res.data))
			.catch((err) => console.log(err));
	};

	return {
		handleChange,
		values,
		submitData,
		deleteData,
		updateData,
		returnErrors,
		handleEvent,
		handleImages,
		onSuccess,
		setValues,
		removeValues,
	};
};

export default UseForm;
