var express = require('express');
var router = express.Router();
const controllers = require('../controllers/razorpayControllers');
/* GET home page. */
router.get('/checkout',controllers.createOrder);

module.exports = router;
