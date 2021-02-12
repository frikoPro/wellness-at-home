import axios from 'axios';
import { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';

const Jacuzzis = () => {
	const [newProduct, setNewProduct] = useState({
		name: '',
		brand: '',
		description: '',
		price: '',
		techSpec: [],
		relatedProducts: [],
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
						<Form.Control
							placeholder="tekniske spesifikasjoner"
							onChange={(e) =>
								setNewProduct({ ...newProduct, techSpec: e.target.value })
							}
						/>
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
