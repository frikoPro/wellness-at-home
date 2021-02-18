import { useContext, useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';

import { JacuzziContext } from '../../contexts/JacuzziContext';
import ScrollDiv from '../scrolldiv/ScrollDiv';
import UpdateJacuzziModal from './UpdateJacuzziModal';

const UpdateJacuzzi = () => {
	const jacuzzis = useContext(JacuzziContext);

	const [mappedJacuzzis, setMappedJacuzzis] = useState([]);

	const [modalShow, setModalShow] = useState(false);

	const [selectedJacuzzi, setSelectedJacuzzi] = useState({
		name: '',
		brand: '',
		description: '',
		aboutProduct: '',
		price: '',
		techSpec: [],
		relatedProducts: [],
		images: [],
	});

	useEffect(() => {
		const mappedArr = jacuzzis.map((item) => ({
			image: item.images[0].image,
			brand: item.brand,
			name: item.name,
			id: item._id,
		}));

		setMappedJacuzzis([...mappedArr]);
	}, [jacuzzis]);

	const onSelect = (id) => {
		setSelectedJacuzzi(jacuzzis.find((item) => item._id === id));
	};

	return (
		<>
			<Card>
				<Card.Body>
					<Card.Title>Velg spabad som skal oppdateres</Card.Title>
					<Row>
						<Col>
							<h5>Nordpool</h5>
						</Col>
					</Row>
					<ScrollDiv
						content={mappedJacuzzis.filter((item) => item.brand === 'Nordpool')}
						size={3}
						returnFunction={(index, id) => {
							setModalShow(true);
							onSelect(id);
						}}
					/>
				</Card.Body>
			</Card>
			<UpdateJacuzziModal
				jacuzzi={selectedJacuzzi}
				show={modalShow}
				onHide={() => setModalShow(false)}
			/>
		</>
	);
};

export default UpdateJacuzzi;
