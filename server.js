const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const path = require('path');

require('dotenv').config();

const port = 8080;

app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));
app.use(bodyParser.json());

app.use(cookieParser());
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

const reviewInvRouter = require('./routes/reviewInvites');
const jacuzzisRouter = require('./routes/jacuzzis');
const productsRouter = require('./routes/products');
const userRouter = require('./routes/Users');
const slideshowRouter = require('./routes/slideshow');
const facebookRouter = require('./routes/facebook');
const FAQRouter = require('./routes/FAQs');
const SendMailRouter = require('./routes/sendMail');
const orderRouter = require('./routes/orders');
const eventRouter = require('./routes/events');

const errorController = require('./controllers/ErrorController');

app.use('/reviewinvites', reviewInvRouter);
app.use('/jacuzzis', jacuzzisRouter);
app.use('/products', productsRouter);
app.use('/users', userRouter);
app.use('/slideshow', slideshowRouter);
app.use('/facebook', facebookRouter);
app.use('/FAQ', FAQRouter);
app.use('/sendmail', SendMailRouter);
app.use('/orders', orderRouter);
app.use('/events', eventRouter);

app.use(errorController);

app.get('/*', (req, res) => {
	res.sendFile(path.join(__dirname, '/client/build/index.html'));
});

app.listen(port, function () {
	console.log(`CORS-enabled web server listening on port ${port}`);
});
