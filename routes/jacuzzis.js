const router = require('express').Router();
let Jacuzzi = require('../models/jacuzzi.model');

router.route('/').get((req, res) => {
	Jacuzzi.find()
		.then((products) => res.json(products))
		.catch((err) => res.status(400).json('Error: ', err));
});

router.route('/add').post((req, res) => {
	const name = req.body.name;
	const brand = req.body.name;
	const images = req.body.images;
	const aboutProduct = req.body.aboutProduct;
	const price = req.body.price;
	const techSpec = req.body.techSpec;
	const relatedProducts = req.body.relatedProducts;
	const userReviews = req.body.userReviews;

	const newProduct = new Jacuzzi({
		name,
		brand,
		images,
		aboutProduct,
		price,
		techSpec,
		relatedProducts,
		userReviews,
	});

	newProduct
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
