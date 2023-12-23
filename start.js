const mailer =  require("nodemailer")

let transport = mailer.createTransport({
    service:"gmail",
    auth:{
        user:"sumitrauniyar55@gmail.com",
        pass:"Sumit@123"
    }

})

let msgObject={
    from:"sumitrauniyar55@gmail.com",
    to:"sumitrauniyar03@gmail.com",
    subject:"Email using Node JS",
    text:"This Mail is for uhh "
}

transport.sendMail(msgObject,(error,info) =>{
    if(error){
        console.log(error)
    }else{
        console.log("Email Sent");
        console.log(info.response);
    }
})