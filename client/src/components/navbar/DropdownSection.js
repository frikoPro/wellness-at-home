import { Col } from 'react-bootstrap';

const DropdownSection = ({ section, styling }) => {
  return section.map((item, i) => (
    <Col className="text-center" key={i}>
      <a href="/svenskabadpro">
        <h5
          className={`m-3 nav-text-color hover-gold ${styling.dropmenuItemHeader}`}>
          {item.brand}
        </h5>
      </a>
      {item.jacuzzis.map((jacuzzi, i) => (
        <a href={`/spabad/${jacuzzi}`} key={i}>
          <p className={`${styling.dropmenuItem} nav-text-color hover-gold`}>
            {jacuzzi}
          </p>
        </a>
      ))}
    </Col>
  ));
};

export default DropdownSection;
