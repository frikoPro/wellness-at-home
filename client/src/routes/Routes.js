import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Footer from '../components/Footer';
import NavigationBar from '../components/navbar/NavigationBar';
import Test from '../components/Test';
import { ScrollProvider } from '../contexts/ScrollContext';
import HomePage from '../views/homePage/HomePage';
import ProductPage from '../views/productPage/ProductPage';
import Blogg from '../views/bloggPage/Blogg';
import SupportPage from '../views/supportPage/SupportPage';

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
						<Route path="/blogg">
							<Blogg />
						</Route>
						<Route path="/Support">
							<SupportPage />
						</Route>
						<Route path="/nordpool/:id">
							<ProductPage />
						</Route>
					</Switch>
				</main>
			</ScrollProvider>

			<Footer />
		</BrowserRouter>
	);
};

export default Routes;
