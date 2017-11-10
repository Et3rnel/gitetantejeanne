'use strict';
module.exports = function(app) {
    var activitiesList = require('../controllers/activitiesListController');

    // activitiesList Routes
    app.route('/activities')
        .get(activitiesList.list_all_activities);
};