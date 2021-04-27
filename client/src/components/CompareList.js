import { Col, Row } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import TableList from '../components/TableList';
import StarRating from '../components/StarRating';
import { Link } from 'react-router-dom';

const CompareList = ({ selectedJacuzzi, jacuzzis }) => {
	const [averageRating, setAverageRating] = useState(0);

	useEffect(() => {
		if (jacuzzis[selectedJacuzzi])
			setAverageRating(jacuzzis[selectedJacuzzi].averageRating);
	}, [jacuzzis, selectedJacuzzi]);

	return (
		<Col className="border border-dark m-3">
			<Row className="justify-content-center p-3">
				<img
					style={{ width: '50%' }}
					src={
						jacuzzis[selectedJacuzzi] && `/${jacuzzis[selectedJacuzzi].image}`
					}
					alt=""></img>
			</Row>
			<Row className="justify-content-center text-center">
				<Link
					to={
						jacuzzis[selectedJacuzzi] &&
						`/spabad/${jacuzzis[selectedJacuzzi].link}`
					}>
					<h1>{jacuzzis[selectedJacuzzi] && jacuzzis[selectedJacuzzi].name}</h1>
				</Link>
			</Row>
			<Row className="justify-content-center">
				<StarRating rating={averageRating} size={2} />
			</Row>
			<Row className="justify-content-center">
				<h3>
					Pris: {jacuzzis[selectedJacuzzi] && jacuzzis[selectedJacuzzi].price},-
				</h3>
			</Row>
			<Row className="ml-1">
				<h3>Tekniske Egenskaper:</h3>
			</Row>
			<TableList
				values={
					jacuzzis[selectedJacuzzi] && (jacuzzis[selectedJacuzzi].specs || [])
				}
				name="specs"
			/>
		</Col>
	);
};

export default CompareList;
