const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ImagesSchema = new Schema({
	filename: {
		type: String,
		required: true,
		unique: true,
		minlength: 11,
	},
	textHead: String,
	textP: String,
});

const UserReviews = new Schema(
	{
		rating: Number,
		author: String,
		header: String,
		text: String,
	},
	{ timestamps: true }
);

const ProductsSchema = new Schema({
	name: { type: String, required: true, unique: true },
	images: [ImagesSchema],
	aboutProduct: String,
	price: String,
	techSpec: [String],
	relatedProducts: [{ path: String, name: String }],
	userReviews: [UserReviews],
});

const Products = mongoose.model('Products', ProductsSchema);

module.exports = Products;
