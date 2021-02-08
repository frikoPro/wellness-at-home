import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Footer from '../components/Footer';
import NavigationBar from '../components/navbar/NavigationBar';
import Test from '../components/Test';
import { ScrollProvider } from '../contexts/ScrollContext';
import HomePage from '../views/homePage/HomePage';
import ProductPage from '../views/productPage/ProductPage';
import Nyheter from "../views/Nyheter";


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
						<Route path="/Nyheter">
							<Nyheter/>
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
