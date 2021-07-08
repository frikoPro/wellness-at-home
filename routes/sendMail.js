const router = require('express').Router();
const nodemailer = require('nodemailer');
const path = require('path');
const username = process.env.MAIL_USER;
const password = process.env.MAIL_PASS;

let transport = nodemailer.createTransport({
	// host: 'smtp.ethereal.email',
	// port: 587,
	// secure: false,
	// auth: {
	// 	user: 'jackson16@ethereal.email',
	// 	pass: 'WhQcZbfSMpYvWNqe5w',
	// },
	service: 'Hotmail',
	auth: {
		user: username,
		pass: password,
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
		from: username, //change to username when ready to deploy
		to: username, //change to username when ready to deploy
		subject: req.body.problem,
		html: `<p><b>Navn: </b>${req.body.name}</p>
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

router.post('/recipt', (req, res, next) => {
	const { body } = req;

	const cart = body.cart.map(
		(item, i) => `<table
	style="
		border-bottom: 1px solid rgba(0, 0, 0, 0.125);
		margin-bottom: 20px;
		padding-bottom: 20px;
	"
>

	<tr>
		<td style="width: 10%">
			<img
				style="width: 100%"
				src=cid:unique@nodemailer.com${i}
			/>
		</td>
		<td style="vertical-align: baseline">
			<div style="margin-left: 5%">
				<h4
					style="
						margin: 0;
						font-size: 1.25rem;
						font-weight: 500;
						line-height: 1.2;
					"
				>
				${item.name} (${item.qty} stk)
				</h4>
				<div style="width: 40%; word-wrap: break-word">
					${item.aboutProduct}
				</div>
			</div>
		</td>
		<td style="vertical-align: baseline; white-space: nowrap; text-align: right">
			<div>NOK ${item.qty * item.price}</div>
		</td>
	</tr>
</table>`
	);

	const formattedCart = cart.reduce((acc, val) => val + acc);

	const mail = {
		from: 'fredrik_jansen1@hotmail.com',
		to: body.email,
		subject: 'Kvittering',
		html: `<div
		style="
			font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
				'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji',
				'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
			box-sizing: border-box;
			min-width: 0;
			word-wrap: break-word;
			background-color: #fff;
			background-clip: border-box;
			border: 1px solid rgba(0, 0, 0, 0.125);
			border-radius: 0.25rem;
			padding: 1rem;
		"
	>
	<h2 style="font-size: 1.25rem; font-weight: 500; line-height: 1.2">
					Takk for ditt kjøp ${body.firstName} ${body.lastName}
				</h2>
		${formattedCart}
		<div style="text-align: right">Total pris: NOK ${body.totalPrice}</div>
	</div>`,
		attachments: body.cart.map((item, i) => ({
			filename: item.images[0].image,
			path: path.join(__dirname, `../public/${item.images[0].image}`),
			cid: `unique@nodemailer.com${i}`,
		})),
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

/* */

/* 		<div style="
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
			'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji',
			'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
		box-sizing: border-box;
	">
	<div style="
			position: relative;
			display: flex;
			flex-direction: row;
			flex-wrap: wrap;
			min-width: 0;
			word-wrap: break-word;
			background-color: #fff;
			background-clip: border-box;
			border: 1px solid rgba(0, 0, 0, 0.125);
			border-radius: 0.25rem;
			padding: 1rem;
			align-items: end;
		">
		<h2 style="flex-basis: 100%;font-size: 1.25rem;font-weight: 500;line-height: 1.2;" class="h5">Takk for ditt kjøp ${
			body.firstName
		} ${body.lastName}</h2>
		${body.map(
			(item) => `<div style="display: flex; flex-basis: 10%">
		<img style="width: 100%" src="https://reactapp-303119.ew.r.appspot.com/${
			item.images[0].image
		}">
	</div>
	<div style="
			display: flex;
			flex-direction: row;
			flex-basis: 85%;
			flex-wrap: wrap;
			margin-left: 5%;
		">
		<h4 class="h5" style="margin: 0;flex-basis: 10%;font-size: 1.25rem;font-weight: 500;line-height: 1.2;">Filter (${
			item.qty
		} stk)</h4>
		<span style="flex-basis: 90%; text-align: end">NOK ${
			item.price * item.qty
		}</span>
		<div style="width: 50%; word-wrap: break-word">
			${item.aboutProduct}
		</div>
	</div>`
		)}
		
		<div style="
				margin: 10px 0 10px 0;
				border: 1px solid rgba(0, 0, 0, 0.125);
				flex-basis: 100%;
			"></div>
		<div style="text-align: right; flex-basis: 100%">Total pris: NOK ${
			body.totalPrice
		}</div>
	</div>
</div> */
