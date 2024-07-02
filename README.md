# WhatsApp Bot 🤖

The WhatsApp bot, built in Node.js with Twilio, provides features for sending and receiving messages, personalized automatic responses, and integration with external APIs. All of this is aimed at delivering an enhanced user experience and efficient automation.

## Topics

- [Node.js](#nodejs)
- [Validation](#validation)
- [Twilio API](#twilio-api)

## Node.js

This bot is developed using Node.js, a JavaScript runtime built on Chrome's V8 JavaScript engine. It allows for asynchronous event-driven programming which is perfect for handling incoming and outgoing messages efficiently.

## Validation

The script includes validation mechanisms to ensure that incoming messages are properly formatted and processed according to the bot's intended functionality. This helps maintain the reliability and security of interactions with users.

## Twilio API

Twilio is used to facilitate communication between the bot and WhatsApp users. It provides APIs for sending and receiving messages, managing contacts, and more. Integration with Twilio allows the bot to operate seamlessly within the WhatsApp ecosystem.

### Getting Started

1. **Clone the repository:**

   ```bash
   git clone https://github.com/malldonado/bot-whatsapp.git
   cd bot-whatsapp

2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Set up environment variables:**

Rename .env.example to .env and add your Twilio credentials and any other necessary environment variables:

```bash
TWILIO_ACCOUNT_SID=your_account_sid
TWILIO_AUTH_TOKEN=your_auth_token
TWILIO_PHONE_NUMBER=your_twilio_phone_number
```

4. **Run the bot:**

```bash
node index.js
```

# Contributing

Contributions are welcome! If you have suggestions or improvements, feel free to open an issue or a pull request.

# License

This project is licensed under the MIT License - see the LICENSE file for details.
