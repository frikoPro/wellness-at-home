import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Footer from '../components/Footer';
import NavigationBar from '../components/navbar/NavigationBar';
import Test from '../components/Test';
import { ScrollProvider } from '../contexts/ScrollContext';
import HomePage from '../views/homePage/HomePage';
import JacuzziPage from '../views/jacuzziPage/JacuzziPage';
import Blogg from '../views/bloggPage/Blogg';
import SupportPage from '../views/supportPage/SupportPage';
import Webpanel from '../views/webpanel/Webpanel';
import Events from '../views/eventsPage/Events';
import { JacuzziProvider } from '../contexts/JacuzziContext';
import { ProductsProvider } from '../contexts/ProductsContext';
import history from '../history.js';
import LoginPage from '../views/login/LoginPage';
import { useEffect, useState } from 'react';

const Routes = () => {
	const [loggedIn, setLoggedIn] = useState(false);

	useEffect(() => {
		const user = localStorage.getItem('user');

		if (user) {
			setLoggedIn(true);
		}
	}, []);

	return (
		<BrowserRouter history={history}>
			<JacuzziProvider>
				<ScrollProvider>
					<header>
						<NavigationBar />
					</header>
					<main>
						<ProductsProvider>
							<Switch>
								<Route exact path="/">
									<HomePage />
								</Route>
								<Route path="/test">
									<Test />
								</Route>
								<Route path="/blogg">
									<Blogg />
								</Route>
								<Route path="/Arrangementer">
									<Events />
								</Route>
								<Route path="/Kundeserivce">
									<SupportPage />
								</Route>
								<Route path="/spabad/:id">
									<JacuzziPage />
								</Route>
								<Route path="/webpanel">
									{loggedIn ? (
										<Route component={Webpanel} />
									) : (
										<LoginPage setState={setLoggedIn} />
									)}
								</Route>
							</Switch>
						</ProductsProvider>
					</main>
				</ScrollProvider>
			</JacuzziProvider>

			<Footer />
		</BrowserRouter>
	);
};

export default Routes;
