const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');

const port = 8080;

const cors = require('cors');

require('dotenv').config();

const app = express();

// app.use(cors);

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

const productsRouter = require('./routes/products');
const usersRouter = require('./routes/users');
const imageRouter = require('./routes/uploadImages');

app.use(express.static(path.join(__dirname, '/client/build')));
app.use(express.static(path.join(__dirname + '/public')));

app.use('/products', productsRouter);
app.use('/users', usersRouter);
app.use('/images', imageRouter);

app.get('/*', (req, res) => {
	res.sendFile(path.join(__dirname, '/client/build/index.html'));
});

app.use((err, req, res, next) => {
	res.status(422).send({ error: err._message });
});

app.listen(port, () => {
	console.log(`Express Server running on port ${port}`);
});

/* var express = require('express');
var cors = require('cors');
var app = express();

app.use(cors());

app.get('/products/:id', function (req, res, next) {
	res.json({ msg: 'This is CORS-enabled for all origins!' });
});

app.listen(5001, function () {
	console.log('CORS-enabled web server listening on port 80');
});
 */
