'use strict';
module.exports = function(app) {
    var activitiesList = require('../controllers/activitiesListController');

    // activitiesList Routes
    app.route('/activities/:type')
        .get(activitiesList.list_all_activities);
};