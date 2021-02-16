import axios from 'axios';
import { useContext, useState } from 'react';
import { ProductsContext } from '../../contexts/ProductsContext';

import { Button, Card, Col, Form, Row } from 'react-bootstrap';
const Jacuzzis = () => {
	const [newJacuzzi, setNewJacuzzi] = useState({
		name: '',
		brand: '',
		description: '',
		price: '',
		techSpec: [],
		relatedProducts: [],
		images: [],
	});

	const [newTechSpec, setNewTechSpec] = useState({
		properties: ['vannsystem', 'strømforbruk', 'kapasitet'],
		newProperty: '',
		selectedTechSpec: {},
	});

	const products = useContext(ProductsContext);

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
			.post('http://localhost:8080/jacuzzis/add', newJacuzzi)
			.then((response) => console.log(response));
	};

	const onUploadImage = (e) => {
		let filenames = newJacuzzi;

		[...e.target.files].forEach((image) =>
			filenames.images.push({ image: image.name })
		);

		setNewJacuzzi({ ...filenames });
		setImages([...e.target.files]);
	};

	const addNewProperty = () => {
		if (
			newTechSpec.selectedTechSpec.property &&
			newTechSpec.selectedTechSpec.value
		) {
			let mutatedTechSpec = [...newJacuzzi.techSpec];

			const ifElementExist = mutatedTechSpec.findIndex(
				(item) => item.property === newTechSpec.selectedTechSpec.property
			);

			if (ifElementExist !== -1) {
				mutatedTechSpec[ifElementExist].value =
					newTechSpec.selectedTechSpec.value;

				return setNewJacuzzi({ ...newJacuzzi, techSpec: [...mutatedTechSpec] });
			}

			return setNewJacuzzi({
				...newJacuzzi,
				techSpec: [...newJacuzzi.techSpec, newTechSpec.selectedTechSpec],
			});
		}

		alert('fyll inn både egenskap og verdi');
	};

	const removeTechSpec = (i) => {
		let mutatedTechSpec = [...newJacuzzi.techSpec];

		mutatedTechSpec.splice(i, 1);

		setNewJacuzzi({ ...newJacuzzi, techSpec: mutatedTechSpec });
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
								setNewJacuzzi({ ...newJacuzzi, name: e.target.value })
							}
						/>
					</Form.Group>

					<Form.Group>
						<Form.Label>Merke</Form.Label>
						<select
							className="form-control"
							onChange={(e) =>
								setNewJacuzzi({ ...newJacuzzi, brand: e.target.value })
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
								setNewJacuzzi({
									...newJacuzzi,
									description: e.target.value,
								})
							}
						/>
					</Form.Group>
					<Form.Group>
						<Form.Label>Pris</Form.Label>
						<Form.Control
							type="number"
							placeholder="pris"
							onChange={(e) =>
								setNewJacuzzi({ ...newJacuzzi, price: e.target.value })
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
												...newTechSpec.selectedTechSpec,
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
									{newJacuzzi.techSpec.map((item, index) => (
										<li
											style={{ cursor: 'pointer' }}
											key={index}
											onClick={() => removeTechSpec(index)}>
											<span className="font-weight-bold">X </span>
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
						<select
							className="form-control"
							onChange={(e) =>
								setNewJacuzzi({
									...newJacuzzi,
									relatedProducts: [
										...newJacuzzi.relatedProducts,
										products[e.target.value]._id,
									],
								})
							}>
							<option disabled selected>
								Legg til produkt
							</option>
							{products.map((product, index) => (
								<option value={index}>{product.name}</option>
							))}
						</select>
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
