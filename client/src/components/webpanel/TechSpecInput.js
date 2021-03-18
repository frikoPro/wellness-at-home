import { useEffect, useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import SelectInput from './SelectInput';
import TableList from '../TableList';

const TechSpecInput = ({ submitChange, options, values, removeValues }) => {
	const [newProp, setNewProp] = useState('');

	const [newTechSpec, setNewTechSpec] = useState({
		property: '',
		value: '',
	});

	const [optionsState, setOptionsState] = useState([]);

	const [errors, setErrors] = useState({
		property: false,
		value: false,
	});

	const [techSpec, setSpec] = useState([]);

	useEffect(() => {
		setOptionsState(options);
		setSpec([...values.techSpec]);
	}, [options, values]);

	const onSubmit = () => {
		let techSpecTemp = techSpec;

		if (!newTechSpec.value && !newTechSpec.property) {
			return setErrors({ property: true, value: true });
		} else if (!newTechSpec.value) {
			return setErrors({ ...errors, value: true });
		} else if (!newTechSpec.property) {
			return setErrors({ ...errors, property: true });
		}

		setErrors({ property: false, value: false });

		const index = techSpecTemp.findIndex(
			(spec) => spec.property === newTechSpec.property
		);

		if (index < 0) {
			techSpecTemp.push(newTechSpec);
		} else {
			techSpecTemp[index].value = newTechSpec.value;
		}

		submitChange({
			target: {
				name: 'techSpec',
				value: techSpecTemp,
			},
		});
	};

	return (
		<>
			<TableList values={techSpec} name="techSpec" removeValue={removeValues} />
			<Row>
				<Col sm={2}>
					<SelectInput
						options={optionsState.map((item) => ({
							value: item,
							userText: item,
						}))}
						value={newTechSpec.property}
						handleChange={(e) =>
							setNewTechSpec({ ...newTechSpec, property: e.target.value })
						}
						name="selectedTechSpec"
					/>
					<Form.Text className="text-danger">
						{errors.property ? 'Mangler egenskap' : null}
					</Form.Text>
				</Col>
				<Col sm={1} className="text-center">
					<div>:</div>
				</Col>
				<Col sm={2}>
					<Form.Control
						placeholder="200kw/h"
						name="selectedTechSpec"
						onChange={(e) =>
							setNewTechSpec({ ...newTechSpec, value: e.target.value })
						}
					/>
					<Form.Text className="text-danger">
						{errors.value ? 'Mangler verdi' : null}
					</Form.Text>
				</Col>
				<Col>
					<Button name="techSpec" onClick={onSubmit}>
						Legg til
					</Button>
				</Col>
			</Row>

			<Row className="mt-5">
				<Col sm={2}>
					<Form.Control
						placeholder="legg til ny egenskap"
						name="newProp"
						onChange={(e) => setNewProp(e.target.value)}
					/>
				</Col>
				<Col>
					<Button
						className="btn-success"
						onClick={() => setOptionsState([...optionsState, newProp])}>
						Legg til
					</Button>
				</Col>
			</Row>
		</>
	);
};

export default TechSpecInput;
