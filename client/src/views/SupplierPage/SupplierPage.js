import { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import Slideshow from '../../components/Slideshow';
import styles from './SupplierPage.module.css';
import { JacuzziContext } from '../../contexts/JacuzziContext';

const SupplierPage = () => {
    let { id } = useParams();
    const [currentSlideImg, setCurrentSlideImg] = useState(0);
    const {jacuzzis} = useContext(JacuzziContext);
    const [mappedJacuzzis, setMappedJacuzzis] = useState([]);

    useEffect(() => {
        var tempArr = jacuzzis.filter(jacuzzi => jacuzzi.brand === id);
        const mapped = tempArr.map((obj) => (
            {
                textHead: obj.name,
                textP: obj.aboutProduct,
                images: obj.images[0].image
            }
        ));
        console.log(mapped);
        setMappedJacuzzis(mapped);
	}, [jacuzzis]);

    
    
    //console.log(mappedJacuzzis);
	return (
		<Container>
            <Row className="justify-content-center m-3" style={{backgroundColor: '#F2F3F7'}}>
                <img src={'http://localhost:8080/nordpoolLogo_noBackground.png'} alt="" style={{height: '500px' }}></img>
            </Row>
            <Row>
                <h5>
                    "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
                    totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. 
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, 
                    sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. 
                    Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, 
                    sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, 
                    quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? 
                    Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, 
                    vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
                </h5>
            </Row>
            <Row>
                <Col sm={12} className="mx-auto">
                    <div className="border border-dark p-3">
                        <Slideshow
                            interval={null}
                            slideContent={mappedJacuzzis}
                            setIndex={(index) => setCurrentSlideImg(index)}
                            activeIndex={currentSlideImg}
                            styling={styles}
                        />
                    </div>
                    
                </Col>
                 
                
                
                {/* <Col className="" md={1}>
                    <Button></Button>
                </Col>
                <Col md={10}>
                    <div className="text-center p-2" style={{width: '80%', backgroundColor: '#F2F3F7'}}>
                        <h1 className="p-3" style={{borderBottom: "1px solid black"}}>Sarek</h1>
                        <img className="m-4" src={'http://localhost:8080/sarekimg1.png'} style={{width: '70%'}}></img>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                        <Button className="btn-warning m-3">Les Mer</Button>
                    </div>
                </Col>
                <Col>
                    <Button></Button>
                </Col> */}
            </Row>
        </Container>
	);
};
export default SupplierPage;