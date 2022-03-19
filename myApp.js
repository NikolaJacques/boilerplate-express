const express = require('express'); 
const dotenv = require('dotenv');
const app = express();

/* console.log('Hello World');

app.get('/', (req,res) => {
    res.send('Hello Express');
}); */

/* const assetsDir = __dirname + '/public';

app.use('/public',express.static(assetsDir)); */

app.get('/json', (req, res) => {
    res.json({
        message: process.env.MESSAGE_STYLE==='uppercase'?'Hello json'.toUpperCase():'Hello json'
    });
});

/* const absolutePath = __dirname + '/views/index.html'; */

const absolutePath = __dirname + '/json';

app.get('/', (req,res) => {
    res.sendFile(absolutePath);
});































 module.exports = app;
