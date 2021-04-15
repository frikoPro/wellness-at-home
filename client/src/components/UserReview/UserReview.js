import { useContext } from 'react';
import { Button, Card } from 'react-bootstrap';
import { LoggedInContext } from '../../contexts/LoggedInContext';
import StarRating from '../StarRating';

const UserReview = ({
	rating,
	header,
	author,
	date,
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
					<span style={{ whiteSpace: 'nowrap' }} className="ml-2">
						{header}
					</span>
				</Card.Title>
				<p>
					Av: {author} {date}
				</p>
				<p>{text}</p>
			</Card.Body>
		</Card>
	);
};

export default UserReview;
