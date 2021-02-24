const SelectInput = ({ options, handleChange, name, value }) => {
	return (
		<select
			onChange={handleChange}
			name={name}
			value={value === '' ? '1' : value}
			className="form-control">
			<option value="1" disabled>
				Velg...
			</option>
			{options.map((option, i) => (
				<option key={i} name={i} value={option.value}>
					{option.userText}
				</option>
			))}
		</select>
	);
};

SelectInput.defaultProps = {
	value: '1',
};

export default SelectInput;
