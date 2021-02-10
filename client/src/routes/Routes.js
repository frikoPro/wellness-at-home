import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Footer from '../components/Footer';
import NavigationBar from '../components/navbar/NavigationBar';
import Test from '../components/Test';
import { ScrollProvider } from '../contexts/ScrollContext';
import HomePage from '../views/homePage/HomePage';
import ProductPage from '../views/productPage/ProductPage';
import Nyheter from '../views/nyheter/Nyheter';
import SupportPage from '../views/supportPage/SupportPage';
import Webpanel from '../views/webpanel/Webpanel';

const Routes = () => {
	return (
		<BrowserRouter>
			<ScrollProvider>
				<header>
					<NavigationBar />
				</header>
				<main>
					<Switch>
						<Route exact path="/">
							<HomePage />
						</Route>
						<Route path="/test">
							<Test />
						</Route>
						<Route path="/Nyheter">
							<Nyheter />
						</Route>
						<Route path="/Support">
							<SupportPage />
						</Route>
						<Route path="/nordpool/:id">
							<ProductPage />
						</Route>
						<Route path="/webpanel">
							<Webpanel />
						</Route>
					</Switch>
				</main>
			</ScrollProvider>

			<Footer />
		</BrowserRouter>
	);
};

export default Routes;
