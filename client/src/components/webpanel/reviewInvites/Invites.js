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

	const {
		invites,
		onSuccess,
		submitData,
		deleteData,
		returnErrors,
	} = useContext(ReviewInvContext);

	const [links, setLinks] = useState([]);

	const { handleChange, values } = UseForm({
		initialValues: { mail: '' },
	});

	const [modalShow, setModal] = useState(false);

	useEffect(() => {
		const invTemp = invites.map((inv) => ({
			Epost: inv.mail,
			Produkt: jacuzzis.find((item) => item._id === inv.product).name,
			_id: inv._id,
		}));
		setLinks(invTemp);
	}, [invites, jacuzzis]);

	return (
		<>
			<Container fluid>
				<Card>
					<Card.Body>
						<Card.Title>Anmeldelser</Card.Title>
						<Button onClick={() => setModal(true)}>Legg til</Button>
						<TableList
							values={links}
							name=""
							removeValue={(name, i) => deleteData(i)}
						/>
						<Card.Text className="text-success">{onSuccess}</Card.Text>
					</Card.Body>
				</Card>
			</Container>
			<AddInviteModal
				show={modalShow}
				onHide={() => setModal(false)}
				handleChange={handleChange}
				success={onSuccess}
				submitData={() => submitData(values)}
				error={returnErrors}
			/>
		</>
	);
};

export default Invites;
