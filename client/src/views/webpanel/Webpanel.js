import axios from 'axios';
import { useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';

const Webpanel = () => {
	const [images, setImages] = useState([]);

	const uploadImage = () => {
		let data = new FormData();

		data.append('file', images);

		axios({
			method: 'POST',
			url: 'http://localhost:8080/images/upload',
			data: data,
			config: { headers: { 'Content-Type': 'multipart/form-data' } },
		}).then((response) => console.log(response.data));
	};

	return (
		<Container fluid>
			<Row>
				<Col>
					<Card>
						<Card.Body>
							<Card.Title>Last opp bilde</Card.Title>
							<input
								type="file"
								name="file"
								onChange={(e) => setImages(e.target.files[0])}
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
