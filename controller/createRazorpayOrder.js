const Razorpay = require('razorpay');

const razorpay = new Razorpay({
  key_id: 'rzp_test_QhUPRK6Lamuxrr',
  key_secret: 'wLHtt0qN8QY4VxKiuKHJ3NQm',
});

const createRazorpayOrder = function (req, res){
    const options = {
      amount: 50000,
      currency: 'INR',
      receipt: 'order_receipt',
    };
    razorpay.orders.create(options, (err, order) => {
      if (err) {
        return res.status(500).json({ error: 'Error creating order' });
      }
      res.json(order);
    });
  };

  module.exports = createRazorpayOrder;