const express = require('express');

/**
 * This is just a proof of concept server.
 *
 * Don't expect it to have all the necessary checks and validations...
 * 'express-validator' is a good library for this:
 * https://express-validator.github.io/docs/
 *
 * There are libraries for logging requests too.
 */

const MAX_MESSAGES_TO_SEND = 10;

const allMessages = [];

// add message to the list if it's newer than the last one
function addMessage(message) {
    const lastMessage = allMessages.length ? allMessages[allMessages.length] : null;
    if (!lastMessage || lastMessage.timestamp <= message.timestamp) {
        allMessages.push(message);
        return true;
    }
    return false;
}

// get messages from the list since a specific date, up to MAX_MESSAGES_TO_SEND
function getMessagesSince(timestamp) {
    const result = [];
    for (let l = allMessages.length - 1; l >= 0 && allMessages[l].timestamp >= timestamp && result.length <= MAX_MESSAGES_TO_SEND; l--) {
        result.push(allMessages[l]);
    }
    return result;
}

// create the express app
const app = express();

// allow cross-origin access
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');
    next();
});

app.use(express.json());

// server the built app (npm run build)
app.use('/', express.static('dist'));

// endpoint to get messages
app.get('/api/message', (req, res) => {
    const since = req.query.since || 0;
    console.log(`GET /api/message (since = ${since})`);

    res.write(JSON.stringify(getMessagesSince(since)));
    res.end();
});

// endpoint to post messages
app.post('/api/message', (req, res) => {
    const data = req.body;
    console.log('POST /api/message');
    // console.log(req.body);

    if (
        data.id && typeof data.id === 'string' &&
        data.timestamp && typeof data.timestamp === 'number' &&
        data.username && typeof data.username === 'string' &&
        data.message && typeof data.message === 'string'
    ) {
        addMessage({
            id: data.id,
            timestamp: data.timestamp,
            username: data.username,
            message: data.message
        });
        console.log(`new message, count = ${allMessages.length}`);
    } else {
        console.log(`invalid message, count = ${allMessages.length}`);
    }

    res.end();
});

// start listening and handle close

const server = app.listen(9000, () => {
    console.log('listening');
});

server.on('close', () => {
    console.log('closed');
});

process.on('SIGINT', () => {
    console.log('closing');
    server.close();
});
