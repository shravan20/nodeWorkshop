const express = require('express');
const app = express();


const bodyParser = require('body-parser');
const morgan = require('morgan');
//const mongoClient = require('mongodb').MongoClient;

app.use(morgan('dev'));
app.use(bodyParser.json());

const studentRoute = require('./routes/studentRoute');

app.use('/student', studentRoute);


app.listen(3000,() => console.log('Server is up') );

















