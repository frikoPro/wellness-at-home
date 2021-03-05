const router = require('express').Router();
const User = require('../models/user.model');
const jwt = require('jsonwebtoken');
const verify = require('../controllers/AuthController');

router.get('/', verify, async (req, res, next) => {
	try {
		const result = await User.find();
		res.status(200).json(result);
	} catch (err) {
		next(err);
	}
});

router.post('/add', verify, async (req, res, next) => {
	const username = req.body.username;
	const password = req.body.password;

	console.log(username);

	const newUser = new User({
		username,
		password,
	});

	try {
		await newUser.save();
		res.status(200).json('registert');
	} catch (err) {
		next(err);
	}
});

router.route('/login').post(async (req, res, next) => {
	const user = await User.findOne({ username: req.body.username });

	const errorResponse = 'Feil brukernavn eller passord';
	if (!user)
		return res.status(400).send({ message: errorResponse, valid: false });
	const validPass = req.body.password === user.password;
	if (!validPass)
		return res.status(400).send({ message: errorResponse, valid: false });

	const token = jwt.sign({ _id: user._id }, `${process.env.TOKEN_SECRET}`);
	res
		.header('auth-token', token)
		.send({ valid: true, message: 'innlogging velykket', token: token });
});

module.exports = router;
