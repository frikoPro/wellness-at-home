const multer = require('multer');
const router = require('express').Router();

const storage = multer.diskStorage({
	destination: 'public',

	// By default, multer removes file extensions so let's add them back
	filename: function (req, file, cb) {
		cb(null, file.originalname);
	},
});

router.route('/upload').post((req, res) => {
	// 'profile_pic' is the name of our file input field in the HTML form
	let upload = multer({
		storage: storage,
	}).array('multi-files');

	upload(req, res, function (err) {
		// req.file contains information of uploaded file
		// req.body contains information of text fields, if there were any

		if (err) {
			return res.send('Error: ', err);
		}

		// req.files.forEach((file) => res.send(file.path));

		res.send(req.files);
	});
});

module.exports = router;
