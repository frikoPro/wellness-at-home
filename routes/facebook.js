const axios = require('axios');
const router = require('express').Router();

router.route('/').get((req, res) => {
	const url = `https://graph.facebook.com/${process.env.FACEBOOK_ID}/feed?access_token=${process.env.FACEBOOK_TOKEN}`;

	axios
		.get(url)
		.then((response) => res.status(200).json(response.data))
		.catch((err) => res.status(400).send(err));
});

module.exports = router;
