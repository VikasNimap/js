const multer = require("multer");

const csvFilter = (req, file, cb) => {
  if (file.mimetype=="xlsx") {
    cb(null, true);
    console.log(file.mimetype);
  } else {
    cb("Please upload only csv file.", false);
  }
};

var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null,"uploads");
  },
  filename: (req, file, cb) => {
    console.log(file.originalname);
    cb(null, `${file.originalname}`);
  },
});

var uploadFile = multer({ storage: storage });
module.exports = uploadFile;