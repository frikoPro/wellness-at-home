import { Button, Card, Col, Form, Row } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import axios from 'axios';

const LoginPage = () => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [response, setResponse] = useState({ valid: false });

	const login = () => {
		axios
			.post('http://localhost:8080/users/login', {
				username: username,
				password: password,
			})
			.then((res) => {
				console.log(res.data);
				setResponse(res.data);
			})
			.catch((err) => {
				setResponse(err.response.data);
				console.log(err.response.data);
			});
	};

	useEffect(() => {
		if (response.valid) {
			setTimeout(() => {
				window.location.reload();
			}, 500);
		}
	}, [response]);

	return (
		<div
			style={{
				minHeight: '88vh',
				display: 'flex',
			}}>
			<Card className="mx-auto my-auto shadow w-25">
				<Card.Body>
					<Card.Title>Login</Card.Title>
					<Form>
						<Form.Group>
							<Form.Label>Brukernavn</Form.Label>
							<Form.Control
								placeholder="bruker123"
								onChange={(e) => setUsername(e.target.value)}
							/>
						</Form.Group>
						<Form.Group>
							<Form.Label>Passord</Form.Label>
							<Form.Control
								placeholder="*********"
								type="password"
								onChange={(e) => setPassword(e.target.value)}
							/>
						</Form.Group>
					</Form>
				</Card.Body>
				<Card.Footer>
					<Row className="align-items-center">
						<Col sm={4}>
							<Button className="btn-warning" onClick={login}>
								Logg inn
							</Button>
						</Col>

						{response ? (
							<Col>
								<Card.Text
									className={response.valid ? 'text-success' : 'text-danger'}>
									{response.message}
								</Card.Text>
							</Col>
						) : null}
					</Row>
				</Card.Footer>
			</Card>
		</div>
	);
};

export default LoginPage;
