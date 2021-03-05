const router = require('express').Router();
const FAQ = require('../models/faq.model');

router.route('/').get(async (req, res, next) => {
	try {
		const result = await FAQ.find();
		res.status(200).json(result);
	} catch (err) {
		next(err);
	}
});

router.route('/add').post(async (req, res, next) => {
	const newFAQ = new FAQ({ ...req.body });

	try {
		await newFAQ.save();
		res.status(200).json('FAQ lagret');
	} catch (err) {
		next(err);
	}
});

module.exports = router;
