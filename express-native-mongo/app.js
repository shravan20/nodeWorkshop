const express = require('express');
const app = express();


const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoClient = require('mongodb').MongoClient;


app.use(morgan('dev'));
app.use(bodyParser.json());

// callback way of writing code //

/*mongoClient.connect(url, function(err, client){

	if(err)
	   console.log(err);
	
	console.log('Connected Successfully!!');
	
	var db = client.db('testdb');
	db.collection('student').insert(
 		{"name":"Shravan","class":"10","section":"C","age":22}, function(err, insertedDocument){
	
		console.log(insertedDocument);	
	});

});*/

//function(err,res){}
//(err,res)=>{}

// Promise way of Handling an asynchronous operation
/*mongoClient.connect(url)
		    .then((client)=>{
	
			console.log('Yes! Connected to the Client')
	   	      	return client;
		    })
		    .then((client)=>{
			var db = client.db('testdb');
			return db.collection('student').findOne({});
		     })
		     .then((result)=>{
			console.log(result);
		     })
		     .catch((err) =>{
	 		console.log(err);
		     });
*/
// 1) async & 2) await

const url = 'mongodb://localhost:27017'; // http://somedatabaseserver:230119

// Async/Await Pattern of handling asynchrnous code

const databaseObj = require('./helpers/db');

const client = databaseObj.connectToClient(url);

client.then(async (client)=>{
const db = databaseObj.connectToDB(client,'testdb');
const result = await databaseObj.findSingleStudent(db);

console.log(result)

});



app.listen(3000,() => console.log('Server is up') );
