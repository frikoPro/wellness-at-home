import { useState } from 'react';
import { Button, Col } from 'react-bootstrap';

const QtySelector = ({ item, handleUpdate }) => {
	const [lastVal, setLastVal] = useState(null);

	const setQty = (increment) => {
		handleUpdate(item.qty + increment, item._id);
	};

	const handleClick = () => {
		setLastVal(item.qty);

		handleUpdate('', item._id);
	};

	const handleChange = (val) => {
		handleUpdate(val, item._id);
	};

	const handleBlur = () => {
		if (isNaN(item.qty) || item.qty === '') {
			handleUpdate(lastVal, item._id);
		}
	};

	return (
		<Col className="h-100 text-center mt-5 mt-sm-0" sm={3} lg={3} xs={3}>
			<Button
				className=" w-25 align-top"
				onClick={() => setQty(-1)}
				style={{
					fontSize: 14,
					borderRadius: '0.25rem 0 0 0.25rem',
				}}>
				-
			</Button>
			<input
				className="form-control d-inline w-25 text-center p-0"
				type="number"
				value={item.qty}
				onChange={(e) => handleChange(e.target.value)}
				onClick={handleClick}
				onBlur={handleBlur}
				style={{
					fontSize: 14,

					borderRadius: 0,
				}}
			/>
			<Button
				className="w-25 align-top"
				onClick={() => setQty(1)}
				style={{
					fontSize: 14,
					borderRadius: '0 0.25rem 0.25rem 0',
				}}>
				+
			</Button>
		</Col>
	);
};

export default QtySelector;
