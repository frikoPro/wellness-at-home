import { useContext, useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import Slideshow from '../../components/Slideshow';
import styles from './SupplierPage.module.css';
import { JacuzziContext } from '../../contexts/JacuzziContext';
import ScrollDiv from '../../components/scrolldiv/ScrollDiv';
import SupplierCardList from '../../components/supplierCard/SupplierCardList';

const SupplierPage = () => {
    let { id } = useParams();
    const [currentSlideImg, setCurrentSlideImg] = useState(0);
    const {jacuzzis} = useContext(JacuzziContext);
    const [mappedJacuzzis, setMappedJacuzzis] = useState([]);
    const history = useHistory();

    useEffect(() => {
        var tempArr = jacuzzis.filter(jacuzzi => jacuzzi.brand === id);
        const mapped = tempArr.map((obj) => (
            {
                name: obj.name,
                textHead: obj.name,
                textP: obj.aboutProduct,
                image: obj.images[0].image
            }
        ));
        setMappedJacuzzis(mapped);
	}, [jacuzzis]);

    const changePage = () => {
        let path = `/spabad/${currentSlideImg.name}`;
        console.log(path);
        history.push(path);
    }

	return (
		<Container
            className="shadow"
            style={{ backgroundColor: 'white', marginTop: '5%' }}
        >
            <Row className="justify-content-center" style={{backgroundColor: '#F2F3F7'}}>
                <img src={'http://localhost:8080/nordpoolLogo_noBackground.png'} alt="" style={{height: '500px' }}></img>
            </Row>
            <Row className="justify-content-center m-4">
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
            <Row className="justify-content-center mb-1">
                <h2>Våre spabad</h2>
            </Row>
            <section>
                <Row>
                    <Col sm={12} className="mx-auto">
                        <div className="p-3">
                            <Slideshow
                                interval={null}
                                indicators={null}
                                slideContent={mappedJacuzzis}
                                //setIndex={(index) => setCurrentSlideImg(index)}
                                setIndex={(event) => onclick={changePage}}
                                activeIndex={currentSlideImg}
                                styling={styles}
                            />
                        </div>
                    </Col>
                </Row>         
                <Row>
                    <ScrollDiv
                        content={mappedJacuzzis}
                        returnFunction={(index) => setCurrentSlideImg(index)}
                        size={2}
                    />
                </Row>
            </section>
        </Container>
	);
};
export default SupplierPage;