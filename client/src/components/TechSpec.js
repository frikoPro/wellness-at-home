import { Col, Row } from 'react-bootstrap';
import TableList from './TableList';

const TechSpec = ({ techSpec }) => {
	return techSpec ? (
		<section>
			<Row className="justify-content-center align-items-center p-5">
				<Col className={`text-left margin-bottom-line`}>
					<h1>Tekniske spesifikasjoner</h1>
				</Col>
			</Row>
			<Row
				style={{ maxHeight: '200px', overflowY: 'auto' }}
				className="justify-content-center">
				<Col sm={11}>
					<TableList
						values={techSpec}
						removeValue={() => console.log('test')}
						name="techSpec"
					/>
				</Col>
			</Row>
		</section>
	) : null;
};

export default TechSpec;
