const router = require('express').Router();
const Invites = require('../models/reviewInv.model');
const verify = require('../controllers/AuthController');
const upload = require('./uploadImages').upload;

router.route('/').get(async (req, res, next) => {
	try {
		const result = await Invites.find();
		res.status(200).send(result);
	} catch (err) {
		next(err);
	}
});

router.route('/add').post(verify, async (req, res, next) => {
	try {
		const invite = new Invites({ ...req.body });

		await invite.save();
		res.status(200).send('Invitasjon er nå lagret');
	} catch (err) {
		next(err);
	}
});

router.route('/:id').delete(verify, async (req, res, next) => {
	try {
		await Invites.findByIdAndDelete(req.params.id);
		res.status(200).send('Invitasjon er slettet');
	} catch (err) {
		next(err);
	}
});

module.exports = router;
