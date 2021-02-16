const router = require('express').Router();
let Jacuzzi = require('../models/jacuzzi.model');

router.route('/').get((req, res) => {
	Jacuzzi.find()
		.then((jacuzzis) => res.json(jacuzzis))
		.catch((err) => res.status(400).json('Error: ', err));
});

router.route('/add').post((req, res) => {
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

	newJacuzzi
		.save()
		.then(() => res.json('product added!'))
		.catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
	Jacuzzi.findByIdAndDelete(req.params.id)
		.then(() => res.json('product deleted!'))
		.catch((err) => res.status(400).json('Error: ' + err));
});

module.exports = router;
