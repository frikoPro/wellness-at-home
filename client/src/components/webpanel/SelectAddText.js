import { useEffect, useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import SelectInput from './SelectInput';

const SelectAddText = ({ handleChange, value, options, errors, name }) => {
	const [optionsState, setOptions] = useState([]);

	const [newOption, setNewOption] = useState('');

	useEffect(() => {
		setOptions([...options]);
	}, [options]);

	return (
		<Row>
			<Col sm={12}>
				<SelectInput
					handleChange={handleChange}
					value={value}
					options={optionsState.map((item) => ({
						value: item,
						userText: item,
					}))}
					name={name}
				/>
				<Form.Text className="text-danger">{errors('brand')}</Form.Text>
			</Col>
			<Col sm={4}>
				<Form.Control
					placeholder="Legg til nytt merke"
					onChange={(e) => setNewOption(e.target.value)}
				/>
			</Col>
			<Col sm={2}>
				<Button
					className="btn-success"
					onClick={() => setOptions([...optionsState, newOption])}>
					Legg til
				</Button>
			</Col>
		</Row>
	);
};

export default SelectAddText;
