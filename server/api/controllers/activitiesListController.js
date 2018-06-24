'use strict';

var mongoose = require('mongoose'),
Activity = mongoose.model('Activities');

exports.list_all_activities = function(req, res) {

    var datas;

    // We retrieve the activity type to show either activities or delicacies
    const typeActivity = req.params.type;
    res.header("Access-Control-Allow-Origin", "*");

    if (typeActivity === 'delicacies') {
        Activity.find({type: true}, function(err, Activity) {
            if (err) {
                res.send(err);
            }
            datas = Activity;
            res.json(datas);
        });
    } else if (typeActivity === 'activities') {
        Activity.find({type: false}, function(err, Activity) {
            if (err) {
                res.send(err);
            }
            datas = Activity;
            res.json(datas);
        });
    } else {
        res.send("The routing parameter is incorrect");
    }
};