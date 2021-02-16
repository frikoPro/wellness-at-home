var express = require('express');
var cors = require('cors');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var path = require('path');
require('dotenv').config();

const port = 8080;

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '/client/build')));
app.use(express.static('public'));

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

var imageRouter = require('./routes/uploadImages');
var jacuzzisRouter = require('./routes/jacuzzis');
var productsRouter = require('./routes/products');

app.use('/images', imageRouter);
app.use('/jacuzzis', jacuzzisRouter);
app.use('/products', productsRouter);

app.get('/*', (req, res) => {
	res.sendFile(path.join(__dirname, '/client/build/index.html'));
});

app.use((err, req, res, next) => {
	res.status(422).send({ error: err._message });
});

app.listen(port, function () {
	console.log(`CORS-enabled web server listening on port ${port}`);
});
