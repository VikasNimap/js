var express = require('express');
var router = express.Router();
const multer = require('../multer');
const controllers = require('../controllers/userControllers');
/* GET home page. */
router.post('/upload',multer.upload.single('data'),controllers.createUsers);

module.exports = router;
