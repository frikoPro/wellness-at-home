const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const OrderSchema = new Schema(
	{
		firstName: {
			type: String,
			required: [true, 'Du må skrive inn ditt fornavn.'],
		},
		lastName: {
			type: String,
			required: [true, 'Du må skrive inn ditt etternavn.'],
		},
		address: { type: String, required: [true, 'Du må skrive inn en adresse.'] },
		email: { type: String },
		postalCode: {
			type: String,
			required: [true, 'Du må skrive inn et postnummer.'],
		},
		postalPlace: {
			type: String,
			required: [true, 'Du må skrive inn et poststed.'],
		},
		cart: { type: [{ _id: false, type: Object }] },
	},
	{ timestamps: true }
);

const Orders = mongoose.model('Orders', OrderSchema);

module.exports = Orders;
