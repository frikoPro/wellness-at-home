const handleDuplicateKeyError = (err, res) => {
	const fields = Object.keys(err.keyValue);

	const code = 409;

	const error = [`Et produkt med dette ${fields} er allerede tatt`];

	res.status(code).send({ messages: error, fields: fields, test: err });
};

const handleValidationError = (err, res) => {
	let errors = Object.values(err.errors).map((el) => el.message);

	let fields = Object.values(err.errors).map((el) => el.path);

	let code = 400;

	res.status(code).send({ messages: errors, fields: fields });
};

module.exports = (err, req, res, next) => {
	try {
		if (err.name === 'ValidationError')
			return (err = handleValidationError(err, res));
		if (err.code && err.code === 11000)
			return (err = handleDuplicateKeyError(err, res));
	} catch (err) {
		res.status(500).send('An unknown error has occured');
	}
};
