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
	images: [{ image: String }],
	aboutProduct: String,
	price: String,
	techSpec: [{ property: String, value: String }],
	relatedProducts: [String],
	userReviews: [UserReviews],
});

const Jacuzzis = mongoose.model('Jacuzzi', JacuzzisSchema);

module.exports = Jacuzzis;
