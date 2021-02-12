import axios from 'axios';
import { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';

const Jacuzzis = () => {
	const [newProduct, setNewProduct] = useState({
		name: '',
		brand: '',
		description: '',
		price: '',
		techSpec: [
			{ property: 'strømforbruk', value: '200kw/h' },
			{ property: 'strømforbruk', value: '200kw/h' },
			{ property: 'strømforbruk', value: '200kw/h' },
		],
		relatedProducts: [{}],
		images: [],
	});

	const [newTechSpec, setNewTechSpec] = useState({
		properties: ['vannsystem', 'strømforbruk', 'kapasitet'],
		newProperty: '',
		selectedTechSpec: {},
	});

	const [images, setImages] = useState([]);

	const uploadImage = () => {
		let data = new FormData();

		images.forEach((image) => {
			data.append('multi-files', image);
		});

		axios({
			method: 'POST',
			url: 'http://localhost:8080/images/upload',
			data: data,
			config: { headers: { 'Content-Type': 'multipart/form-data' } },
		}).then((response) => console.log(response.data));
	};

	const postNewProduct = () => {
		axios
			.post('http://localhost:8080/products/add', newProduct)
			.then((response) => console.log(response));
	};

	const onUploadImage = (e) => {
		let filenames = newProduct;

		[...e.target.files].forEach((image) => filenames.images.push(image.name));

		setNewProduct({ ...filenames });
		setImages([...e.target.files]);
	};

	const addNewProperty = () => {
		if (newTechSpec.property && newTechSpec.value) {
			return setNewProduct({
				...newProduct,
				techSpec: [...newProduct.techSpec, newTechSpec.selectedTechSpec],
			});
		}

		console.log('ikke fylt inn');
	};

	return (
		<Card>
			<Card.Body>
				<Card.Title>Legg til spabad</Card.Title>
				<Form>
					<Form.Group>
						<Form.Label>Modell navn</Form.Label>
						<Form.Control
							placeholder="navn"
							onChange={(e) =>
								setNewProduct({ ...newProduct, name: e.target.value })
							}
						/>
					</Form.Group>

					<Form.Group>
						<Form.Label>Merke</Form.Label>
						<select
							className="form-control"
							onChange={(e) =>
								setNewProduct({ ...newProduct, brand: e.target.value })
							}>
							<option disabled selected>
								Velg merke
							</option>
							<option>Svenska Bad</option>
							<option>Svenska Bad Pro</option>
							<option>Nordpool</option>
						</select>
					</Form.Group>
					<Form.Group>
						<Form.Label>Beskrivelse</Form.Label>
						<Form.Control
							placeholder="Beskrivelse"
							onChange={(e) =>
								setNewProduct({
									...newProduct,
									description: e.target.value,
								})
							}
						/>
					</Form.Group>
					<Form.Group>
						<Form.Label>Pris</Form.Label>
						<Form.Control
							placeholder="pris"
							onChange={(e) =>
								setNewProduct({ ...newProduct, price: e.target.value })
							}
						/>
					</Form.Group>
					<Form.Group>
						<Form.Label>Tekniske spesifikasjoner</Form.Label>
						<Row>
							<Col sm={2}>
								<select
									className="form-control"
									placeholder="Strømforbruk"
									onChange={(e) =>
										setNewTechSpec({
											...newTechSpec,
											selectedTechSpec: {
												...newTechSpec,
												property: e.target.value,
											},
										})
									}>
									<option disabled selected>
										Velg egenskap
									</option>
									{newTechSpec.properties.map((option) => (
										<option>{option}</option>
									))}
								</select>
							</Col>
							<Col sm={1} className="text-center">
								<div>:</div>
							</Col>
							<Col sm={2}>
								<Form.Control
									placeholder="200kw/h"
									onChange={(e) =>
										setNewTechSpec({
											...newTechSpec,
											selectedTechSpec: {
												...newTechSpec.selectedTechSpec,
												value: e.target.value,
											},
										})
									}
								/>
							</Col>
							<Col>
								<Button onClick={() => addNewProperty()}>Legg til</Button>
							</Col>
							<Col>
								<ul style={{ listStyleType: 'none' }}>
									{newProduct.techSpec.map((item) => (
										<li>
											{item.property ? item.property + ' : ' + item.value : ''}
										</li>
									))}
								</ul>
							</Col>
						</Row>

						<Row className="mt-5">
							<Col sm={2}>
								<Form.Control
									placeholder="legg til ny egenskap"
									onChange={(e) =>
										setNewTechSpec({
											...newTechSpec,
											newProperty: e.target.value,
										})
									}
								/>
							</Col>
							<Col>
								<Button
									className="btn-success"
									onClick={() =>
										setNewTechSpec({
											...newTechSpec,
											properties: [
												...newTechSpec.properties,
												newTechSpec.newProperty,
											],
										})
									}>
									Legg til
								</Button>
							</Col>
						</Row>
					</Form.Group>
					<Form.Group>
						<Form.Label>Relaterte produkter</Form.Label>
						<Form.Control
							placeholder="relaterte produkter"
							onChange={(e) =>
								setNewProduct({
									...newProduct,
									relatedProducts: e.target.value,
								})
							}
						/>
					</Form.Group>
					<Form.Group>
						<Form.Label>Bilder</Form.Label>
						<Form.Control
							type="file"
							name="multi-files"
							onChange={(e) => onUploadImage(e)}
							multiple
						/>
					</Form.Group>
					<Button
						onClick={() => {
							uploadImage();
							postNewProduct();
						}}>
						Lagre produkt
					</Button>
				</Form>
			</Card.Body>
		</Card>
	);
};

export default Jacuzzis;
