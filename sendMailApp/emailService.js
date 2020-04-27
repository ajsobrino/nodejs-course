const nodemailer = require('nodemailer');


const sendEmail = function(toEmail, subject, text) {
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        port: 567,
        auth: {
            user: 'email@gmail.com',
            pass: 'password'
        }
    });

    let mailOptions = {
        from: 'email@gmail.com',
        to: toEmail,
        subject: subject,
        text: text
    };

    transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}

module.exports = {
    sendEmail
}