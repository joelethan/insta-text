const express = require('express');

const { loginAndSendMessage3 } = require('./helpers/instagramHelper');
const { loginAndSendMessage4 } = require('./helpers/testHelpers');

const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Running Tests!!!')
})

app.get('/test-browser', async (req, res) => {
    try {
        await loginAndSendMessage4();
    } catch (error) {
        console.error('Error:', error);
    }
})

app.get('/send-message', async (req, res) => {
    // const { username, password, recipientUsername, message } = req.body;
    const username = "joel_ethan_k"
    const password = "166091@INSTA"
    const recipientUsername = "denisderone8"
    const message = "message"

    try {
        await loginAndSendMessage3(username, password, recipientUsername, message);
        return;
    } catch (error) {
        console.error('Error:', error);
        return;
    }
});

app.listen(port, () => {
    console.log(`Example app listening on Port ${port}`)
})
