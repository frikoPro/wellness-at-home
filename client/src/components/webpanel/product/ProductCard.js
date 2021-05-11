import { useContext, useEffect, useState } from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import { ProductsContext } from '../../../contexts/ProductsContext';
import UseForm from '../UseForm';
import UpdateProductModal from './UpdateProductModal';

const ProductCard = ({ product }) => {
	const [modalShow, setModalShow] = useState(false);

	const userInput = UseForm({
		initialValues: { ...product },
	});

	useEffect(() => {
		userInput.setValues(product);
	}, [modalShow]);

	const {
		updateData,
		returnErrors,
		errors,
		onSuccess,
		deleteData,
	} = useContext(ProductsContext);

	return (
		<Card>
			<Card.Body>
				<Card.Title>{product.name}</Card.Title>
				<Card.Img src={`/${product.images[0].image}`} alt="" />
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
						<Button
							className="btn-danger mr-5"
							onClick={() => deleteData(product._id)}>
							Delete
						</Button>
					</Col>
				</Row>
			</Card.Footer>
			{modalShow ? (
				<UpdateProductModal
					show={modalShow}
					onHide={() => setModalShow(false)}
					userInput={userInput}
					returnErrors={returnErrors}
					onSuccess={onSuccess}
					errors={errors}
					updateData={updateData}
				/>
			) : null}
		</Card>
	);
};

export default ProductCard;
