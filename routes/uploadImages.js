const multer = require('multer');
const verify = require('../controllers/AuthController');
const fs = require('fs');

const storage = multer.diskStorage({
	destination: 'public',

	// By default, multer removes file extensions so let's add them back
	filename: function (req, file, cb) {
		cb(null, file.originalname);
	},
});

var upload = multer({ storage: storage });

//Deleting images that is not being used after update.
exports.onUpdate = (req) => {
	const body = JSON.parse(req.body.data);

	//if images is stored in a array
	if (body.images) {
		const images = body.images.map((item) => item.image);

		const newImages = req.files.map((file) => file.filename);

		images.forEach((image) => {
			if (!newImages.includes(image)) fs.unlinkSync(`./public/${image}`);
		});

		//if object only contains one image
	} else {
		// if old image name different from new file, delete old image.
		if (body.image !== req.files[0].filename)
			fs.unlinkSync(`./public/${body.image}`);
	}
};

exports.onDelete = (images) =>
	images.forEach((item) => fs.unlinkSync(`./public/${item.image}`));

exports.upload = upload;
