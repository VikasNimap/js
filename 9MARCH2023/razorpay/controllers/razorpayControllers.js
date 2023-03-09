const Razorpay = require('razorpay');

exports.createOrder = async (req, res) => {
    const instance = new Razorpay({
        key_id: 'rzp_test_6ldzGfoORByhP7',
        key_secret: '7KhZbdO8RlF0mz35cZilEut3'
    })

    const options = {
        amount: 100 * 100,
        currency: 'INR',
    }
    instance.orders.create(options, function (err, order) {
        if(err){
            return res.send({result:err});
        }
        else{
            console.log(order,order.id);
            return res.send({result:order.id})
        }
    })
}
