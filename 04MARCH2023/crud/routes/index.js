var express = require('express');
var router = express.Router();
const upload = require('../multer');
const controllers = require('../controllers/userControllers');
/* GET home page. */
router.post('/users',controllers.createUser);
router.post('/upload',upload.single("data"),controllers.bulkUpload);
router.get('/users',controllers.getUser);
router.put('/users/:id',controllers.updateUser);
router.delete("/users/:id",controllers.deleteUser);
module.exports = router;
