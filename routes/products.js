const router = require('express').Router();
let Product = require('../models/product.model');

router.route('/').get((req, res) => {
	Product.find()
		.then((products) => res.json(products))
		.catch((err) => res.status(400).json('Error: ', err));
});

router.route('/add').post((req, res) => {
	const name = req.body.name;
	const brand = req.body.brand;
	const images = req.body.images;
	const category = req.body.category;
	const aboutProduct = req.body.aboutProduct;
	const price = req.body.price;
	const techSpec = req.body.techSpec;
	const relatedProducts = req.body.relatedProducts;

	const newProduct = new Product({
		name,
		brand,
		category,
		images,
		aboutProduct,
		price,
		techSpec,
		relatedProducts,
	});

	newProduct
		.save()
		.then(() => res.json('product added!'))
		.catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
	Product.findByIdAndDelete(req.params.id)
		.then(() => res.json('product deleted!'))
		.catch((err) => res.status(400).json('Error: ' + err));
});

module.exports = router;
