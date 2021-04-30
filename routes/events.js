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

router
	.route('/:id')
	.patch(verify, upload.array('files'), async (req, res, next) => {
		try {
			const event = await Event.findById(req.params.id).exec();

			event.overwrite({ ...JSON.parse(req.body.data) });

			if (req.files.length > 0) event.img = req.files[0].filename;

			await event.save();

			res.status(200).send('Arrangement oppdatert');
		} catch (err) {
			next(err);
		}
	});

router.route('/:id').delete(verify, async (req, res, next) => {
	try {
		await Event.findByIdAndDelete(req.params.id);
		res.status(200).send('Arrangement slettet');
	} catch (err) {
		console.log(err);
		next(err);
	}
});

module.exports = router;
