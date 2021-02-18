import axios from 'axios';
import { useState } from 'react';

const UseForm = ({ initialValues }) => {
	const [values, setValues] = useState(initialValues || {});
	const [error, setError] = useState(null);
	const [onSuccess, setSuccess] = useState(null);

	const handleChange = (event) => {
		const value = event.target.value;
		const name = event.target.name;

		setValues({
			...values,
			[name]: value,
		});
	};

	const handleEvent = (name, val) => {
		handleChange({ target: { name: name, value: val } });
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
		const url = 'http://localhost:8080/jacuzzis/add';

		axios
			.post(url, {
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

	return {
		handleChange,
		values,
		submitData,
		error,
		handleEvent,
		handleImages,
		onSuccess,
	};
};

export default UseForm;
