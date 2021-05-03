const router = require('express').Router();
const nodemailer = require('nodemailer');
const username = process.env.MAIL_USER;
const password = process.env.MAIL_PASS;

let transport = nodemailer.createTransport({
	service: "Hotmail",
	auth: {
		user: username,
		pass: password
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
		from: username,
		to: username,
		subject: req.body.problem,
		html: 
			`<p><b>Navn: </b>${req.body.name}</p>
			<p><b>E-Post: </b>${req.body.email}</p>
			<p><b>Telefonnummer: </b>${req.body.phone}</p>
			<p><b>Oppgitt problem: </b>${req.body.problem}</p>
			<p><b>Melding:</b></p>
			<p>${req.body.message}</p>`,
	};

	transport.sendMail(mail, (err, data) => {
		if (err) {
			res.json({
				status: 'fail',
			});
			console.log(err);
		} else {
			res.json({
				status: 'success',
			});
		}
	});
});

module.exports = router;
