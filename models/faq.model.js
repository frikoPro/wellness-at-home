const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const FAQSchema = new Schema({
	question: {
		type: String,
		required: [true, 'Uten et spørsmål er det ikke noe svar'],
	},
	answer: {
		type: String,
		required: [true, 'Uten et svar så...?'],
	},
});

const FAQ = mongoose.model('FAQ', FAQSchema);

module.exports = FAQ;
