// const fs = require('fs');

// fs.appendFile('simple.txt', 'First File Content', function(err){

//     if(err)
//         console.log(err);
    
//     console.log('Appended successfully');

// });

// fs.readFile('simple.txt', function(err, text){

//     if(err)
//         console.log(err);
    
//     console.log('Text:', text.toString());

// });


const url = require('url');

const address = 'https://localhost:8080/data?id=1';

const parsedAddress = url.parse(address);

console.log(parsedAddress);
