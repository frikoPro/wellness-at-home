import { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Footer from '../components/Footer';
import NavigationBar from '../components/NavigationBar';
import HomePage from '../views/HomePage';

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
			<NavigationBar navstate={navState} />
			<div style={{ flex: '1 0 auto' }}>
				<Switch>
					<Route exact path="/">
						<HomePage checkimgpos={(imgPos) => checkImgPos(imgPos)} />
					</Route>
				</Switch>
			</div>
			<Footer />
		</BrowserRouter>
	);
};

export default Routes;
