import { Col } from 'react-bootstrap';

const DropdownSection = ({ section, styling }) => {
	return section.map((item, i) => (
		<Col className="text-center" key={i}>
			<a href={`/${item.brand}`}>
				<h5
					className={`m-3 nav-text-color hover-gold ${styling.dropmenuItemHeader}`}>
					{item.brand}
				</h5>
			</a>
			{item.jacuzzis.map((jacuzzi, j) => (
				<a href={`/spabad/${jacuzzi.id}`} key={j}>
					<p className={`${styling.dropmenuItem} nav-text-color hover-gold`}>
						{jacuzzi.name}
					</p>
				</a>
			))}
		</Col>
	));
};

export default DropdownSection;
