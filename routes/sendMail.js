const router = require('express').Router();
const nodemailer = require('nodemailer');

let transport = nodemailer.createTransport({
	host: 'smtp.ethereal.email',
	port: 587,
	secure: false,
	auth: {
		user: 'jackson16@ethereal.email',
		pass: 'WhQcZbfSMpYvWNqe5w',
	},
});

transport.verify(function (error, success) {
	if (error) {
		console.log(error);
	} else {
		console.log('Server is ready to take our messages');
	}
});

router.post('/send', (req, res, next) => {
	var mail = {
		from: req.body.name,
		to: 'urs_ole@hotmail.com',
		subject: req.body.problem,
		text: req.body.message,
	};

	transport.sendMail(mail, (err, data) => {
		if (err) {
			res.json({
				status: 'fail',
			});
		} else {
			res.json({
				status: 'success',
			});
		}
	});
});

module.exports = router;
