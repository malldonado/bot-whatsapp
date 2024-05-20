const express = require('express');
const bodyParser = require('body-parser');
const twilio = require('twilio');

// Your Twilio account credentials
const accountSid = '';
const authToken = '';

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));

const client = twilio(accountSid, authToken);

function sendMessage(number, message) {
    client.messages
        .create({
            body: message,
            from: '', // Twilio number associated with your account
            to: number // Phone number to which you want to send the message
        })
        .then(message => console.log(`Message sent: ${message.sid}`))
        .catch(err => console.error(`Error sending message: ${err}`));
}

// Webhook to handle incoming messages
app.post('/webhook', twilio.webhook(), (req, res) => {
    const twiml = new twilio.twiml.MessagingResponse();

    // Send an example message as a response
    twiml.message('Hello! Thank you for your message.');

    res.writeHead(200, { 'Content-Type': 'text/xml' });
    res.end(twiml.toString());
});


app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
