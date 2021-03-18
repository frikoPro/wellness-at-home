const router = require('express').Router();
const verify = require('../controllers/AuthController');
let Jacuzzi = require('../models/jacuzzi.model');

router.route('/').get(async (req, res, next) => {
	try {
		const result = await Jacuzzi.find();
		res.status(200).json(result);
	} catch (err) {
		next(err);
	}
});

router.route('/add').post(verify, async (req, res, next) => {
	const name = req.body.name;
	const brand = req.body.brand;
	const images = req.body.images;
	const aboutProduct = req.body.aboutProduct;
	const price = req.body.price;
	const techSpec = req.body.techSpec;
	const relatedProducts = req.body.relatedProducts;
	const userReviews = req.body.userReviews;

	const newJacuzzi = new Jacuzzi({
		name,
		brand,
		images,
		aboutProduct,
		price,
		techSpec,
		relatedProducts,
		userReviews,
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
		await Jacuzzi.findByIdAndDelete(req.params.id);
		res.status(200).json('Produktet er slettet');
	} catch (err) {
		res.status(400).json(err);
	}
});

router.route('/:id').patch(verify, async (req, res, next) => {
	try {
		const updatedJacuzzi = await Jacuzzi.findById(req.params.id).exec();

		updatedJacuzzi.overwrite({ ...req.body });

		await updatedJacuzzi.save();

		res.status(200).json('Produktet er oppdatert');
	} catch (err) {
		next(err);
	}
});

module.exports = router;
