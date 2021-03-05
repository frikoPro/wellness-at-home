import axios from 'axios';
import { createContext, useEffect, useState } from 'react';

export const LoggedInContext = createContext();

export const LoggedInProvider = (props) => {
	const [loggedIn, setLoggedIn] = useState(false);

	useEffect(() => {
		const user = localStorage.getItem('user');

		if (user) {
			const token = JSON.parse(user).token;

			axios
				.get('http://localhost:8080/users', {
					headers: { 'auth-token': `${token}` },
				})
				.then((res) => {
					setLoggedIn(true);
				})
				.catch((err) => {
					console.log(err);
					setLoggedIn(false);
				});
		}
	}, []);

	return (
		<LoggedInContext.Provider value={loggedIn}>
			{props.children}
		</LoggedInContext.Provider>
	);
};
