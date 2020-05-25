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
const ObjectID = require('mongodb').ObjectID;

const connectToClient = async (url) =>{
		
		return await mongoClient.connect(url);
}

const connectToDB = (client, dbName) => {

	return client.db(dbName);

}


const findStudent= async (db, params) => {

		let studentData = await db.collection('student').findOne({'_id':ObjectID(params.id)});
		return studentData;
	
}

const createStudent = async (db, data) => {

	let studentData = await db.collection('student').save(data);
	return studentData;

};

const removeStudent = async (db, data) => {
    															//_id = = data.id	
	let studentData = await db.collection('student').deleteOne({ _id : ObjectID(data.id) });
	return studentData;
};

module.exports = {
connectToClient, connectToDB,findStudent,createStudent,
removeStudent
}




