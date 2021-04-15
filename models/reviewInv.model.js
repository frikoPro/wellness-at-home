const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ReviewInvSchema = new Schema({
	mail: { type: String, unique: true },
	product: {
		type: String,
		required: [true, 'Invitasjonen må tilhøre et produkt.'],
	},
});

const ReviewInv = mongoose.model('ReviewInvite', ReviewInvSchema);

module.exports = ReviewInv;
