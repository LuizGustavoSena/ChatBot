require('dotenv').config();
const tmi = require('tmi.js');

const client = new tmi.Client({
    options: { debug: true, messagesLogLevel: "info" },
    connection: {
        reconnect: true,
        secure: true
    },
    identity: {
        username: process.env.USER,
        password: process.env.PASSWORD
    },
    channels: [process.env.CHANNEL]
});

client.connect();