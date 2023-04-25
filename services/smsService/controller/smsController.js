// Method to get sms service
const getSMSService = async (req, res) => {
    res.status(200).send("SMS Service");
};

// Method to send a SMS
const sendSMS = async (req, res) => {

    //Initialize the library
    const { Vonage } = require('@vonage/server-sdk');

    const vonage = new Vonage({
        apiKey: process.env.API_KEY,
        apiSecret: process.env.API_SECRET
    });

    // Define the SMS details
    const from = "IHerb Dummy"
    const to = "94" + req.body.phoneNumber.slice(1);
    const text = req.body.smsBody;


    // Define the function to send a new SMS
    async function sendNewSMS() {
        try {
            const resp = await vonage.sms.send({ to, from, text });

            // Respond with status code 200 (OK) if message sent successfull
            res.status(200).send("Message sent successfully");

        } catch (err) {
            // Respond with status code 400 (Bad Request) if message sending was unsuccessful
            res.status(400).send("There was an error sending the messages");

            // Print the error message
            console.log(err.message);
        }
    };

    // Invoke the sendNewSMS function
    sendNewSMS();
}


module.exports = {
    getSMSService,
    sendSMS
}