const router = require('express').Router();
const verify = require('../controllers/AuthController');
const Slideshow = require('../models/slideshow.model');

router.route('/').get(async (req, res, next) => {
	try {
		const result = await Slideshow.find();
		res.status(200).json(result);
	} catch (err) {
		next(err);
	}
});

router.route('/add').post(verify, async (req, res, next) => {
	const newSlideshow = new Slideshow({ ...req.body });

	try {
		await newSlideshow.save();
		res.status(200).json('Nytt element lagret');
	} catch (err) {
		next(err);
	}
});

router.route('/:id').patch(verify, async (req, res, next) => {
	try {
		const updatedSlide = await Slideshow.findById(req.params.id).exec();

		updatedSlide.overwrite({ ...req.body });

		await updatedSlide.save();

		res.status(200).json('Slideshow er oppdatert');
	} catch (err) {
		next(err);
	}
});

router.route('/:id').delete(verify, async (req, res, next) => {
	try {
		await Slideshow.findByIdAndDelete(req.params.id);
		res.status(200).json('Slide slettet');
	} catch (err) {
		next(err);
	}
});

module.exports = router;
