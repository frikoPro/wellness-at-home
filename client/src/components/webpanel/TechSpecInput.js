import { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import SelectInput from './SelectInput';
import TechList from './TechList';
import UseForm from './UseForm';

const TechSpecInput = ({ submitChange, techSpec }) => {
	const { handleChange, values, handleEvent } = UseForm({
		initialValues: {
			props: ['vannsystem', 'strømforbruk', 'kapasitet'],
			newProp: '',
			selectedTechSpec: {},
		},
	});

	const [errors, setErrors] = useState({
		property: false,
		value: false,
	});

	const removeTechSpec = (i) => {
		let mutatedTechSpec = [...techSpec];

		mutatedTechSpec.splice(i, 1);

		submitChange({ target: { name: 'techSpec', value: mutatedTechSpec } });
	};

	const onSubmit = () => {
		const newTechSpec = values.selectedTechSpec;
		let techSpecTemp = techSpec;

		if (!newTechSpec.value && !newTechSpec.property) {
			return setErrors({ property: true, value: true });
		} else if (!newTechSpec.value) {
			return setErrors({ ...errors, value: true });
		} else if (!newTechSpec.property) {
			return setErrors({ ...errors, property: true });
		}

		setErrors({ property: false, value: false });

		const index = techSpec.findIndex(
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
			<Row>
				<Col sm={2}>
					<SelectInput
						options={values.props}
						value={values.selectedTechSpec.property}
						handleChange={(e) =>
							handleEvent(e.target.name, {
								...values.selectedTechSpec,
								property: e.target.value,
							})
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
							handleEvent('selectedTechSpec', {
								...values.selectedTechSpec,
								value: e.target.value,
							})
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
				<Col>
					<TechList values={techSpec} handleEvent={removeTechSpec} />
				</Col>
			</Row>

			<Row className="mt-5">
				<Col sm={2}>
					<Form.Control
						placeholder="legg til ny egenskap"
						name="newProp"
						onChange={handleChange}
					/>
				</Col>
				<Col>
					<Button
						className="btn-success"
						onClick={() =>
							handleEvent('props', [...values.props, values.newProp])
						}>
						Legg til
					</Button>
				</Col>
			</Row>
		</>
	);
};

export default TechSpecInput;
