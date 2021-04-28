import { useContext, useEffect, useRef, useState } from 'react';
import { Col, Nav, Navbar, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { JacuzziContext } from '../../contexts/JacuzziContext';
import { ScrollContext } from '../../contexts/ScrollContext';
import DropdownSection from './DropdownSection';
import { Handlekurv, QtyCartCount } from './NavbarIcons';
import styling from './NavigationBar.module.css';
import { CartContext } from '../../contexts/CartContext';

const NavigationBar = () => {
	const { navbar } = useContext(ScrollContext);

	const { cart } = useContext(CartContext);

	const { opacity, navCollapsed } = navbar;

	const [open, setOpen] = useState(false);

	const dropdown = useRef(null);

	const { jacuzzis, brands } = useContext(JacuzziContext);

	const [mappedJacuzzis, setMappedJacuzzis] = useState([]);

	useEffect(() => {
		const arr = [];

		if (brands.length > 0) {
			brands.forEach((brand) => {
				const filtered = jacuzzis.filter((item) => item.brand === brand);
				arr.push({ brand: brand, jacuzzis: [...filtered] });
			});

			setMappedJacuzzis(arr);
		}
	}, [jacuzzis, brands]);

	return (
		<NavBarStyled
			opacity={opacity}
			collapseOnSelect
			expand="lg"
			fixed="top"
			variant="dark"
			className={styling.notOpacity}>
			{navCollapsed ? (
				<Row>
					<Col className="p-0">
						<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					</Col>

					<Col className="align-self-center p-0">
						<QtyCartCount cart={cart} />
					</Col>
				</Row>
			) : null}
			<Navbar.Brand as={Link} to="/">
				<img src={'/wellnessLogo2.png'} alt="" style={{ height: '61px' }}></img>
			</Navbar.Brand>

			<Navbar.Collapse id="responsive-navbar-nav">
				<Nav className="mr-auto ml-auto ">
					{/* Had to make a div on top of Nav.Link Spabad to fire the event correctly */}
					<div
						style={{
							position: 'absolute',
							height: '61px',
							width: '61px',
						}}
						onMouseOver={() => setOpen(true)}
						onMouseOut={() => setOpen(false)}></div>
					<Nav.Link
						style={{ zIndex: '1' }}
						onMouseOver={() => setOpen(true)}
						onMouseOut={() => setOpen(false)}
						className={`${styling.navItem} nav-text-color hover-gold`}>
						Våre Spabad
					</Nav.Link>
					<Dropdown
						onMouseOver={() => setOpen(true)}
						onMouseOut={() => setOpen(false)}
						ref={dropdown}
						dropdownref={dropdown}
						iscollapsed={navCollapsed}
						open={open}
						className={`shadow ${styling.dropmenu}`}>
						<DropdownSection styling={styling} section={mappedJacuzzis} />
					</Dropdown>
					<Nav.Link
						as={Link}
						to="/nettbutikk"
						className={`${styling.navItem} nav-text-color hover-gold`}>
						Tilbehør
					</Nav.Link>
					<Nav.Link
						as={Link}
						to="/Blogg"
						className={`${styling.navItem} nav-text-color hover-gold`}>
						Blogg
					</Nav.Link>
					<Nav.Link
						as={Link}
						to="/Arrangementer"
						className={`${styling.navItem} nav-text-color hover-gold`}>
						Arrangementer
					</Nav.Link>
					<Nav.Link
						as={Link}
						to="/Kundeservice"
						className={`${styling.navItem} nav-text-color hover-gold`}>
						Kundeservice
					</Nav.Link>
				</Nav>
				<Nav>
					<Nav.Link
						as={Link}
						to="/handlekurv"
						style={!navCollapsed ? { height: '50px', width: '90px' } : null}
						className={`${styling.navItem} nav-text-color hover-gold`}>
						{<Handlekurv cart={cart} navCollapsed={navCollapsed} />}
					</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</NavBarStyled>
	);
};

export default NavigationBar;

const NavBarStyled = styled(Navbar)`
	background-color: rgba(0, 0, 0, ${({ opacity }) => opacity});
`;

const Dropdown = styled(Row)`
	max-height: ${({ open, dropdownref }) =>
		open ? dropdownref.current.scrollHeight + 20 + 'px' : '0'};
`;
