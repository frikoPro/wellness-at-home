const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ArticleSchema = {
	articleNumber: Number,
	articleTitle: String,
	articleText: String,
};

const PrivacySchema = new Schema(
	{
		...ArticleSchema,
		subArticles: [ArticleSchema],
	},
	{ timestamps: true }
);

const PrivacyData = mongoose.model('PrivacyData', PrivacySchema);

module.exports = PrivacyData;
