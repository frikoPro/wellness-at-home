const router = require('express').Router();
const axios = require('axios');

router.route('/').get((req, res) => {
	const url = `https://graph.facebook.com/1951508198279309/feed?access_token=EAACfOeLSvz8BAHVEHpcg9aP1owgKc7q35erYjrS9fuwoWXbLUnIsPhyOzad08Im4Qm7YveqN2AA1ytYtxmaqzL6ZAxDCz83HCLzRmsNUb0yncIZCe8QusfBwfBnqyqYECtyRfs34SNhoiZBEeudg0N7QKJuShnIrZC9Vi3rnLgZDZD`;

	let result;

	axios
		.get(url)
		.then((response) => res.status(200).json(response.data))
		.catch((err) => res.status(400).json(err));
});

module.exports = router;
