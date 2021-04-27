import { useState } from 'react';

const UseForm = ({ initialValues }) => {
	const [values, setValues] = useState(initialValues || {});

	//Setting value for corresponding name/property.
	const handleChange = (event) => {
		const value = event.target.value;
		const name = event.target.name;

		setValues({
			...values,
			[name]: value,
		});
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

	return {
		handleChange,
		values,
		handleEvent,
		handleImages,
		setValues,
		removeValues,
	};
};

export default UseForm;
