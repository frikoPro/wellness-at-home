import axios from 'axios';
import { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';

const Webpanel = () => {
	const [image, setImage] = useState({ preview: '', raw: '' });

	const uploadImage = () => {
		let file = image.raw;

		let data = new FormData();

		data.append('file', file);

		console.log(file);

		axios({
			method: 'post',
			url: 'http://localhost:8080/images/upload',
			data: data,
			config: { headers: { 'content-type': 'multipart/form-data' } },
		}).then((response) => console.log(response.data));
	};

	const handleChange = (e) => {
		if (e.target.files.length) {
			setImage({
				preview: URL.createObjectURL(e.target.files[0]),
				raw: e.target.files[0],
			});
		}
	};

	useEffect(() => {
		axios
			.get('http:/localhost:5001/products/353')
			.then((response) => console.log(response.data));
	});

	return (
		<Container fluid>
			<Row>
				<Col>
					<Card>
						<Card.Body>
							<Card.Title>Last opp bilde</Card.Title>
							<input type="file" id="upload" onChange={handleChange} />
							<input onClick={uploadImage} type="submit" />
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Container>
	);
};

export default Webpanel;
