import { Col, Row } from 'react-bootstrap';
import TableList from './TableList';

const TechSpec = (props) => {
	return props.values ? (
		<section>
			<Row className="justify-content-center align-items-center p-5">
				<Col className={`text-left margin-bottom-line`}>
					<h1>Tekniske spesifikasjoner</h1>
				</Col>
			</Row>
			<Row className="justify-content-center">
				<Col sm={11}>
					<TableList
						{...props}
						values={props.values.techSpec}
						name="techSpec"
					/>
				</Col>
			</Row>
		</section>
	) : null;
};

export default TechSpec;
