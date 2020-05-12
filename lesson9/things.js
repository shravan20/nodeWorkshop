const express = require('express');
const router = express.Router();

router.post('/', function(request, response){

	response.send('Posting Hello World');

});


router.get('/:thingId', function(request, response){
	
	console.log(request.params);
	console.log(request.params.thingId);
	response.send('Trying to get Hello World : ' + request.params.thingId);

});

module.exports = router;
