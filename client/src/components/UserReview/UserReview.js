import { useContext } from 'react';
import { Button, Card } from 'react-bootstrap';
import { LoggedInContext } from '../../contexts/LoggedInContext';
import StarRating from '../StarRating';

const UserReview = ({
	rating,
	header,
	author,
	createdAt,
	text,
	onDelete,
	index,
}) => {
	const loggedIn = useContext(LoggedInContext);

	return (
		<Card className="mb-5">
			{loggedIn ? (
				<Button
					variant="danger"
					onClick={() => onDelete('userReviews', index)}
					style={{
						position: 'absolute',
						left: '100%',
						transform: 'translateX(-100%)',
					}}>
					X
				</Button>
			) : null}
			<Card.Body>
				<Card.Title style={{ borderBottom: '2px solid black' }}>
					<StarRating rating={rating} size={2} />
					<div className="mb-1">{header}</div>
				</Card.Title>
				<p>
					Av: {author} {createdAt.slice(0, 10)}
				</p>
				<p>{text}</p>
			</Card.Body>
		</Card>
	);
};

export default UserReview;
