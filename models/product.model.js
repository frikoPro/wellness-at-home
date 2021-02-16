const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ProductsSchema = new Schema({
	name: { type: String, required: true, unique: true },
	brand: String,
	category: String,
	images: [],
	aboutProduct: String,
	price: Number,
	techSpec: [],
	relatedProducts: [],
});

const Products = mongoose.model('Products', ProductsSchema);

module.exports = Products;
