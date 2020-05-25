



// Async/Await Pattern of handling asynchrnous code


const url = 'mongodb://localhost:27017'; // http://somedatabaseserver:230119
const databaseObj = require('../helpers/db');



const addStudent = async (req, res, next) => {

    try{
        const client = await databaseObj.connectToClient(url);
        const db = await databaseObj.connectToDB(client,'testdb');
        const result = await databaseObj.createStudent( db, req.body);
    
        const sendData = {
            addedData : result
        };
        res.send(sendData);
    }
    catch(err){
        console.log(err);
    }

}


const remStudent = async (req, res, next) => {

    try{
        const client = await databaseObj.connectToClient(url);
        const db = await databaseObj.connectToDB(client,'testdb');
        const result = await databaseObj.removeStudent( db, req.body);
        
        const sendData = {
            deletedData : result
        };

        res.send(sendData);
    }
    catch(err){
        console.log(err);
    }

};


const findStudent = (req, res, next) =>{
    res.send('Found Student');
};

module.exports = {
    addStudent, remStudent, findStudent
};