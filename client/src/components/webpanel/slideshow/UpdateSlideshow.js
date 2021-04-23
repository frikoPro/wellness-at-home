import { useContext, useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { SlideshowContext } from '../../../contexts/SlideshowContext';
import ScrollDiv from '../../scrolldiv/ScrollDiv';
import UseForm from '../UseForm';
import UpdateSlideModal from './UpdateSlideModal';

const UpdateSlideshow = () => {
	const { slideshows } = useContext(SlideshowContext);

	const [modalShow, setModalShow] = useState(false);

	const [selectedSlide, setSelected] = useState({});

	const { values, handleChange, handleImages, setValues } = UseForm({
		initialValues: { ...selectedSlide },
	});

	useEffect(() => {
		setValues({ ...selectedSlide });
	}, [modalShow, selectedSlide]);

	const onSelect = (id) => {
		setSelected(slideshows.find((slide) => slide._id === id));
	};

	const { deleteData, onSuccess, returnErrors, updateData } = useContext(
		SlideshowContext
	);

	return (
		<Container fluid>
			<ScrollDiv
				content={slideshows}
				size={6}
				returnFunction={(i, id) => {
					onSelect(id);
					setModalShow(true);
				}}
			/>
			<UpdateSlideModal
				show={modalShow}
				onHide={() => setModalShow(false)}
				onSuccess={onSuccess}
				updateData={updateData}
				values={values}
				handleChange={handleChange}
				handleImage={handleImages}
				error={returnErrors}
				deleteData={deleteData}
			/>
		</Container>
	);
};

export default UpdateSlideshow;
