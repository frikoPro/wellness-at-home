import { useContext } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { ProductsContext } from '../../contexts/ProductsContext';
import ScrollDiv from '../scrolldiv/ScrollDiv';
import SelectInput from './SelectInput';
import TechSpecInput from './TechSpecInput';

const UserForm = ({
	values,
	handleChange,
	returnErrors,
	handleEvent,
	handleImages,
	removeValues,
	techSpec,
}) => {
	const { products } = useContext(ProductsContext);

	return (
		<>
			<Form.Group>
				<Form.Label>Navn</Form.Label>
				<Form.Control
					placeholder="navn"
					name="name"
					value={values.name}
					onChange={handleChange}
				/>

				<Form.Text className="text-danger">{returnErrors('name')}</Form.Text>
			</Form.Group>
			<Form.Group>
				<Form.Label>Beskrivelse</Form.Label>
				<textarea
					className="form-control"
					name="aboutProduct"
					value={values.aboutProduct}
					rows={4}
					onChange={handleChange}
				/>
				<Form.Text className="text-danger">
					{returnErrors('aboutProduct')}
				</Form.Text>
			</Form.Group>
			<Form.Group>
				<Form.Label>Pris</Form.Label>
				<Form.Control
					type="number"
					placeholder="pris"
					name="price"
					value={values.price}
					onChange={handleChange}
				/>
				<Form.Text className="text-danger">{returnErrors('price')}</Form.Text>
			</Form.Group>
			<Form.Group>
				<Form.Label>Tekniske spesifikasjoner</Form.Label>
				<TechSpecInput
					submitChange={handleChange}
					values={values.techSpec}
					options={techSpec}
					removeValues={removeValues}
				/>
				<Form.Text className="text-danger text-center">
					{returnErrors('techSpec')}
				</Form.Text>
			</Form.Group>
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
			<Form.Group>
				<Form.Label>Bilder</Form.Label>
				<Form.Control
					type="file"
					name="multi-files"
					onChange={handleImages}
					multiple
				/>
				<Form.Text className="text-danger">{returnErrors('images')}</Form.Text>
			</Form.Group>
			<Form.Group>
				<Row>
					{values.images.preview
						? values.images.preview.map((img, i) => (
								<Col sm={2} key={i}>
									<img src={img} alt="" className="w-100"></img>
								</Col>
						  ))
						: null}
				</Row>
			</Form.Group>
		</>
	);
};

export default UserForm;
