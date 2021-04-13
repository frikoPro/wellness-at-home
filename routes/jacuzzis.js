const router = require('express').Router();
const verify = require('../controllers/AuthController');
let Jacuzzi = require('../models/jacuzzi.model');
const upload = require('./uploadImages').upload;
const updateImageFiles = require('./uploadImages').onUpdate;
const deleteImages = require('./uploadImages').onDelete;

router.route('/').get(async (req, res, next) => {
	try {
		const result = await Jacuzzi.find();
		res.status(200).json(result);
	} catch (err) {
		next(err);
	}
});

router
	.route('/add')
	.post(verify, upload.array('files'), async (req, res, next) => {
		const newJacuzzi = new Jacuzzi({
			...JSON.parse(req.body.data),
			images: req.files.map((file) => ({ image: file.filename })),
		});

		try {
			await newJacuzzi.save();
			res.status(200).json('produkt lagt inn');
		} catch (err) {
			next(err);
		}
	});

router.route('/:id').delete(verify, async (req, res, next) => {
	try {
		const jacuzzi = Jacuzzi.findById(req.params.id).exec();

		deleteImages(jaccuzzi.images);

		await Jacuzzi.findByIdAndDelete(req.params.id);
		res.status(200).json('Produktet er slettet');
	} catch (err) {
		res.status(400).json(err);
	}
});

router
	.route('/:id')
	.patch(verify, upload.array('files'), async (req, res, next) => {
		updateImageFiles(req);

		try {
			const body = {
				...JSON.parse(req.body.data),
			};

			if (req.files.length > 0)
				body.images = req.files.map((file) => ({ image: file.filename }));

			const updatedJacuzzi = await Jacuzzi.findById(req.params.id).exec();

			updatedJacuzzi.overwrite({ ...body });

			await updatedJacuzzi.save();

			res.status(200).json('Produktet er oppdatert');
		} catch (err) {
			next(err);
		}
	});

module.exports = router;
