const express = require('express'); 
require('dotenv').config();
const app = express();

/* console.log('Hello World');

app.get('/', (req,res) => {
    res.send('Hello Express');
}); */

/* const assetsDir = __dirname + '/public';

app.use('/public',express.static(assetsDir)); */

const string = process.env.MESSAGE_STYLE==='uppercase'?('Hello json').toUpperCase():'Hello json';

app.get('/json', (req, res) => {
    res.json({
        message: string
    });
});

/* const absolutePath = __dirname + '/views/index.html'; */

const absolutePath = __dirname + '/json';

app.get('/', (req,res) => {
    res.sendFile(absolutePath);
});































 module.exports = app;
