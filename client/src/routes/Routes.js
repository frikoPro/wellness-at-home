import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Footer from '../components/Footer';
import NavigationBar from '../components/NavigationBar';
import Test from '../components/Test';
import { ScrollProvider } from '../contexts/ScrollContext';
import HomePage from '../views/HomePage';
import ProductPage from '../views/ProductPage';

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
