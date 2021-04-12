const router = require('express').Router();
const verify = require('../controllers/AuthController');
let Product = require('../models/product.model');
const upload = require('./uploadImages');

router.route('/').get((req, res) => {
	Product.find()
		.then((products) => res.json(products))
		.catch((err) => res.status(400).json('Error: ', err));
});

router
	.route('/add')
	.post(verify, upload.array('files'), async (req, res, next) => {
		const newProduct = new Product({
			...JSON.parse(req.body.data),
			images: req.files.map((file) => ({ image: file.filename })),
		});

		try {
			await newProduct.save();
			res.status(200).json('produkt lagt inn');
		} catch (err) {
			next(err);
		}
	});

router.route('/:id').delete(verify, async (req, res, next) => {
	try {
		await Product.findByIdAndDelete(req.params.id);
		res.status(200).json('Produktet er slettet');
	} catch (err) {
		next(err);
	}
});

router
	.route('/:id')
	.patch(verify, upload.array('files'), async (req, res, next) => {
		try {
			const body = {
				...JSON.parse(req.body.data),
			};

			if (req.files.length > 0)
				body.images = req.files.map((file) => ({ image: file.filename }));

			const updatedProduct = await Product.findById(req.params.id).exec();

			updatedProduct.overwrite({ ...body });

			await updatedProduct.save();

			res.status(200).json('Produktet er oppdatert');
		} catch (err) {
			next(err);
		}
	});

module.exports = router;
