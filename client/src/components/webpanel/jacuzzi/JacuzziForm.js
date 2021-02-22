import { Button, Col, Form, Row } from 'react-bootstrap';
import { ProductsContext } from '../../../contexts/ProductsContext';
import { JacuzziContext } from '../../../contexts/JacuzziContext';
import { useContext, useEffect, useState } from 'react';
import TechSpecInput from '../TechSpecInput';
import SelectInput from '../SelectInput';

const JacuzziForm = ({
	handleChange,
	values,
	returnErrors,
	handleEvent,
	handleImages,
}) => {
	const products = useContext(ProductsContext);
	const jacuzzis = useContext(JacuzziContext);

	const [formData, setFormData] = useState(values || {});

	const [brands, setBrands] = useState([]);
	const [newBrand, setNewBrand] = useState('');

	useEffect(() => {
		setFormData({ ...values });

		const tempBrands = [];

		jacuzzis.map((item) => {
			if (!tempBrands.includes(item.brand)) tempBrands.push(item.brand);
		});

		setBrands([...tempBrands]);
	}, [values, jacuzzis]);

	return (
		<Form>
			<Form.Group>
				<Form.Label>Modell navn</Form.Label>
				<Form.Control
					placeholder="navn"
					name="name"
					value={formData.name}
					onChange={handleChange}
				/>

				<Form.Text className="text-danger">{returnErrors('name')}</Form.Text>
			</Form.Group>
			<Form.Group>
				<Row>
					<Col sm={12}>
						<Form.Label>Legg til merke</Form.Label>
					</Col>
					<Col sm={4}>
						<SelectInput
							handleChange={handleChange}
							value={formData.brand}
							options={brands}
							name="brand"
						/>
						<Form.Text className="text-danger">
							{returnErrors('brand')}
						</Form.Text>
					</Col>
					<Col sm={4}>
						<Form.Control
							placeholder="Legg til nytt merke"
							onChange={(e) => setNewBrand(e.target.value)}
						/>
					</Col>
					<Col sm={2}>
						<Button
							className="btn-success"
							onClick={() => setBrands([...brands, newBrand])}>
							Legg til
						</Button>
					</Col>
				</Row>
			</Form.Group>

			<Form.Group>
				<Form.Label>Beskrivelse</Form.Label>
				<textarea
					className="form-control"
					name="aboutProduct"
					value={formData.aboutProduct}
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
					value={formData.price}
					onChange={handleChange}
				/>
				<Form.Text className="text-danger">{returnErrors('price')}</Form.Text>
			</Form.Group>
			<Form.Group>
				<Form.Label>Tekniske spesifikasjoner</Form.Label>
				<TechSpecInput submitChange={handleChange} techSpec={values.techSpec} />
				<Form.Text className="text-danger text-center">
					{returnErrors('techSpec')}
				</Form.Text>
			</Form.Group>
			<Form.Group>
				<Form.Label>Relaterte produkter</Form.Label>
				<SelectInput
					name="relatedProducts"
					options={products.map((item) => item.name)}
					handleChange={(e) =>
						handleEvent(e.target.name, [
							...values.relatedProducts,
							products[e.target.value]._id,
						])
					}
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
		</Form>
	);
};

export default JacuzziForm;
