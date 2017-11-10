'use strict';

var mongoose = require('mongoose'),
    Task = mongoose.model('Activities');

exports.list_all_activities = function(req, res) {
    Task.find({}, function(err, task) {
        if (err) {
            res.send(err);
        }
        res.header("Access-Control-Allow-Origin", "*");
        res.json(task);
    });
};