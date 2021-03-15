import { useContext, useState } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { FAQContext } from '../../contexts/FAQContext';
import { LoggedInContext } from '../../contexts/LoggedInContext';
import UseForm from '../webpanel/UseForm';
import AddFAQModal from './AddFAQModal';

import FAQ from './FAQ';

const FAQList = () => {
	const LoggedIn = useContext(LoggedInContext);
	const FAQs = useContext(FAQContext);

	const { values, handleChange, submitData, returnErrors, onSuccess } = UseForm(
		{
			initialValues: { answer: '', question: '' },
			url: 'http://localhost:8080/FAQ/',
		}
	);

	const [modalShow, setShow] = useState(false);

	return (
		<Row className="justify-content-center">
			{FAQs.map((question, index) => (
				<Col sm={12} key={index}>
					<FAQ {...question} key={index} />
				</Col>
			))}

			{LoggedIn ? (
				<Col sm={10} className="text-center mt-5">
					<Button onClick={() => setShow(true)}>Legg til</Button>
				</Col>
			) : null}

			<AddFAQModal
				FAQ={values}
				handleChange={handleChange}
				uploadData={submitData}
				show={modalShow}
				onHide={() => setShow(false)}
				errors={returnErrors}
				onSuccess={onSuccess}
			/>
		</Row>
	);
};

export default FAQList;
