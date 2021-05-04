import 'bootstrap/dist/css/bootstrap.css';
import Routes from './routes/Routes';
import './App.css';
import { LoggedInProvider } from './contexts/LoggedInContext';
import {Helmet} from "react-helmet";
import React from "react";

function App() {
	return (
		<>
			<Helmet>
				<title>Wellness At Home</title>
			</Helmet>
			<LoggedInProvider>
				<Routes />
			</LoggedInProvider>
		</>
	);
}

export default App;
