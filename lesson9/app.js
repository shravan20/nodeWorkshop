const express = require('express');
const app = express();

var things = require('./things');

// now i am creating a router or router handler
// '/things'
app.use('/things', things);

app.listen(8080);
