const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');

require('dotenv').config();

const app = express();

app.use(bodyParser.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
	useNewUrlParser: true,
	useCreateIndex: true,
	useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once('open', () => {
	console.log('MongoDB database connection established sucessfully');
});

const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');
const imageRouter = require('./routes/uploadImages');

app.use(express.static(path.join(__dirname, '/client/build')));
app.use('/static', express.static(path.join(__dirname, '/client/src/images')));

app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);
app.use('/images', imageRouter);

app.get('/*', (req, res) => {
	res.sendFile(path.join(__dirname, '/client/build/index.html'));
});

app.use((err, req, res, next) => {
	res.status(422).send({ error: err._message });
});

app.listen(8080, () => {
	console.log('Express Server running on port 8080');
});
