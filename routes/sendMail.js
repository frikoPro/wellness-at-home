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
		from: `${req.body.name} ${req.body.email}`,
		to: "jackson16@ethereal.email",
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
		} else {
			res.json({
				status: 'success',
			});
		}
	});
});

module.exports = router;
