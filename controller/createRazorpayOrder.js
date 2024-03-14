const razorpay = require("../models/razorpayModel")

const createRazorpayOrder = function (req, res){
    const options = {
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