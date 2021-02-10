const StarRating = ({ rating, size }) => {
	const stars = [];

	for (var i = 0; i < 5; i++) {
		if (i < rating) {
			stars.push('★');
		} else {
			stars.push('☆');
		}
	}

	return (
		<span
			className="d-inline-block"
			style={{ cursor: 'default', fontSize: `${size * 100}%` }}>
			<span style={{ color: '#ffc107' }} className="my-auto text-center">
				{stars}
			</span>
			<span className="text-center" style={{ fontSize: '75%' }}>
				{rating + '/5'}
			</span>
		</span>
	);
};

export default StarRating;
