import { Form } from 'react-bootstrap';
import { JacuzziContext } from '../../../contexts/JacuzziContext';
import { useContext } from 'react';
import SelectAddText from '../SelectAddText';
import UserForm from '../UserForm';
import { ProductsContext } from '../../../contexts/ProductsContext';
import ScrollDiv from '../../scrolldiv/ScrollDiv';
import SelectInput from '../SelectInput';

const JacuzziForm = ({ userInput, returnErrors }) => {
	const { brands, techSpec } = useContext(JacuzziContext);
	const { products } = useContext(ProductsContext);

	const { handleChange, handleEvent, values, removeValues } = userInput;

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
				returnErrors={returnErrors}
				techSpec={techSpec}
				{...userInput}
			/>
			<Form.Group>
				<Form.Label>Relaterte produkter</Form.Label>
				<SelectInput
					name="relatedProducts"
					options={products.map((item) => ({
						value: item._id,
						userText: item.name,
					}))}
					handleChange={(e) =>
						handleEvent(e.target.name, [
							...values.relatedProducts,
							e.target.value,
						])
					}
				/>
				<ScrollDiv
					content={products
						.filter((item) => values.relatedProducts.includes(item._id))
						.map((item) => ({
							name: item.name,
							image: item.images[0].image,
							id: item._id,
						}))}
					returnFunction={(i, id) => removeValues('relatedProducts', id)}
					size={3}
				/>
			</Form.Group>
		</Form>
	);
};

export default JacuzziForm;
