import { Button, Form } from 'react-bootstrap';
import React, { useState } from 'react';
import axios from 'axios';

const SupportForm = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [phone, setPhone] = useState('');
	const [problem, setProblem] = useState('');
	const [message, setMessage] = useState('');

	const resetForm = () => {
		setName('');
		setEmail('');
		setPhone('');
		setProblem('');
		setMessage('');
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		axios
			.post('http://localhost:8080/sendmail/send', {
				name: name,
				email: email,
				phone: phone,
				problem: problem,
				message: message,
			})
			.then((res) => console.log(res.data))
			.catch((err) => console.log(err.response.data));
            alert("Melding sendt.");
            resetForm();
	};

	return (
		<Form className="mx-auto" style={{ width: '70%' }} onSubmit={handleSubmit}>
			<Form.Group controlId="supportForm.ControlInputName">
				<Form.Label>Navn:</Form.Label>
				<Form.Control
					className="border-dark"
					required
					onChange={(e) => setName(e.target.value)}
					value={name}
				/>
			</Form.Group>
			<Form.Group controlId="supportForm.ControlInputEmail">
				<Form.Label>E-post:</Form.Label>
				<Form.Control
					className="border-dark"
					type="email"
					placeholder="navn@eksempel.no"
					required
					onChange={(e) => setEmail(e.target.value)}
					value={email}
				/>
			</Form.Group>
			<Form.Group controlId="supportForm.ControlInputPhone">
				<Form.Label>Telefon:</Form.Label>
				<Form.Control
					className="border-dark"
					onChange={(e) => setPhone(e.target.value)}
					value={phone}
				/>
			</Form.Group>
			<Form.Group controlId="supportForm.ControlInputProblem">
				<Form.Label>Type problem:</Form.Label>
				<Form.Control
					className="border-dark"
					onChange={(e) => setProblem(e.target.value)}
					value={problem}
				/>
			</Form.Group>
			<Form.Group controlId="exampleForm.ControlTextareaMessage">
				<Form.Label>Melding:</Form.Label>
				<Form.Control
					className="border-dark"
					as="textarea"
					rows={5}
					onChange={(e) => setMessage(e.target.value)}
					value={message}
				/>
			</Form.Group>
			<Button className="btn-warning" type="submit">
				Send inn
			</Button>
		</Form>
	);
};

export default SupportForm;
