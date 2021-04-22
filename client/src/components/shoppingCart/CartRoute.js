import { useContext, useState } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { CartContext } from '../../contexts/CartContext';
import Checkout from './Checkout';
import Recipt from './Recipt';
import ShoppingCart from './ShoppingCart';

const CartRoute = () => {
	const { cart, updateCart, totalPrice } = useContext(CartContext);
	const [recipt, setRecipt] = useState(null);

	const switchComp = () => {
		if (cart.length > 0)
			return (
				<Checkout
					setRecipt={(recipt) => setRecipt(recipt)}
					cart={cart}
					updateCart={updateCart}
					totalPrice={totalPrice}
				/>
			);
		else if (recipt)
			return <Recipt recipt={recipt} emptyRecipt={() => setRecipt(null)} />;
		else return <Redirect to="/handlekurv" />;
	};
	return (
		<Switch>
			<Route path="/handlekurv/kassen">{switchComp()}</Route>
			<Route path="/">
				<ShoppingCart
					cart={cart}
					updateCart={updateCart}
					totalPrice={totalPrice}
				/>
			</Route>
		</Switch>
	);
};

export default CartRoute;
