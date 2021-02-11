import { Col, Row } from 'react-bootstrap';
import UserReview from './UserReview';

const UserReviewList = ({ userReviews }) => {
	return (
		<Row className="justify-content-center">
			{userReviews.map((review, index) => (
				<Col sm={10} key={index}>
					<UserReview {...review} key={index} />
				</Col>
			))}
		</Row>
	);
};

UserReviewList.defaultProps = {
	userReviews: [],
};

export default UserReviewList;
