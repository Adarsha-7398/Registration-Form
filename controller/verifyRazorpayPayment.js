const crypto = require('crypto')

const verifyRazorpayPayment = function (req, res){
    console.log(req.body);
      var data = req.body.razorpay_order_id + "|" + req.body.razorpay_payment_id;
      var expectedSignature = crypto.createHmac('sha256', 'wLHtt0qN8QY4VxKiuKHJ3NQm').update(data.toString()).digest('hex');
                                      
       console.log("sig"+ req.body.razorpay_signature);
       console.log("sig"+ expectedSignature);
  
    if (expectedSignature === req.body.razorpay_signature) {
      // Signature matches, payment successful
      return res.json({ status: 'success', message: 'Payment successful' });
    } else {
      // Signature mismatch, payment failed
      return res.json({ status: 'error', message: 'Payment is failed' });
    }
  };


module.exports = verifyRazorpayPayment