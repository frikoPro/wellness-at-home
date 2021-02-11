import axios from 'axios';
import { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';

const Webpanel = () => {
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

	useEffect(() => {
		axios
			.get('http://localhost:8080/products')
			.then((response) => console.log(response.data));
	});

	return (
		<Container fluid>
			<Row>
				<Col>
					<Card>
						<Card.Body>
							<Card.Title>Last opp bilde</Card.Title>
							<input
								type="file"
								name="multi-files"
								onChange={(e) => setImages([...e.target.files])}
								multiple
							/>
							<input
								onClick={uploadImage}
								type="button"
								value="Upload Image"></input>
							<img src={'http://localhost:8080/test.jpg'}></img>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Container>
	);
};

export default Webpanel;
