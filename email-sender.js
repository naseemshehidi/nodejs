const nodemailer = require('nodemailer');

// Create a transporter object using SMTP transport
let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: 'your_email@gmail.com', // replace with your email address
        pass: 'your_password' // replace with your password
    }
});

// Define email options
let mailOptions = {
    from: 'your_email@gmail.com', // replace with your email address
    to: 'recipient_email@example.com', // replace with recipient email address
    subject: 'Test Email',
    text: 'Hello Node!',
    html: '<p>Hello Node!</p>'
};

// Send email
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});
