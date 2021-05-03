import { useContext, useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Col, Container, Row, Button } from 'react-bootstrap';
import styles from './SupplierPage.module.css';
import { JacuzziContext } from '../../contexts/JacuzziContext';
import ScrollDiv from '../../components/scrolldiv/ScrollDiv';

const SupplierPage = () => {
	let { id } = useParams();
	const [currentJacuzzi, setCurrentJacuzzi] = useState(0);
	const { jacuzzis } = useContext(JacuzziContext);
	const [mappedJacuzzis, setMappedJacuzzis] = useState([]);

	const getLogo = () => {
		if (id === 'Nordpool') {
			return '/nordpoolLogo_noBackground.png';
		} else if (id === 'Svenska Bad') {
			return '/svenskaBadLogoNoBackground.png';
		} else if (id === 'Svenska Pro') {
			return '/SvenskaProLogo.png';
		}
	};

	useEffect(() => {
		var tempArr = jacuzzis.filter((jacuzzi) => jacuzzi.brand === id);
		const mapped = tempArr.map((obj) => ({
			textHead: obj.name,
			about: obj.aboutProduct,
			image: obj.images[0].image,
			link: obj._id,
		}));
		setMappedJacuzzis(mapped);
	}, [jacuzzis, id]);

	return (
		<Container
			className="shadow"
			style={{ backgroundColor: 'white', marginTop: '5%' }}>
			<Row
				className="justify-content-center p-5"
				style={{ backgroundColor: '#F2F3F7' }}>
				<Col sm={6}>
					<img src={getLogo()} alt="" className="w-100"></img>
				</Col>
				
			</Row>
			<Row className="justify-content-center m-4">
				<Col>
					<h5>
						Sed ut perspiciatis unde omnis iste natus error sit voluptatem
						accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
						ab illo inventore veritatis et quasi architecto beatae vitae dicta
						sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
						aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
						qui ratione voluptatem sequi nesciunt.
					</h5>
				</Col>
			</Row>
			<Row className="justify-content-center mb-1 text-center">
				<Col>
					<h2>{id}s spabad</h2>
				</Col>
			</Row>
			<section>
				<Row className="shadow border border-dark m-2">
					<Col className="m-3">
						<Row className="justify-content-center">
							<Col sm={7}>
								<img
									className="w-100"
									src={
										mappedJacuzzis[currentJacuzzi] &&
										`/${mappedJacuzzis[currentJacuzzi].image}`
									}
									alt="">
								</img>
							</Col>
						</Row>
						<Row className="justify-content-center text-center">
							<Col>
								<h1>
									{mappedJacuzzis[currentJacuzzi] &&
										mappedJacuzzis[currentJacuzzi].textHead}
								</h1>
							</Col>
						</Row>
						<Row className="justify-content-center text-center">
							<Col sm={10}>
								<p>
									{mappedJacuzzis[currentJacuzzi] &&
										mappedJacuzzis[currentJacuzzi].about}
								</p>
							</Col>
						</Row>
						<Row>
							<Col sm={12} className="justify-content-center text-center">
								<Button
									as={Link}
									to={
										mappedJacuzzis[currentJacuzzi] &&
										`/spabad/${mappedJacuzzis[currentJacuzzi].link}`
									}
									className="shadow btn-warning">
									Les mer
								</Button>
							</Col>
						</Row>
					</Col>
				</Row>
				<Row>
					<Col>
						<ScrollDiv
							content={mappedJacuzzis}
							returnFunction={(index) => setCurrentJacuzzi(index)}
							size={3}
						/>
					</Col>
					
				</Row>
			</section>
		</Container>
	);
};
export default SupplierPage;
