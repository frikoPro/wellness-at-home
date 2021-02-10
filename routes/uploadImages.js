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
	}).single('file');

	upload(req, res, function (err) {
		// req.file contains information of uploaded file
		// req.body contains information of text fields, if there were any

		if (req.fileValidationError) {
			return res.send(req.fileValidationError);
		} else if (!req.file) {
			return res.send('Please select an image to upload');
		} else if (err instanceof multer.MulterError) {
			return res.send(err);
		} else if (err) {
			return res.send(err);
		}

		// Display uploaded image for user validation
		res.send(
			`You have uploaded this image: <hr/><img src="${req.file.path}" width="500"><hr /><a href="./">Upload another image</a>`
		);
	});
});

module.exports = router;
