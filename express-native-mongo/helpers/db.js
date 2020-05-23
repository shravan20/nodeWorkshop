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
const mongoClient = require('mongodb').MongoClient;

const connectToClient = async (url) =>{
		
		return await mongoClient.connect(url);
}

const connectToDB = (client, dbName) => {

	return client.db(dbName);

}


const findSingleStudent= async (db) => {

		let x = await db.collection('student').findOne();
		return x;
	
}


module.exports = {
connectToClient,connectToDB,findSingleStudent
}




