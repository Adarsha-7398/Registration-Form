// const express = require('express');
// const Razorpay = require('razorpay');
// const bodyparser = require('body-parser');
// const crypto = require('crypto')

// const app = express();
// const port = 3000;

// app.use(bodyparser.json())
// const razorpay = new Razorpay({
//   key_id: 'rzp_test_QhUPRK6Lamuxrr',
//   key_secret: 'wLHtt0qN8QY4VxKiuKHJ3NQm',
// });

// // app.use(express.json());
// // app.use(express.urlencoded({ extended: true }));

// app.listen(port, () => {
//   console.log(`Server is running at http://localhost:${port}`);
// });

// app.get("/razorpay", (req, res)=>{
//       res.sendFile("standard.html", {root: __dirname})
//     })

// app.post('/createorder', (req, res) => {
//   const options = {
//     amount: 50000,
//     currency: 'INR',
//     receipt: 'order_receipt',
//   };
//   razorpay.orders.create(options, (err, order) => {
//     if (err) {
//       return res.status(500).json({ error: 'Error creating order' });
//     }
//     res.json(order);
//   });
// });

// app.post('/verify-payment', (req, res) => {
//   console.log(req.body);
//     var data = req.body.razorpay_order_id + "|" + req.body.razorpay_payment_id;
//     var expectedSignature = crypto.createHmac('sha256', 'wLHtt0qN8QY4VxKiuKHJ3NQm').update(data.toString()).digest('hex');
                                    
//      console.log("sig"+ req.body.razorpay_signature);
//      console.log("sig"+ expectedSignature);

//   if (expectedSignature === req.body.razorpay_signature) {
//     // Signature matches, payment successful
//     return res.json({ status: 'success', message: 'Payment successful' });
//   } else {
//     // Signature mismatch, payment failed
//     return res.json({ status: 'error', message: 'Payment is failed' });
//   }
// });


