var nodemailer = require('nodemailer');
const fs = require('fs');
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: '@gmail.com',
    pass: ''
  }
});
let file = fs.readFileSync('./video.mp4');
var mailOptions = {
  from: '@gmail.com',
  to: ['@.com',"@.com"],
  subject: 'Sending Email using Node.js',
  text: 'That was easy!',
  html: '<h1>Welcome</h1><p>That was easy!</p>',
  attachments: [
    {
      filename: "video.mp4",
      path: './video.mp4'
    },
  ],
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});

