const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const SlideshowSchema = new Schema({
	image: { type: String, required: [true, 'Må ha et bilde'] },
	textHead: String,
	textP: String,
});

const Slideshow = mongoose.model('slideshow', SlideshowSchema);

module.exports = Slideshow;
