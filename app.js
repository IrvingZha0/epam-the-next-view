// // Invoke 'strict' JavaScript mode
'use strict';

// // Set the 'NODE_ENV' variable
// process.env.NODE_ENV = process.env.NODE_ENV || 'development';

// // Load the module dependencies
var mongoose = require('./config/mongoose'),
    express = require('./config/express'),
    passport = require('./config/passport');

// // Create a new Mongoose connection instance
var db = mongoose();

// // Create a new Express application instance
var app = express(db);

// // Configure the Passport middleware
var passport = passport();

// // Use the Express application instance to listen to the '3000' port
app.listen(1111);

// // Log the server status to the console
console.log('The Next View is looking good! Open http://localhost:1111 to begin.');

// // Use the module.exports property to expose our Express application instance for external usage
module.exports = app;