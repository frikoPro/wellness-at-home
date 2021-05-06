import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Footer from '../components/Footer';
import NavigationBar from '../components/navbar/NavigationBar';
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
import { useContext } from 'react';
import { SlideshowProvider } from '../contexts/SlideshowContext';
import { FAQProvider } from '../contexts/FAQContext';
import { LoggedInContext } from '../contexts/LoggedInContext';
import NetShop from '../views/netshop/NetShop';
import SupplierPage from '../views/SupplierPage/SupplierPage';
import AddReview from '../components/UserReview/AddReview';
import { ReviewInvProvider } from '../contexts/ReviewInvContext';
import ComparePage from '../views/ComparePage/ComparePage';
import CartRoute from '../components/shoppingCart/CartRoute';
import AboutUsPage from '../views/AboutUsPage/AboutUsPage';
import { OrderProvider } from '../contexts/OrderContext';
import { CartProvider } from '../contexts/CartContext';
import { EventProvider } from '../contexts/EventContext';
import PrivacyPage from '../views/privacyPage/PrivacyPage';
import ScrollToTop from '../components/ScrollToTop';

const Routes = () => {
	const loggedIn = useContext(LoggedInContext);

	return (
		<BrowserRouter history={history}>
			<ScrollToTop history={history} />
			<JacuzziProvider>
				<ProductsProvider>
					<CartProvider>
						<ScrollProvider>
							<header>
								<NavigationBar />
							</header>
							<main>
								<EventProvider>
									<OrderProvider>
										<SlideshowProvider>
											<FAQProvider>
												<ReviewInvProvider>
													<Switch>
														<Route exact path="/">
															<HomePage />
														</Route>
														<Route path="/personvern">
															<PrivacyPage />
														</Route>
														<Route path="/blogg">
															<Blogg />
														</Route>
														<Route path="/Arrangementer">
															<Events />
														</Route>
														<Route path="/kundeservice">
															<SupportPage />
														</Route>
														<Route path="/spabad/:id">
															<JacuzziPage />
														</Route>
														<Route path="/leverandør/:id">
															<SupplierPage />
														</Route>
														<Route path="/webpanel">
															{loggedIn ? (
																<Route component={Webpanel} />
															) : (
																<LoginPage />
															)}
														</Route>
														<Route path="/sammenlign/:id">
															<ComparePage />
														</Route>
														<Route path="/omoss">
															<AboutUsPage />
														</Route>
														<Route path="/anmeldelser/:id">
															<AddReview />
														</Route>
														<Route path="/nettbutikk" component={NetShop} />
														<Route path="/handlekurv">
															<CartRoute />
														</Route>
													</Switch>
												</ReviewInvProvider>
											</FAQProvider>
										</SlideshowProvider>
									</OrderProvider>
								</EventProvider>
							</main>
						</ScrollProvider>
					</CartProvider>
				</ProductsProvider>
			</JacuzziProvider>

			<Footer />
		</BrowserRouter>
	);
};

export default Routes;
