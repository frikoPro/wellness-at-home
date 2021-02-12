import axios from 'axios';
import { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';

const AddProduct = () => {
	const [newProduct, setNewProduct] = useState({
		name: '',
		affiliation: [],
		category: '',
		description: '',
		price: '',
		techSpec: [],
		images: [],
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

	return (
		<Card>
			<Card.Body>
				<Card.Title>Legg til tilbehør</Card.Title>
				<Form>
					<Form.Group>
						<Form.Label>Navn</Form.Label>
						<Form.Control
							placeholder="navn"
							onChange={(e) =>
								setNewProduct({ ...newProduct, name: e.target.value })
							}
						/>
					</Form.Group>
					<Form.Group>
						<Form.Label>Kategori</Form.Label>
						<select
							className="form-control"
							onChange={(e) =>
								setNewProduct({ ...newProduct, category: e.target.value })
							}>
							<option selected disabled>
								Velg kategori
							</option>
							<option>filter</option>
							<option>kontroll panel</option>
							<option>pumper</option>
							<option>Saltvannssystem</option>
							<option>varmeelement</option>
							<option>WiFi styring</option>
							<option>Lokkløftere</option>
							<option>Spa tilbehør</option>
							<option>Thermolokk</option>
							<option>vannkjemi</option>
						</select>
					</Form.Group>
					<Form.Group>
						<Form.Label>Legg til tilhørighet</Form.Label>
						<select
							className="form-control"
							onChange={(e) =>
								setNewProduct({ ...newProduct, affiliation: e.target.value })
							}>
							<option disabled selected>
								Velg merke
							</option>
							<option>Alle bad</option>
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
						<Form.Control
							placeholder="tekniske spesifikasjoner"
							onChange={(e) =>
								setNewProduct({ ...newProduct, techSpec: e.target.value })
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

export default AddProduct;
