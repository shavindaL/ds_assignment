const { sendEmail } = require('../utils/sendMail');

//* Send a new mail
const newMail = async (req, res) => {
    const { email, subject, body } = req.body;

    sendEmail({
        from: process.env.EMAIL, // sender
        to: email, // receiver
        subject: subject, // Subject
        html: body// html body
    })
        .then(msg => { console.log(`New mail has been sent to ${email} by Mail Service.`); res.status(201).json({ message: msg }); })
        .catch(err => {console.error("Error Occured"); res.status(400).json({ error: err });});
        
}

module.exports = {
    newMail
}
