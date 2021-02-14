import { BrowserRouter, Switch, Route } from 'react-router-dom';
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

const Routes = () => {
	return (
		<BrowserRouter>
			<ScrollProvider>
				<header>
					<NavigationBar />
				</header>
				<main>
					<JacuzziProvider>
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
							<Route path="/webpanel" component={Webpanel} />
						</Switch>
					</JacuzziProvider>
				</main>
			</ScrollProvider>

			<Footer />
		</BrowserRouter>
	);
};

export default Routes;
