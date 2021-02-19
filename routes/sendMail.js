var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
var cors = require('cors');

let transport = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false,
    auth: {
        user: 'jackson16@ethereal.email',
        pass: 'WhQcZbfSMpYvWNqe5w',
    },
});

transport.verify(function(error, success) {
    if(error) {
        console.log(error);
    } else {
        console.log("Server is ready to take our messages");
    }
});

router.post('/send', (req, res, next) => {
    var name = req.body.name,
    var email = req.body.email,
    var phone = req.body.phone,
    var problem = req.body.problem,
    var message = req.body.message,

    var mail = {
        from: name, email, phone,
        to: "urs_ole@hotmail.com",
        subject: problem,
        text: message
    }

    transport.sendMail(mail, (err, data) => {
        if(err) {
            res.json({
                status: 'fail'
            })
        } else {
            res.json({
                status: 'success'
            })
        }
    })
})