import { useContext } from 'react';
import { Form } from 'react-bootstrap';
import { JacuzziContext } from '../../../contexts/JacuzziContext';
import { ProductsContext } from '../../../contexts/ProductsContext';
import SelectAddText from '../SelectAddText';
import SelectInput from '../SelectInput';
import UserForm from '../UserForm';

const ProductForm = ({
	values,
	handleChange,
	returnErrors,
	handleEvent,
	handleImages,
	removeValues,
}) => {
	const { categories, techSpec } = useContext(ProductsContext);
	const { brands } = useContext(JacuzziContext);

	return (
		<Form>
			<Form.Label>Velg tilhørighet</Form.Label>
			<Form.Group>
				<SelectInput
					options={brands.map((item) => ({ value: item, userText: item }))}
					handleChange={handleChange}
					name={'affiliation'}
					value={values.affiliation}
				/>
			</Form.Group>
			<Form.Group>
				<Form.Label>Kategori</Form.Label>
				<SelectAddText
					options={categories}
					value={values.category}
					errors={returnErrors}
					handleChange={handleChange}
					name="category"
				/>
				<Form.Text className="text-danger">
					{returnErrors('category')}
				</Form.Text>
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

export default ProductForm;
