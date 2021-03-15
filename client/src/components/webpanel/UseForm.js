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

	const handleImage = (event) => {
		const file = event.target.files[0];
		let tempImages = {
			file: file,
			preview: URL.createObjectURL(file),
			filenames: file.name,
		};

		handleEvent('image', tempImages);
	};

	const uploadImage = () => {
		let formData = new FormData();

		formData.append('file', values.image.file);

		axios
			.post('http://localhost:8080/images/single', formData)
			.then((res) => console.log(res.data))
			.catch((err) => console.log(err));
	};

	const uploadImages = () => {
		let formData = new FormData();

		values.images.files.forEach((image) => {
			formData.append('multi-files', image);
		});

		axios
			.post('http://localhost:8080/images/upload', formData)
			.then((response) => console.log(response.data))
			.catch((err) => console.log(err));
	};

	const submitData = () => {
		let data = { ...values };

		if (values.images) data = { ...data, images: values.images.filenames };
		else if (values.image) data = { ...data, image: values.image.filenames };

		axios
			.post(`${url}add`, {
				...data,
			})
			.then((res) => {
				if (values.images !== undefined) uploadImages();
				else if (values.image !== undefined) uploadImage();

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
		let data = { ...values };

		if (data.images.filenames)
			data = { ...data, images: data.images.filenames };
		else if (data.image) data = { ...data, image: data.image.filenames };

		axios
			.patch(`${url}${values._id}`, {
				...data,
			})
			.then((res) => setSuccess(res.data))
			.catch((err) => {
				console.log(err.response.data);
				setError(err.response.data);
			});
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
		handleImage,
		onSuccess,
		setValues,
		removeValues,
	};
};

export default UseForm;
