import { useContext, useState } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { ProductsContext } from '../../contexts/ProductsContext';
import Checkout from './Checkout';
import Recipt from './Recipt';
import ShoppingCart from './ShoppingCart';

const CartRoute = ({ match }) => {
	const { cart } = useContext(ProductsContext);

	const [recipt, setRecipt] = useState(null);

	return (
		<Switch>
			<Route path="/handlekurv/kassen">
				{cart.length > 0 ? (
					<Checkout setRecipt={(recipt) => setRecipt(recipt)} />
				) : recipt ? (
					<Recipt recipt={recipt} />
				) : (
					<Redirect to="/handlekurv" />
				)}
			</Route>
			<Route path="/">
				<ShoppingCart />
			</Route>
		</Switch>
	);
};

export default CartRoute;
