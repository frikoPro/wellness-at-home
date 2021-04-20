const router = require('express').Router();
const verify = require('../controllers/AuthController');
let Orders = require('../models/order.model');
const upload = require('./uploadImages').upload;

router.route('/').get(verify, async (req, res, next) => {
	try {
		const result = await Orders.find();
		res.status(200).json(result);
	} catch (err) {
		next(err);
	}
});

router.route('/add').post(upload.none(), async (req, res, next) => {
	const newOrder = new Orders({
		...JSON.parse(req.body.data),
	});

	try {
		await newOrder.save();
		res.status(200).json('Ditt kjøp var velykket');
	} catch (err) {
		next(err);
	}
});

router.route('/:id').delete(verify, async (req, res, next) => {
	try {
		await Orders.findByIdAndDelete(req.params.id);
		res.status(200).json('ordren er slettet');
	} catch (err) {
		res.status(400).json(err);
	}
});

module.exports = router;
