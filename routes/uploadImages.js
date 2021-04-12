const multer = require('multer');
const verify = require('../controllers/AuthController');

const storage = multer.diskStorage({
	destination: 'public',

	// By default, multer removes file extensions so let's add them back
	filename: function (req, file, cb) {
		cb(null, file.originalname);
	},
});

var upload = multer({ storage: storage });

module.exports = upload;
