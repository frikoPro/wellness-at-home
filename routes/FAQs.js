const router = require('express').Router();
const verify = require('../controllers/AuthController');
const FAQ = require('../models/faq.model');
const upload = require('./uploadImages').upload;

router.route('/').get(async (req, res, next) => {
	try {
		const result = await FAQ.find();
		res.status(200).json(result);
	} catch (err) {
		next(err);
	}
});

router.route('/add').post(verify, upload.none(), async (req, res, next) => {
	const newFAQ = new FAQ({ ...JSON.parse(req.body.data) });

	console.log(req.body);

	try {
		await newFAQ.save();
		res.status(200).json('FAQ lagret');
	} catch (err) {
		next(err);
	}
});

router.route('/:id').delete(verify, async (req, res, next) => {
	try {
		await FAQ.findByIdAndDelete(req.params.id);
		res.status(200).json('FAQ slettet');
	} catch (err) {
		next(err);
	}
});

router.route('/:id').patch(verify, upload.none(), async (req, res, next) => {
	try {
		const updatedFAQ = await FAQ.findById(req.params.id).exec();

		updatedFAQ.overwrite({ ...JSON.parse(req.body.data) });

		await updatedFAQ.save();

		res.status(200).json('FAQ oppdatert');
	} catch (err) {
		next(err);
	}
});

module.exports = router;
