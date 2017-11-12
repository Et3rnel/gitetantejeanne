var express = require('express'),
	app = express(),
	port = process.env.PORT || 3000,
	mongoose = require('mongoose'),
	Activity = require('./api/models/activitiesListModel'), //created model loading here
	bodyParser = require('body-parser');

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://db/gitetantejeanne'); 
// mongoose.connect('mongodb://db/gitetantejeanne'); 


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



var routes = require('./api/routes/activitiesListRoute'); //importing route
routes(app); //register the route


app.listen(port);


console.log('gite tante jeanne RESTful API server started on: ' + port);