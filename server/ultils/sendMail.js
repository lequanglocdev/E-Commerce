const nodemailer = require("nodemailer")
const asyncHandler = require("express-async-handler")
const sendMail = asyncHandler(async ({email,html}) => { 
  const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.ethereal.email",
  port: 587,
  secure: false, // Use `true` for port 465, `false` for all other ports
  auth: {
    user: process.env.EMAIL_NAME,
    pass: process.env.EMAIL_APP_PASSWORD
  },
});

// async..await is not allowed in global scope, must use a wrapper

  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: 'Thuongmaidien  <no-relple@quanglocdev>', // sender address
    to: email, // list of receivers
    subject: "Forgot Password", // Subject line
    text: "Mật khẩu mới của bạn là", // plain text body
    html: html,  // html body
  });

    return info

})

module.exports = sendMail