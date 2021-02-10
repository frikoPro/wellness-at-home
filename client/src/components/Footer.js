import { Nav, Navbar } from 'react-bootstrap';

const Footer = () => {
	return (
		<Navbar sticky="bottom" as="footer">
			<Nav className="mr-auto">
				<Nav.Link className="p-0">
					<svg
						width="80"
						height="34"
						viewBox="0 0 123 77"
						fill="none"
						xmlns="http://www.w3.org/2000/svg">
						<path
							fillRule="evenodd"
							clipRule="evenodd"
							d="M90.0747 39.0105C90.0747 23.2105 77.2849 10.3999 61.5106 10.3999C45.7362 10.3999 32.9464 23.2105 32.9464 39.0105C32.9464 53.2896 43.3905 65.1264 57.0479 67.2752V47.2827H49.7933V39.0105H57.0479V32.7057C57.0479 25.5359 61.3138 21.5728 67.8371 21.5728C70.9622 21.5728 74.2321 22.1321 74.2321 22.1321V29.1732H70.6288C67.082 29.1732 65.9733 31.378 65.9733 33.6431V39.0102H73.8945L72.6291 47.2825H65.973V67.275C79.6304 65.1302 90.0745 53.2933 90.0745 39.0102L90.0747 39.0105Z"
							fill="#1977F3"
						/>
						<path
							fillRule="evenodd"
							clipRule="evenodd"
							d="M72.6293 47.2826L73.8946 39.0104H65.9734V33.6433C65.9734 31.3821 67.078 29.1733 70.629 29.1733H74.2322V22.1322C74.2322 22.1322 70.9626 21.573 67.8373 21.573C61.3139 21.573 57.048 25.5321 57.048 32.7059V39.0106H49.7934V47.2829H57.048V67.2754C58.5021 67.5044 59.9924 67.6212 61.5107 67.6212C63.0291 67.6212 64.5194 67.5004 65.9734 67.2754V47.2829H72.6295L72.6293 47.2826Z"
							fill="#FEFEFE"
						/>
					</svg>
				</Nav.Link>
			</Nav>
			<Nav>
				<Nav.Link className="nav-text-color hover-gold">Om oss</Nav.Link>
				<Nav.Link className="nav-text-color hover-gold">
					Terms and conditions
				</Nav.Link>
				<Nav.Link className="nav-text-color hover-gold">
					Privacy and cookies policy
				</Nav.Link>
			</Nav>
		</Navbar>
	);
};

export default Footer;
