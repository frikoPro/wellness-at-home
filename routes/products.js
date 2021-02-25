const router = require('express').Router();
let Product = require('../models/product.model');

router.route('/').get((req, res) => {
  Product.find()
    .then((products) => res.json(products))
    .catch((err) => res.status(400).json('Error: ', err));
});

router.route('/add').post(async (req, res, next) => {
  const name = req.body.name;
  const affiliation = req.body.affiliation;
  const images = req.body.images;
  const category = req.body.category;
  const aboutProduct = req.body.aboutProduct;
  const price = req.body.price;
  const techSpec = req.body.techSpec;
  const relatedProducts = req.body.relatedProducts;

  const newProduct = new Product({
    name,
    affiliation,
    category,
    images,
    aboutProduct,
    price,
    techSpec,
    relatedProducts,
  });

  try {
    await newProduct.save();
    res.status(200).json('produkt lagt inn');
  } catch (err) {
    next(err);
  }
});

router.route('/:id').delete(async (req, res, next) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.status(200).json('Produktet er slettet');
  } catch (err) {
    next(err);
  }
});

router.route('/:id').patch(async (req, res, next) => {
  try {
    const body = { ...req.body };

    delete body._id;

    let updatedProduct = new Product({ ...body });

    await updatedProduct.save();

    await Product.findByIdAndDelete(req.params.id);
    res.status(200).json('Produktet er oppdatert');
  } catch (err) {
    next(err);
  }
});

module.exports = router;
