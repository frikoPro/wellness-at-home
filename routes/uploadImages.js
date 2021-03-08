const multer = require('multer');
const verify = require('../controllers/AuthController');
const router = require('express').Router();

const storage = multer.diskStorage({
	destination: 'public',

	// By default, multer removes file extensions so let's add them back
	filename: function (req, file, cb) {
		cb(null, file.originalname);
	},
});

router.route('/upload').post(verify, (req, res) => {
	let upload = multer({
		storage: storage,
	}).array('multi-files');

	upload(req, res, function (err) {
		// req.file contains information of uploaded file
		// req.body contains information of text fields, if there were any

		if (err) {
			return res.send('Error: ', err);
		}

		res.send(req.files);
	});
});

router.route('/single').post(verify, (req, res) => {
	let upload = multer({
		storage: storage,
	}).single('file');

	upload(req, res, (err) => {
		if (err) {
			return res.send('error: ', err);
		}

		res.send(req.file);
	});
});

module.exports = router;
