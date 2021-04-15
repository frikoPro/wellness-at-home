import axios from 'axios';
import { createContext, useEffect, useState } from 'react';

export const ReviewInvContext = createContext();

export const ReviewInvProvider = (props) => {
	const [invites, setInvites] = useState([]);

	useEffect(() => {
		axios
			.get('http://localhost:8080/reviewinvites/')
			.then((res) => setInvites(res.data));
	}, []);

	return (
		<ReviewInvContext.Provider value={invites}>
			{props.children}
		</ReviewInvContext.Provider>
	);
};
