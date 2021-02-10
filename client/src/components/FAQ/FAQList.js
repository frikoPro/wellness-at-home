import { Col, Row } from 'react-bootstrap';
import FAQ from './FAQ';

const FAQList = ({ FAQs }) => {
	return (
		<Row className="justify-content-center">
			{FAQs.map((question, index) => (
				<Col sm={10} key={index}>
					<FAQ {...question} key={index} />
				</Col>
			))}
		</Row>
	);
};

export default FAQList;
