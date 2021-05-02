const http = require('http');
const express = require('express');
const path = require('path');
var bodyParser = require('body-parser')
const app = express();
const serverless = require('serverless-http');
const index = require('./routes/index.js');

app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, 'public')));
// app.use('/dashboard', express.static('dashboard'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
})

app.get('/dashboard/index.html',index.dashboardRouter)

app.post('/dashboard/predict',index.predict)

module.exports.handler = serverless(app);