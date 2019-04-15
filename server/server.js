var express = require('express'),
	app = express(),
	port = process.env.PORT || 3000,
	mongoose = require('mongoose'),
	Activity = require('./api/models/activitiesListModel'), //created model loading here
	bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
const options = {
	useMongoClient: true
}

// Try to connect to MongoDB, retry once if failure after 8s
let db = mongoose.connect('mongodb://db/gitetantejeanne', options);

db.catch(function(error) {
	setTimeout(function() {
		db = mongoose.connect('mongodb://db/gitetantejeanne', options);
		db
		.then(function(data) {
			console.log("Connected to MongoDB after 1 retry");
		})
		.catch(function(data) {
			console.error("Couldn't connect to MongoDB after 1 retry");
		});
	}, 8000);
}); 

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes/activitiesListRoute'); //importing route
routes(app); //register the route

app.listen(port);

console.log('gite tante jeanne RESTful API server started on: ' + port);