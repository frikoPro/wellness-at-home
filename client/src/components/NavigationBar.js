import { useContext, useRef, useState } from 'react';
import { Col, Nav, Navbar, Row } from 'react-bootstrap';
import wellnessLogo from '../images/wellnessLogo.png';
import styled from 'styled-components';
import { ScrollContext } from '../contexts/ScrollContext';

const NavigationBar = () => {
	const { navbar } = useContext(ScrollContext);

	const [opacity, isCollapsed] = navbar;

	const [open, setOpen] = useState(false);

	const dropdown = useRef(null);
	return (
		<NavBarStyled
			opacity={opacity}
			collapseOnSelect
			expand="lg"
			fixed="top"
			variant="dark"
			className="not-opacity">
			<Navbar.Toggle aria-controls="responsive-navbar-nav" />
			<Navbar.Brand href="/" style={{ height: '45px' }}>
				<img
					className=""
					src={wellnessLogo}
					alt=""
					style={{ height: '100%' }}></img>
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
						onMouseOut={() => setOpen(false)}>
						Spabad
					</Nav.Link>
					<Dropdown
						onMouseOver={() => setOpen(true)}
						onMouseOut={() => setOpen(false)}
						ref={dropdown}
						dropdownRef={dropdown}
						isCollapsed={isCollapsed}
						open={open}
						className="shadow dropmenu">
						<Col className="text-center">
							<h6 className="m-3"> Svenska Bad Pro</h6>
							<p className="dropmenu-item">VIKEN</p>
							<p className="dropmenu-item">FJORDEN</p>
							<p className="dropmenu-item">FLODEN</p>
						</Col>
						<Col
							style={{ borderLeft: '1px solid rgb(50,50,50)' }}
							className="text-center">
							<h6 className="m-3">Svenska Bad</h6>

							<p className="mt-2 dropmenu-item">EARL</p>
							<p className="mt-2 dropmenu-item">VANCOUVER</p>
							<p className="mt-2 dropmenu-item">VANCOUVER BLACK EDITION</p>
							<p className="mt-2 dropmenu-item">DALLAS</p>
						</Col>
						<Col
							style={{ borderLeft: '1px solid rgb(50,50,50)' }}
							className="text-center">
							<h6 className="text-center m-3">Nordpool Spa</h6>
							<p className="mt-2 dropmenu-item">TOR</p>
							<p className="mt-2 dropmenu-item">SAREK</p>
						</Col>
					</Dropdown>
					<Nav.Link className="nav-item">Nettbutikk</Nav.Link>
					<Nav.Link className="nav-item">Nyheter</Nav.Link>
					<Nav.Link className="nav-item">Arrangementer</Nav.Link>
					<Nav.Link className="nav-item">Support</Nav.Link>
				</Nav>
				<Nav>
					<Nav.Link className="nav-item">
						{isCollapsed ? (
							'Search'
						) : (
							<svg
								width="25"
								height="24"
								viewBox="0 0 25 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg">
								<path
									d="M13.6503 12.3963L12.4266 12.9638L20.8838 23.1775L23.8113 21.6295L13.6503 12.3963Z"
									fill="white"
									stroke="white"
								/>
								<path
									d="M16.5649 7.0929C16.5649 10.269 13.2907 13.1858 8.78244 13.1858C4.27418 13.1858 1 10.269 1 7.0929C1 3.91685 4.27418 1 8.78244 1C13.2907 1 16.5649 3.91685 16.5649 7.0929Z"
									stroke="white"
									strokeWidth="2"
								/>
							</svg>
						)}
					</Nav.Link>
					<Nav.Link className="nav-item">
						{isCollapsed ? (
							'Handlekurv'
						) : (
							<svg
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg">
								<path
									d="M9 21.75C9 22.992 7.992 24 6.75 24C5.508 24 4.5 22.992 4.5 21.75C4.5 20.508 5.508 19.5 6.75 19.5C7.992 19.5 9 20.508 9 21.75Z"
									fill="white"
								/>
								<path
									d="M24 21.75C24 22.992 22.992 24 21.75 24C20.508 24 19.5 22.992 19.5 21.75C19.5 20.508 20.508 19.5 21.75 19.5C22.992 19.5 24 20.508 24 21.75Z"
									fill="white"
								/>
								<path
									d="M24 12V3H6C6 2.172 5.328 1.5 4.5 1.5H0V3H3L4.1265 12.657C3.4395 13.2075 3 14.052 3 15C3 16.6575 4.3425 18 6 18H24V16.5H6C5.172 16.5 4.5 15.828 4.5 15C4.5 14.9955 4.5 14.9895 4.5 14.985L24 12Z"
									fill="white"
								/>
							</svg>
						)}
					</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</NavBarStyled>
	);
};

export default NavigationBar;

const NavBarStyled = styled(Navbar)`
	background-color: rgba(0, 0, 0, ${({ opacity }) => opacity});
	height: 61px;
`;

const Dropdown = styled(Row)`
	max-height: ${({ open, dropdownRef }) =>
		open ? dropdownRef.current.scrollHeight + 20 + 'px' : '0'};
`;
