import axios from 'axios';
import { createContext, useEffect, useState } from 'react';
axios.defaults.withCredentials = true;
export const LoggedInContext = createContext();

export const LoggedInProvider = (props) => {
	const [loggedIn, setLoggedIn] = useState(false);

	useEffect(() => {
		axios
			.get('http://localhost:8080/users', { withCredentials: true })
			.then((res) => {
				setLoggedIn(true);
				console.log(res.data);
			})
			.catch((err) => {
				console.log(err.response.data);
				setLoggedIn(false);
			});
	}, []);

	return (
		<LoggedInContext.Provider value={loggedIn}>
			{props.children}
		</LoggedInContext.Provider>
	);
};
