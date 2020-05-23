const express = require('express');

const app = express();


const bodyParser = require('body-parser');

const morgan = require('morgan');

const mongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017';



mongoClient.connect(url, function(err, client) {

	if(err)
	  console.log(err);
				
	console.log('Connected to the database');

	var db = client.db('db');

	db.collection('user').findOne({}, function(err, docs){
		
		console.log(docs);	

	});
	

});




app.listen(3000,()=> console.log('Server has started!!!') );


