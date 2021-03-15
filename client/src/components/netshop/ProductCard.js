import { Card } from 'react-bootstrap';

const ProductCard = ({ image, name, price }) => {
  return (
    <Card className="product-card">
      <Card.Body>
        <Card.Img src={`http://localhost:8080/${image}`} />
        <Card.Title className="mt-3">{name}</Card.Title>
        <Card.Text className="mt-3" style={{ fontSize: '20px' }}>
          {price},-
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
