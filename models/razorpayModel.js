const mongoose = require('mongoose');

const razorpaySchema = new mongoose.Schema({
  razorpay_order_id: String,
  razorpay_payment_id: String,
});

const Payment = mongoose.model('Payment', razorpaySchema);

module.exports = Payment;