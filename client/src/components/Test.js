import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
const Test = () => {
	useEffect(() => {
		axios
			.get('https://reqres.in/api/users?page=2')
			.then((response) => console.log(response.data));
	});

	return (
		<>
			<div></div>
		</>
	);
};

export default Test;
