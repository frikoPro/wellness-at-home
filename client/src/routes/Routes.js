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
				<NavigationBar />

				<div style={{ flex: '1 0 auto' }}>
					<Switch>
						<Route exact path="/">
							<HomePage />
						</Route>
						<Route path="/test">
							<Test />
						</Route>
					</Switch>
				</div>
			</ScrollProvider>
			<Footer />
		</BrowserRouter>
	);
};

export default Routes;
