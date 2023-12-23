const nodemailer = require("nodemailer");
require("dotenv").config;
const path = require("path");

const transporter = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        // TODO: replace `user` and `pass` values from <https://forwardemail.net>
        user: "sumitrauniyar03@gmail.com",
        pass: "YOUR_PASSWORD",
      },
    });

 const mailOptions = {
            from:{
                name: "Sumit Rauniyar",
                address: "sumitrauniyar03@gmail.com"
            },// sender address
            to: ["sumitrauniyar55@gmail.com","vijay.yadav680@gmail.com"],// list of receivers
            subject: "Hello ✔", // Subject line
            text: "Hello world?", // plain text body
            html: "<b>Hello world?</b>", // html body
            attachments: [{
                filename: "9.1 Arrays.pdf",
                path: path.join(__dirname,"9.1 Arrays.pdf"),
                contentType:"application/pdf"
            },
            {
                filename: "sumit.jpg",
                path: path.join(__dirname,"sumit.jpg"),
                contentType:"image/jpg"
            }
            ]
          }

const sendMail = async(transporter,mailOptions) => {
    try{
        await transporter.sendMail(mailOptions);
        console.log("Email has been sent!");
    } catch(error){
        console.log(error);
    }
}

sendMail(transporter,mailOptions);


































// "use strict";
// const nodemailer = require("nodemailer");

//

// // async..await is not allowed in global scope, must use a wrapper
// async function main() {
//   // send mail with defined transport object
//   

//   console.log("Message sent: %s", info.messageId);
//   // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

//   //
//   // NOTE: You can go to https://forwardemail.net/my-account/emails to see your email delivery status and preview
//   //       Or you can use the "preview-email" npm package to preview emails locally in browsers and iOS Simulator
//   //       <https://github.com/forwardemail/preview-email>
//   //
// }

// main().catch(console.error);
