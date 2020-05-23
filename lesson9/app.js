const express = require('express');
const app = express();
const morgan = require('morgan');

var things = require('./things');

// now i am creating a router or router handler
// '/things'

app.use(morgan('dev'));

app.use(function(request, response, next){
	console.log('Hey Middleware!!');
	next();
});



app.use('/things', things);

app.listen(8080);

//localhost:8080/things/
