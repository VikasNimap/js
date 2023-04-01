const multer = require('multer')

const filter = (req, file, cb) => {
    // console.log(file.mimetype);
    if (file.mimetype === "xlsx" || file.mimetype === "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet") {
        cb(null, true);
    } else {
        cb(new Error("Not a xlsx File!!"), false);
    }
};

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + ".xlsx"
        cb(null, file.fieldname + '-' + uniqueSuffix)
    }
})

exports.upload = multer({
    storage: storage,
    fileFilter: filter,
});
