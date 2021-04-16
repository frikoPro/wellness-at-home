import { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Col, Container, Row, Button } from 'react-bootstrap';
import styles from './SupplierPage.module.css';
import { JacuzziContext } from '../../contexts/JacuzziContext';
import ScrollDiv from '../../components/scrolldiv/ScrollDiv';

const SupplierPage = () => {
    let { id } = useParams();
    const [currentJacuzzi, setCurrentJacuzzi] = useState(0);
    const {jacuzzis} = useContext(JacuzziContext);
    const [mappedJacuzzis, setMappedJacuzzis] = useState([]);

    const getLogo = () => {
        if(id === "Nordpool") {
            return 'http://localhost:8080/nordpoolLogo_noBackground.png'
        } else if(id === "Svenska Bad") {
            return 'http://localhost:8080/svenskaBadLogoNoBackground.png'
        } else if(id === "Svenska Pro") {
            return 'http://localhost:8080/svenskaProLogo.png'
        }
    }

    useEffect(() => {
        var tempArr = jacuzzis.filter(jacuzzi => jacuzzi.brand === id);
        const mapped = tempArr.map((obj) => (
            {
                textHead: obj.name,
                about: obj.aboutProduct,
                image: obj.images[0].image,
                link: obj._id
            }
        ));
        setMappedJacuzzis(mapped);
	}, [jacuzzis, id]);

	return (
		<Container
            className="shadow"
            style={{ backgroundColor: 'white', marginTop: '5%' }}
        >
            <Row className="justify-content-center p-5" style={{backgroundColor: '#F2F3F7'}}>
                <img src={getLogo()} alt="" style={{width: '35%'}}></img>
            </Row>
            <Row className="justify-content-center m-4">
                <h5>
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
                    totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. 
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, 
                    sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                </h5>
            </Row>
            <Row className="justify-content-center mb-1">
                <h2>{id}s spabad</h2>
            </Row>
            <section>
                <Row className="shadow border border-dark m-2">
                    <Col className="m-3">
                        <Row className="justify-content-center">
                            <img style={{width: "50%"}} src={mappedJacuzzis[currentJacuzzi] && `http://localhost:8080/${mappedJacuzzis[currentJacuzzi].image}`} alt=""></img>
                        </Row> 
                        <Row className="justify-content-center">
                            <h1>{mappedJacuzzis[currentJacuzzi] && mappedJacuzzis[currentJacuzzi].textHead}</h1>
                        </Row>
                        <Row className="justify-content-center text-center pr-5 pl-5 mr-5 ml-5">
                            <p>{mappedJacuzzis[currentJacuzzi] && mappedJacuzzis[currentJacuzzi].about}</p>
                        </Row>
                        <Row className="justify-content-center">
                            <Button 
                                href={mappedJacuzzis[currentJacuzzi] && `/spabad/${mappedJacuzzis[currentJacuzzi].link}`}
                                className="shadow btn-warning">Les mer</Button>
                        </Row>
                    </Col> 
                </Row>         
                <Row>
                    <ScrollDiv
                        content={mappedJacuzzis}
                        returnFunction={(index) => setCurrentJacuzzi(index)}
                        size={3}
                    />
                </Row>
            </section>
        </Container>
	);
};
export default SupplierPage;