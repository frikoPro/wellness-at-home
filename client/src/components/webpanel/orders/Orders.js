import { useContext, useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { OrderContext } from '../../../contexts/OrderContext';
import TableList from '../../TableList';

const Orders = () => {
	const { data, deleteData } = useContext(OrderContext);

	const [orderState, setOrder] = useState([]);

	useEffect(() => {
		setOrder(
			data.map((order) => ({
				Navn: `${order.firstName} ${order.lastName}`,
				Epost: order.email,
				Tlf: order.tlf,
				Adresse: `${order.address}, ${order.postalCode}, ${order.postalPlace}`,
				Ordre: order.cart
					.map((item) => `${item.name} x ${item.qty}`)
					.reduce(
						(acc, val) => `${acc} 
                    ${val}`
					),
			}))
		);
	}, [data]);

	return (
		<Container className="bg-white">
			<TableList
				values={orderState}
				name=""
				removeValue={(name, i) => deleteData(i)}
			/>
		</Container>
	);
};

export default Orders;
