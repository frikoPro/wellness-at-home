import 'bootstrap/dist/css/bootstrap.css';
import Routes from './routes/Routes';
import './App.css';
import { LoggedInProvider } from './contexts/LoggedInContext';

function App() {
	return (
		<>
			<LoggedInProvider>
				<Routes />
			</LoggedInProvider>
		</>
	);
}

export default App;
