const router = require('express').Router();
const verify = require('../controllers/AuthController');
const Slideshow = require('../models/slideshow.model');
const upload = require('./uploadImages');

router.route('/').get(async (req, res, next) => {
	try {
		const result = await Slideshow.find();
		res.status(200).json(result);
	} catch (err) {
		next(err);
	}
});

router
	.route('/add')
	.post(verify, upload.array('files'), async (req, res, next) => {
		if (req.files.length === 0)
			return res
				.status(400)
				.send({ messages: ['Mangler bilde'], fields: ['images'] });

		const newSlideshow = new Slideshow({
			...JSON.parse(req.body.data),
			image: req.files[0].filename,
		});

		try {
			await newSlideshow.save();
			res.status(200).json('Nytt element lagret');
		} catch (err) {
			next(err);
		}
	});

router
	.route('/:id')
	.patch(verify, upload.array('files'), async (req, res, next) => {
		const body = JSON.parse(req.body.data);

		try {
			const updatedSlide = await Slideshow.findById(req.params.id).exec();

			if (req.files.length > 0) {
				updatedSlide.overwrite({ ...body, image: req.files[0].filename });
			} else {
				updatedSlide.overwrite({ ...body });
			}

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
