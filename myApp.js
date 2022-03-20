const express = require('express'); 
require('dotenv').config();
const bodyParser = require('body-parser'); 
const app = express();

/* console.log('Hello World');

app.get('/', (req,res) => {
    res.send('Hello Express');
}); */

app.use(
(req, res, next) => {
    console.log(`${req.method} ${req.path} - ${req.ip}`);
    next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/json', (req, res) => {
    res.json({
        message: process.env.MESSAGE_STYLE==='uppercase'?'Hello json'.toUpperCase():'Hello json'
    });
});

app.get('/now', 
(req, res, next) => {
    req.time = new Date().toString();
    next();
},
(req, res) => {
    res.json({time: req.time});
});

app.get('/:word/echo', (req, res) => {
    res.json({echo:req.params.word});
});

app.get('/name', (req, res) => {
    res.json({
        name: `${req.query.first} ${req.query.last}`
    });
});

const assetsDir = __dirname + '/public';

app.use('/public',express.static(assetsDir));

const absolutePath = __dirname + '/views/index.html';

app.get('/', (req,res) => {
    res.sendFile(absolutePath);
});































 module.exports = app;
