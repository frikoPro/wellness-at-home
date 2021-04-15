import { Col, Container, Form, Row } from 'react-bootstrap';
import { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { JacuzziContext } from '../../contexts/JacuzziContext';
import CompareList from '../../components/CompareList';

const ComparePage = () => {
    let { id } = useParams();
    const {jacuzzis} = useContext(JacuzziContext);
    const [mappedJacuzzis, setMappedJacuzzis] = useState([]);
    const [jacuzzi1, setJacuzzi1] = useState(0);
    const [jacuzzi2, setJacuzzi2] = useState(0);

    useEffect(() => {
        const mapped = jacuzzis.map((obj, key) => (
            {
                index: key,
                name: obj.name,
                specs: obj.techSpec,
                image: obj.images[0].image,
                link: obj._id,
                price: obj.price,
                reviews: obj.userReviews
            }
        ));
        setMappedJacuzzis(mapped);
        var jac = mapped.find(jacuzzi => jacuzzi.link === id);
        setJacuzzi1(jac && jac.index);
	}, [jacuzzis, id]);

    return (
        <Container
            className="shadow"
            style={{ backgroundColor: 'white', marginTop: '5%' }}
        >
            <Row className="justify-content-center p-3">
                <h1>Sammenlign Bad</h1>
            </Row>
            <Row>
                <Col sm={6}>
                    <Form.Control as="select" value={jacuzzi1} onChange={e => setJacuzzi1(e.target.value)}>
                        {jacuzzis.map((jac, index ) => (
                            <option value={index}>{jac.name}</option>
                        ))}
                    </Form.Control>
                </Col>
                <Col sm={6}>
                    <Form.Control as="select" value={jacuzzi2} onChange={e => setJacuzzi2(e.target.value)}>
                        {jacuzzis.map((jac, index ) => (
                            <option value={index}>{jac.name}</option>
                        ))}
                    </Form.Control>
                </Col>
            </Row>
            <Row className="justify-content-center">
                <CompareList selectedJacuzzi={jacuzzi1} jacuzzis={mappedJacuzzis}></CompareList>
                <CompareList selectedJacuzzi={jacuzzi2} jacuzzis={mappedJacuzzis}></CompareList>
            </Row>
        </Container>
    );
};
export default ComparePage;