const http = require('http');
const express = require('express');
const path = require('path');
var bodyParser = require('body-parser')
const app = express();
const index = require('./routes/index.js');

app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
})

app.get('/dashboard/index.html',index.dashboardRouter)



module.exports = app
app.listen(3000);