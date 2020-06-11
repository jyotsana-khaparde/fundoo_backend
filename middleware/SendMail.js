const nodemailer = require('nodemailer');
/*
Here we are configuring our SMTP Server details.
STMP is mail server which is responsible for sending and recieving email.
*/
exports.sendEMailFunction = (url) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.GMAIL_USER,
            pass: process.env.PASS,
        },
    });
    const mailOptions = {
        from: process.env.GMAIL_USER, // sender address
        to: 'jyotsanakhaparde0597@gmail.com', // list of receivers
        subject: 'Verify your email', // Subject line
        text: url
    };
    transporter.sendMail(mailOptions, function (err, info) {
        if (err)
            console.log(err)
        else
            console.log(info);
    });
}