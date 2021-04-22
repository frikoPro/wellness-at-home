const router = require('express').Router();
let Event = require('../models/events.model');
const verify = require('../controllers/AuthController');
const upload = require('./uploadImages').upload;

router.route('/').get(async (req, res, next) => {
	try {
		const result = await Event.find();
		res.status(200).send(result);
	} catch (err) {
		next(err);
	}
});

router
	.route('/add')
	.post(verify, upload.array('files'), async (req, res, next) => {
		const newEvent = new Event({
			...JSON.parse(req.body.data),
		});

		if (req.files.length > 0) newEvent.img = req.files[0].filename;

		try {
			await newEvent.save();
			res.status(200).send('arrangement lagret');
		} catch (err) {
			next(err);
		}
	});

module.exports = router;
