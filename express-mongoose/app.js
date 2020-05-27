const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const student = require('./router/studentRoute');

const url = 'mongodb://localhost:27017/testdb'
const connectivity = require('./dbConfig/dbConnect');

connectivity.connectToDB(url);

app.use(bodyParser.json());
app.use(morgan('dev'));

app.use('/student',student)



app.listen(3000, ()=>console.log(`Server is up`));