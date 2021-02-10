import { Card } from 'react-bootstrap';
import StarRating from '../StarRating';

const UserReview = ({ rating, header, author, date, text }) => {
	return (
		<Card className="mb-5">
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
