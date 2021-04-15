import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import TableList from '../../TableList';
import AddInviteModal from './AddInviteModal';
import UseForm from '../UseForm';
import { JacuzziContext } from '../../../contexts/JacuzziContext';
import { ReviewInvContext } from '../../../contexts/ReviewInvContext';

const Invites = () => {
	const { jacuzzis } = useContext(JacuzziContext);

	const invites = useContext(ReviewInvContext);

	const [links, setLinks] = useState([]);

	const {
		handleChange,
		submitData,
		onSuccess,
		deleteById,
		returnErrors,
	} = UseForm({
		initialValues: { mail: '' },
		url: 'http://localhost:8080/reviewinvites/',
	});

	const [modalShow, setModal] = useState(false);

	const onDelete = (name, i) => {
		deleteById(links[i]._id);
	};

	useEffect(() => {
		if (invites.length > 0 && jacuzzis.length > 0) {
			const invTemp = invites.map((inv) => ({
				Epost: inv.mail,
				Produkt: jacuzzis.find((item) => item._id === inv.product).name,
				_id: inv._id,
			}));
			setLinks(invTemp);
		}
	}, [invites, jacuzzis]);

	return (
		<>
			<Container fluid>
				<Card>
					<Card.Body>
						<Card.Title>Anmeldelser</Card.Title>
						<Button onClick={() => setModal(true)}>Legg til</Button>
						<TableList values={links} name="" removeValue={onDelete} />
						<Card.Text className="text-success">{onSuccess}</Card.Text>
					</Card.Body>
				</Card>
			</Container>
			<AddInviteModal
				show={modalShow}
				onHide={() => setModal(false)}
				handleChange={handleChange}
				success={onSuccess}
				submitData={submitData}
				error={returnErrors}
			/>
		</>
	);
};

export default Invites;
