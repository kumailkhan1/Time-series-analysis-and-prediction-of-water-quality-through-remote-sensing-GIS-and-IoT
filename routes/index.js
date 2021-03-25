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
    let data = req.body;
    try {
        let tensor = tf.tensor3d(data,[1,1,24])
        let model = await tf.loadLayersModel('http://localhost:3000/assets/ml-models/converted-lstm/py_model.json');
        let prediction = model.predict(tensor);
        const value = prediction.dataSync()[0]
        res.send(JSON.stringify(value))
    }
    catch (err) {
        next(err);
    }

}