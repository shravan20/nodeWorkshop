



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


const findStudent = async (req, res, next) =>{
    
    const client = await databaseObj.connectToClient(url);
    const db = await databaseObj.connectToDB(client,'testdb')

    // validation(req.params)

    const result = await databaseObj.findStudent(db,req.params);
    console.log(result);
    const sendData = result;
    res.send(sendData);

};

module.exports = {
    addStudent, remStudent, findStudent
};