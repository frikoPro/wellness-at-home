import { Button, Form } from 'react-bootstrap';
import React, { useState } from 'react';
import axios from 'axios';
import Recaptcha from 'react-recaptcha';
const SiteKey = process.env.RECAPTCHA_SITE_KEY;

const SupportForm = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [phone, setPhone] = useState('');
	const [problem, setProblem] = useState('');
	const [message, setMessage] = useState('');
	const [verified, setVerified] = useState();

	const resetForm = () => {
		setName('');
		setEmail('');
		setPhone('');
		setProblem('');
		setMessage('');
	};

	const handleSubmit = (e) => {
		if (verified) {
			e.preventDefault();

			axios
				.post('/sendmail/send', {
					name: name,
					email: email,
					phone: phone,
					problem: problem,
					message: message,
				})
				.then((res) => console.log(res.data))
				.catch((err) => console.log(err.response.data));
			alert('Melding sendt.');
			resetForm();
		} else {
			e.preventDefault();
			alert('Vennligst verifiser at du ikke er en robot.');
		}
	};

	const recaptchaLoaded = () => {
		console.log('Captcha loaded');
	};

	const verifyCaptchaCallback = (response) => {
		if (response) {
			setVerified(true);
		}
	};

	return (
		<Form className="mx-auto" style={{ width: '70%' }} onSubmit={handleSubmit}>
			<Form.Group controlId="supportForm.ControlInputName">
				<Form.Label>
					Navn: <span style={{ color: '#FF0000' }}>*</span>
				</Form.Label>
				<Form.Control
					className="border-dark"
					required
					onChange={(e) => setName(e.target.value)}
					value={name}
				/>
			</Form.Group>
			<Form.Group controlId="supportForm.ControlInputEmail">
				<Form.Label>
					E-post: <span style={{ color: '#FF0000' }}>*</span>
				</Form.Label>
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
				<Form.Label>
					Hva trenger du hjelp med?: <span style={{ color: '#FF0000' }}>*</span>
				</Form.Label>
				<Form.Control
					className="border-dark"
					required
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
			<Recaptcha
				sitekey={SiteKey}
				render="explicit"
				onloadCallback={recaptchaLoaded}
				verifyCallback={verifyCaptchaCallback}
			/>
			<Button className="btn-warning" type="submit">
				Send inn
			</Button>
		</Form>
	);
};

export default SupportForm;
