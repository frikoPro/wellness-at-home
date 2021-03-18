const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserReviews = new Schema(
	{
		rating: Number,
		author: String,
		header: String,
		text: String,
	},
	{ timestamps: true, _id: false }
);

const JacuzzisSchema = new Schema({
	name: {
		type: String,
		required: [true, 'Produktet må ha et navn'],
		unique: true,
	},
	brand: { type: String, required: [true, 'Du må velge et merke'] },
	images: {
		type: [
			{
				image: {
					type: String,
				},
				_id: false,
			},
		],
		validate: [(val) => val.length > 0, 'Du må velge minst et bilde'],
	},
	aboutProduct: { type: String, required: [true, 'Du må ha en beskrivelse'] },
	price: { type: Number, required: [true, 'Du må taste inn en pris'] },
	techSpec: {
		type: [
			{
				_id: false,
				property: String,
				value: String,
			},
		],
		validate: [
			(val) => val.length > 0,
			'Du må ha hvertfall en teknisk spesifikasjon',
		],
	},
	relatedProducts: [String],
	userReviews: [UserReviews],
});

const Jacuzzis = mongoose.model('Jacuzzi', JacuzzisSchema);

module.exports = Jacuzzis;
