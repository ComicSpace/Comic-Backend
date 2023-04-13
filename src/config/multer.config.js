const multer = require('multer');


// Set up Multer to handle file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    const random = `${Date.now()}_${file.originalname}`
    cb(null, random);
  },
});

exports.upload = multer({ storage });