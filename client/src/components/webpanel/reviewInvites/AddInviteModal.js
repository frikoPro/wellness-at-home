import { useContext, useEffect, useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { JacuzziContext } from '../../../contexts/JacuzziContext';

const AddInviteModal = (props) => {
	const { handleChange, submitData, success, error } = props;

	const { jacuzzis, brands } = useContext(JacuzziContext);

	const [mappedJacuzzis, setMapped] = useState([]);

	useEffect(() => {
		const arr = [];

		brands.forEach((brand) => {
			const filtered = jacuzzis.filter((item) => item.brand === brand);

			arr.push({ brand: brand, jacuzzis: filtered });
		});

		setMapped(arr);
	}, [jacuzzis]);

	return (
		<Modal
			{...props}
			size="lg"
			aria-labelledby="contained-modal-title-vcenter"
			centered>
			<Modal.Header closeButton>
				<Modal.Title id="contained-modal-title-vcenter">
					Legg til anmeldelse
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Form>
					<Form.Group>
						<Form.Label>Epost</Form.Label>
						<Form.Control
							placeholder="Epost"
							type="email"
							onChange={handleChange}
							name="mail"
						/>
						<Form.Text className="text-danger">{error('mail')}</Form.Text>
					</Form.Group>
					<Form.Group>
						<Form.Label>Velg spabad</Form.Label>
						<select
							className="form-control"
							onChange={handleChange}
							name="product"
							defaultValue="1">
							<option value="1" disabled>
								Velg spabad
							</option>
							{mappedJacuzzis.map((item, i) => (
								<optgroup label={item.brand} key={i}>
									{item.jacuzzis.map((el, j) => (
										<option value={el._id} key={j}>
											{el.name}
										</option>
									))}
								</optgroup>
							))}
						</select>
						<Form.Text className="text-danger">{error('product')}</Form.Text>
					</Form.Group>
				</Form>
			</Modal.Body>
			<Modal.Footer>
				<Button onClick={submitData}>Lagre</Button>
				<Form.Text className="text-success">{success}</Form.Text>
			</Modal.Footer>
		</Modal>
	);
};

export default AddInviteModal;
