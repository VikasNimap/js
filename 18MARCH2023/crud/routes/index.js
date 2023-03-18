var express = require('express');
var router = express.Router();
const controllers = require('../controllers/userControllers');
const upload = require('../multer');
/* GET home page. */
router.post("/users",upload.upload.single("file"),controllers.uploadUsers);

module.exports = router;
