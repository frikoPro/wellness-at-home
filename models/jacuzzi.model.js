const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserReviews = new Schema(
	{
		rating: Number,
		author: String,
		header: String,
		text: String,
	},
	{ timestamps: true }
);

const JacuzzisSchema = new Schema({
	name: { type: String, required: true, unique: true },
	brand: String,
	images: [String],
	aboutProduct: String,
	price: String,
	techSpec: { type: Array, unique: true },
	relatedProducts: [String],
	userReviews: [UserReviews],
});

const Jacuzzis = mongoose.model('Jacuzzi', JacuzzisSchema);

module.exports = Jacuzzis;
