const router = require('express').Router();
const PrivacyData = require('../models/privacy.model');

router.route('/').get(async (req, res, next) => {
	try {
		const result = await PrivacyData.find();
		res.status(200).send(result);
	} catch (err) {
		next(err);
	}
});

router.route('/add').post(async (req, res, next) => {
	let newPrivacy = new PrivacyData({ ...req.body });

	try {
		await newPrivacy.save();

		res.status(200).send('personvern lagt til');
	} catch (err) {
		next(err);
	}
});

module.exports = router;
