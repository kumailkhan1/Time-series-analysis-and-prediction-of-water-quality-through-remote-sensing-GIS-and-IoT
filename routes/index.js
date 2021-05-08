const express = require('express');
const path = require('path');


exports.dashboardRouter = function (req, res) {

    // res.render((path.join(__dirname + '/dashboard/index.html'), { title: 'Express' }));
    res.render(path.join(path.join(__dirname, '../dashboard', 'index')));

};

