const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const FAQSchema = new Schema({
	question: {
		type: String,
		required: [true, 'Et spørsmål kreves'],
	},
	answer: {
		type: String,
		required: [true, 'Trenger et svar'],
	},
});

const FAQ = mongoose.model('FAQ', FAQSchema);

module.exports = FAQ;
