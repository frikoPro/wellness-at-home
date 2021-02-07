import { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Footer from '../components/Footer';
import NavigationBar from '../components/NavigationBar';
import HomePage from '../views/HomePage';
import Nyheter from "../views/Nyheter";

const Routes = () => {
	const [navState, setNavState] = useState(false);

	const checkImgPos = (imgPos) => {
		if (imgPos <= 56) {
			setNavState(true);
		} else {
			setNavState(false);
		}
	};

	return (
		<BrowserRouter>
			<NavigationBar navstate={navState}  />
			<div style={{ flex: '1 0 auto', marginTop: 84 }}>
				<Switch>
					<Route exact path="/">
						<HomePage checkimgpos={(imgPos) => checkImgPos(imgPos)} />
					</Route>
					<Route path="/nyheter" component={Nyheter}/>
				</Switch>
			</div>
			<Footer />
		</BrowserRouter>
	);
};

export default Routes;
