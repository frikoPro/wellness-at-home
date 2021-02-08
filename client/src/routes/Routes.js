import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Footer from '../components/Footer';
import NavigationBar from '../components/NavigationBar';
import Test from '../components/Test';
import { ScrollProvider } from '../contexts/ScrollContext';
import HomePage from '../views/homePage/HomePage';
import ProductPage from '../views/productPage/ProductPage';
import Nyheter from "../views/Nyheter";
import SupportPage from "../views/SupportPage";


const Routes = () => {
	return (
		<BrowserRouter>
			<ScrollProvider>
				<header style={{ height: '6vh' }}>
					<NavigationBar />
				</header>

				<Switch>
					<main style={{ minHeight: '88vh' }}>
						<Route exact path="/">
							<HomePage />
						</Route>
						<Route path="/test">
							<Test />
						</Route>
						<Route path="/nordpool/:id">
							<ProductPage />
						</Route>
						<Route path="/Support">
							<SupportPage />
						</Route>
					</main>
				</Switch>
			</ScrollProvider>

			<Footer />
		</BrowserRouter>
	);
};

export default Routes;
