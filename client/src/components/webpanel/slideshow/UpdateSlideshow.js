import { useContext, useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { SlideshowContext } from '../../../contexts/SlideshowContext';
import ScrollDiv from '../../scrolldiv/ScrollDiv';
import UseForm from '../UseForm';
import UpdateSlideModal from './UpdateSlideModal';

const UpdateSlideshow = () => {
  const slideshows = useContext(SlideshowContext);

  const [modalShow, setModalShow] = useState(false);

  const [selectedSlide, setSelected] = useState({});

  const {
    updateData,
    values,
    handleChange,
    handleImage,
    setValues,
    onSuccess,
    returnErrors,
    deleteData,
  } = UseForm({
    initialValues: { ...selectedSlide },
    url: 'http://localhost:8080/slideshow/',
  });

  useEffect(() => {
    setValues({ ...selectedSlide });
  }, [modalShow, selectedSlide]);

  const onSelect = (id) => {
    setSelected(slideshows.find((slide) => slide._id === id));
  };

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
        handleImage={handleImage}
        error={returnErrors}
        deleteData={deleteData}
      />
    </Container>
  );
};

export default UpdateSlideshow;
