const crypto = require('crypto')
const Payment = require('../models/razorpayModel');

const verifyRazorpayPayment = async function (req, res){
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;
    console.log(req.body);
      // var data = req.body.razorpay_order_id + "|" + req.body.razorpay_payment_id;
      var data = razorpay_order_id + "|" + razorpay_payment_id;
      var expectedSignature = crypto.createHmac('sha256', 'wLHtt0qN8QY4VxKiuKHJ3NQm').update(data.toString()).digest('hex');
                                      
       console.log("sig"+ razorpay_signature);
       console.log("sig"+ expectedSignature);
  
    if (expectedSignature === req.body.razorpay_signature) {
      // Signature matches, payment successful
      res.json({ status: 'success', message: 'Payment successful' });
    } else {
      // Signature mismatch, payment failed
      res.json({ status: 'error', message: 'Payment is failed' });
    }

    const payment = new Payment({
      razorpay_order_id,
      razorpay_payment_id,
    });
    try {
      await payment.save();
      res.json({ status: 'success', message: 'Payment successful' });
    } catch (error) {
      res.status(500).json({ error: 'Error saving payment information' });
    }
  };


module.exports = verifyRazorpayPayment