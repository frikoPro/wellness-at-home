import { Form } from 'react-bootstrap';
import { JacuzziContext } from '../../../contexts/JacuzziContext';
import { useContext } from 'react';
import SelectAddText from '../SelectAddText';
import UserForm from '../UserForm';

const JacuzziForm = ({
	values,
	handleChange,
	submitData,
	returnErrors,
	onSuccess,
	handleEvent,
	handleImages,
	removeValues,
}) => {
	const { brands, techSpec } = useContext(JacuzziContext);

	return (
		<Form>
			<Form.Group>
				<Form.Label>Legg til merke</Form.Label>
				<SelectAddText
					handleChange={handleChange}
					options={brands}
					errors={returnErrors}
					value={values.brand}
					name="brand"
				/>
			</Form.Group>
			<UserForm
				handleChange={handleChange}
				handleEvent={handleEvent}
				returnErrors={returnErrors}
				handleImages={handleImages}
				removeValues={removeValues}
				values={values}
				techSpec={techSpec}
			/>
		</Form>
	);
};

export default JacuzziForm;
