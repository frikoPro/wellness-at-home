import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Footer from '../components/Footer';
import NavigationBar from '../components/navbar/NavigationBar';
import Test from '../components/Test';
import { ScrollProvider } from '../contexts/ScrollContext';
import HomePage from '../views/homePage/HomePage';
import ProductPage from '../views/productPage/ProductPage';

const Routes = () => {
	return (
		<BrowserRouter>
			<ScrollProvider>
				<header>
					<NavigationBar />
				</header>

				<Switch>
					<main>
						<Route exact path="/">
							<HomePage />
						</Route>
						<Route path="/test">
							<Test />
						</Route>
						<Route path="/nordpool/:id">
							<ProductPage />
						</Route>
					</main>
				</Switch>
			</ScrollProvider>

			<Footer />
		</BrowserRouter>
	);
};

export default Routes;
