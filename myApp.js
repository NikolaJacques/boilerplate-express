var express = require('express');
var app = express();

/* console.log('Hello World');

app.get('/', (req,res) => {
    res.send('Hello Express');
}); */

const staticPath = __dirname + '/public';

app.use(express.static(path.join(__dirname, '/public')));

const absolutePath = __dirname + '/views/index.html';

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname,'/views/index.html'));
});































 module.exports = app;
