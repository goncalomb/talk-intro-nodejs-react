const express = require('express');

const app = express();

app.post('/api/message', (req, res) => {
    console.log(req.body);
});
