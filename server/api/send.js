const router = require('express').Router();
const nodemailer = require('nodemailer');

router.post('/send', (req, res, next) => {
  const output = `<p>You have a new Contact for ${
    req.body.email
  } </p> <p>Contact Details.</p> <ul>  <li>Name:${
   req.body.name ? req.body.name : 'Quick Contact'
  } <li>Email:${req.body.email}</li>
  <li>Subject:${req.body.subject}</li>
  <li>Phone:${
    req.body.phone ? req.body.phone : 'No Phone(Quick req.body)'
  }</li>
  </ul>
  <h3>Message</h3>
  <p>${req.body.message}</p>`;
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    secure: false, // true for 465, false for other ports
    auth: {
      user: 'infohayesmail@gmail.com', // generated ethereal user
      pass: 'Land1447' // generated ethereal password
    }
  });

  let mailOptions = {
    from: `"Website Contact" ${req.body.email}`, // sender address
    to: 'info@hayesdevelopers.com', // list of receivers
    subject: `${req.body.subject}`, // Subject line
    text: `${req.body.message}`, // plain text body
    html: output // html body
  };
  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      return console.error(err);
    }
   console.log('Message sent: %s', info.messageId)
   console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info))
   res.render('contact', {msg: 'Email has been sent'})
    })
});
module.exports = router;
