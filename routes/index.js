const express = require('express');
const path = require('path');
const router = express.Router();
const tf = require('@tensorflow/tfjs');
const { json } = require('express');

exports.dashboardRouter = function (req, res) {

    // res.render((path.join(__dirname + '/dashboard/index.html'), { title: 'Express' }));
    res.render(path.join(path.join(__dirname, '../dashboard', 'index')));

};


exports.predict = async function (req, res, next) {


}