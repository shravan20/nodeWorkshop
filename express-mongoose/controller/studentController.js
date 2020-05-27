const studentModel = require('../models/studentModels');

const add = async(req, res, next) => {

    let r = await studentModel.create(req.body);
    console.log(r);  
    res.send(r);
}

const removeStudent = (req, res, next) => {
    res.send('remove()');
}

const findStudent= async (req,res, next) => {
    res.send('find');
}

module.exports = {
    add, removeStudent, findStudent
};