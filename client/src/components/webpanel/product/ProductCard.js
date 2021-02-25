import { useState } from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import UseForm from '../UseForm';
import UpdateProductModal from './UpdateProductModal';

const ProductCard = ({ product }) => {
  const [modalShow, setModalShow] = useState(false);

  const {
    values,
    handleChange,
    returnErrors,
    setValues,
    onSuccess,
    setError,
    handleEvent,
    handleImages,
    removeValues,
    deleteData,
    updateData,
  } = UseForm({
    initialValues: { ...product },
    url: 'http://localhost:8080/products/',
  });

  const resetValues = () => {
    setValues(product);
    setError(null);
  };

  return (
    <Card>
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Img
          src={`http://localhost:8080/${product.images[0].image}`}
          alt=""
        />
      </Card.Body>
      <Card.Footer>
        <Row>
          <Col>
            <Button
              className="btn-warning ml-5 mr-2"
              onClick={() => setModalShow(true)}>
              Update
            </Button>
          </Col>
          <Col>
            <Button className="btn-danger mr-5" onClick={deleteData}>
              Delete
            </Button>
          </Col>
        </Row>
        <Row>
          <Col>
            {onSuccess ? (
              <Card.Text className="text-success text-center mt-4">
                {onSuccess}
              </Card.Text>
            ) : null}
          </Col>
        </Row>
      </Card.Footer>
      <UpdateProductModal
        resetValues={resetValues}
        show={modalShow}
        onHide={() => setModalShow(false)}
        handleChange={handleChange}
        handleEvent={handleEvent}
        returnErrors={returnErrors}
        handleImages={handleImages}
        removeValues={removeValues}
        values={values}
        onSuccess={onSuccess}
        updateData={updateData}
      />
    </Card>
  );
};

export default ProductCard;
