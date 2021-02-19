import { Form } from 'react-bootstrap';

const SelectInput = ({ options, handleChange, name }) => {
	return (
		<select
			onChange={handleChange}
			name={name}
			className="form-control"
			defaultValue="1">
			<option value="1" disabled>
				Velg...
			</option>
			{options.map((option, i) => (
				<option key={i} name={i}>
					{option}
				</option>
			))}
		</select>
	);
};

export default SelectInput;
