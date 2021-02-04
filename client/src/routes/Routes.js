import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Footer from '../components/Footer';
import NavigationBar from '../components/NavigationBar';
import Test from '../components/Test';
import { ScrollProvider } from '../contexts/ScrollContext';
import HomePage from '../views/HomePage';

const Routes = () => {
	return (
		<BrowserRouter>
			<ScrollProvider>
				<header>
					<NavigationBar />
				</header>

				<div style={{ flex: '1 0 auto' }}>
					<Switch>
						<main style={{ minHeight: '100vh', marginBottom: '200px' }}>
							<Route exact path="/">
								<HomePage />
							</Route>
							<Route path="/test">
								<Test />
							</Route>
						</main>
					</Switch>
				</div>
			</ScrollProvider>

			<Footer />
		</BrowserRouter>
	);
};

export default Routes;
