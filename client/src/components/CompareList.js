import { Col, Row } from 'react-bootstrap';
import {useEffect, useState } from 'react';
import TableList from '../components/TableList';
import StarRating from '../components/StarRating';

const CompareList = ({selectedJacuzzi, jacuzzis}) => {
    const [averageRating, setAverageRating] = useState(0);

    useEffect(() => {
        let tempObj = jacuzzis.find((product) => product.index === selectedJacuzzi);
        console.log(tempObj);

		if (tempObj !== undefined) {
			const sum = (acc, val) => acc.rating + val.rating;

			if (tempObj.reviews.length > 0) {
				if (tempObj.reviews.length > 1) {
					setAverageRating(
						Math.round(
							tempObj.reviews.reduce(sum) / tempObj.reviews.length
						)
					);
				} else {
					setAverageRating(tempObj.reviews[0].rating);
				}
			}
		}
    }, [selectedJacuzzi, jacuzzis]);
    

    return (
        <Col className="border border-dark m-3">
            <Row className="justify-content-center p-3">
                <img style={{width: "50%"}} src={jacuzzis[selectedJacuzzi] && `http://localhost:8080/${jacuzzis[selectedJacuzzi].image}`} alt=""></img>
            </Row>                    
            <Row className="justify-content-center text-center">
                <h1>{jacuzzis[selectedJacuzzi] && jacuzzis[selectedJacuzzi].name}</h1>
            </Row>
            <Row className="justify-content-center">
                <StarRating rating={averageRating} size={2} />
            </Row>
            <Row className="justify-content-center">
                <h3>Pris: {jacuzzis[selectedJacuzzi] && jacuzzis[selectedJacuzzi].price},-</h3>
            </Row>
            <Row className="ml-1">
                <h3>Tekniske Egenskaper:</h3>
            </Row>
            <TableList
                values={jacuzzis[selectedJacuzzi] && (jacuzzis[selectedJacuzzi].specs || [])}
                name="specs"
            />
        </Col>
    );
};

export default CompareList;