const express = require('express'); 
require('dotenv').config();
const app = express();

/* console.log('Hello World');

app.get('/', (req,res) => {
    res.send('Hello Express');
}); */

app.get('/json', (req, res) => {
    res.json({
        message: process.env.MESSAGE_STYLE==='uppercase'?'Hello json'.toUpperCase():'Hello json'
    });
});

const assetsDir = __dirname + '/public';

app.use('/public',express.static(assetsDir));

const absolutePath = __dirname + '/views/index.html';

app.get('/', (req,res) => {
    res.sendFile(absolutePath);
});































 module.exports = app;
