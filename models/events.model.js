const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const opts = {
	// Make Mongoose use Unix time (seconds since Jan 1, 1970)
	timestamps: { currentTime: () => Math.floor(Date.now() / 1000) },
};

const EventSchema = new Schema(
	{
		date: {
			date_start: { type: String, required: [true, 'Må ha en start dato'] },
			date_end: { type: String, required: [true, 'Må ha en slutt dato'] },
		},
		address: {
			streetname: { type: String, required: [true, 'Må ha et gatenavn'] },
			city: { type: String, required: [true, 'Må ha en by'] },
			postalnr: { type: String, required: [true, 'Må ha et postnummer'] },
		},
		venue: { type: String, required: [true, 'Må ha et stedsnavn'] },
		pos: { lat: Number, lng: Number },
		meta: {
			weekdays: {
				type: [{ day: String, start: Number, end: Number }],
				_id: false,
			},
			desc: String,
		},
		img: String,
	},
	{ timestamps: true }
);

const Events = mongoose.model('events', EventSchema);

module.exports = Events;
