import { Col, Container, Row } from 'react-bootstrap';

const AboutUsPage = () => {

	return (
		<Container className="shadow" style={{ backgroundColor: 'white', marginTop: '5%' }}>
            <Row className="justify-content-center p-3">
                <img src="http://localhost:8080/wellnessLogo.png" alt=""></img>
            </Row>
            <Row className="margin-bottom-line m-3">
                <Col>
                    <h3>Litt om oss</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </Col>
                <Col className="mb-3">
                    <img src="http://localhost:8080/Earl4-1.png" alt="" style={{width: '100%'}}></img>
                </Col>
            </Row>
            <Row className="m-4">
                <h3>Hvem er vi?</h3>
            </Row>
            <Row className="margin-bottom-line margin-top-line m-3 pb-4">
                <Col sm={5}>
                    <img src="http://localhost:8080/default-profile-icon-16.png" alt="" style={{width: '100%'}}></img>
                </Col>
                <Col className="shadow mt-5 pt-5" sm={7}>
                    <h4>Hans Petter Sandvold</h4>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p> 
                </Col>
            </Row>
            <Row className="m-3 pb-5">
            <Col className="shadow mt-5 pt-5" sm={7}>
                    <h4>Kenneth Nygård</h4>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </Col>
                <Col sm={5}>
                    <img src="http://localhost:8080/default-profile-icon-16.png" alt="" style={{width: '100%'}}></img>
                </Col>
            </Row>
		</Container>
	);
};
export default AboutUsPage;
