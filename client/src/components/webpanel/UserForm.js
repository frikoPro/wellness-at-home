import { Col, Form, Row } from 'react-bootstrap';

import TechSpecInput from './TechSpecInput';

const UserForm = ({
	values,
	handleChange,
	returnErrors,
	handleImages,
	removeValues,
	shiftOrder,
	techSpec,
}) => {
	return (
		<>
			<Form.Group>
				<Form.Label>Navn</Form.Label>
				<Form.Control name="name" value={values.name} onChange={handleChange} />

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
					values={values}
					options={techSpec}
					removeValues={removeValues}
					shiftOrder={shiftOrder}
				/>
				<Form.Text className="text-danger text-center">
					{returnErrors('techSpec')}
				</Form.Text>
			</Form.Group>

			<Form.Group>
				<Form.Label>Bilder</Form.Label>
				<Form.Control
					type="file"
					name="files"
					onChange={handleImages}
					multiple
				/>
				<Form.Text className="text-danger">{returnErrors('images')}</Form.Text>
			</Form.Group>
			<Form.Group>
				<Row className="w-100">
					{values.newImages
						? values.newImages.preview.map((img, i) => (
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
