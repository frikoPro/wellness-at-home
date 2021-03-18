const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ProductsSchema = new Schema({
	name: {
		type: String,
		required: [true, 'Produktet må ha et navn'],
		unique: true,
	},
	category: { type: String, required: [true, 'Produktet må ha en kategori'] },
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
	affiliation: { type: [{ _id: false, serie: String, bad: String }] },
	aboutProduct: { type: String, required: [true, 'Du må ha en beskrivelse'] },
	price: { type: Number, required: [true, 'Du må taste inn en pris'] },
	techSpec: {
		type: [
			{
				_id: false,
				egenskap: String,
				verdi: String,
			},
		],
		validate: [
			(val) => val.length > 0,
			'Du må ha hvertfall en teknisk spesifikasjon',
		],
	},
	relatedProducts: [String],
});

const Products = mongoose.model('Products', ProductsSchema);

module.exports = Products;
