var express = require('express');
var app = express();

/* console.log('Hello World');

app.get('/', (req,res) => {
    res.send('Hello Express');
}); */

const staticPath = __dirname + '/public';

app.use(staticPath, express.static(staticPath));

const absolutePath = __dirname + '/views/index.html';

app.get('/', (req,res) => {
    res.sendFile(absolutePath);
});































 module.exports = app;
