var express = require('express');
var router = express.Router();
const controllers = require('../controllers/userControllers');
/* GET home page. */
router.post('/checkout/:id',controllers.users);
router.get('/checkout/:id',controllers.payment);
module.exports = router;
