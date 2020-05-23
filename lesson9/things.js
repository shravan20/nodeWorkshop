const express = require('express');
const router = express.Router();



// /things/
// /things/11-11-11
  
router.post('/', function(request, response, next){

	response.send('Posting Hello World');

});

	    // 'xxx-yyy-zzz' // 111-333-444
router.get('/:thingId', 
function(request, response, next){
	let dividedData = request.params.thingId.split('-');
	request.dividedData = dividedData;
	console.log(request.dividedData);
	next();
},
function(request, response, next){

	console.log(request.params); // { thingId : '11-22-33'}
	console.log(request.params.thingId);//'11-22-33'	
	response.send(request.dividedData); //['11','22','33']

}
);

module.exports = router;
