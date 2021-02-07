import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Footer from '../components/Footer';
<<<<<<< HEAD
import NavigationBar from '../components/NavigationBar';
import HomePage from '../views/HomePage';
import Nyheter from "../views/Nyheter";
=======
import NavigationBar from '../components/navbar/NavigationBar';
import Test from '../components/Test';
import { ScrollProvider } from '../contexts/ScrollContext';
import HomePage from '../views/homePage/HomePage';
import ProductPage from '../views/productPage/ProductPage';
>>>>>>> 4d38e5b63929059c2ef2c1c76d438c265fbe27be

const Routes = () => {
	return (
		<BrowserRouter>
<<<<<<< HEAD
			<NavigationBar navstate={navState}  />
			<div style={{ flex: '1 0 auto', marginTop: 84 }}>
				<Switch>
					<Route exact path="/">
						<HomePage checkimgpos={(imgPos) => checkImgPos(imgPos)} />
					</Route>
					<Route path="/nyheter" component={Nyheter}/>
=======
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
>>>>>>> 4d38e5b63929059c2ef2c1c76d438c265fbe27be
				</Switch>
			</ScrollProvider>

			<Footer />
		</BrowserRouter>
	);
};

export default Routes;
