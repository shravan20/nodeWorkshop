const studentModel = require('../models/studentModels');

const add = async(req, res, next) => {
    try{
    let newAddedStudent = await studentModel.create(req.body);   
    res.status(201).send(newAddedStudent);
    }
    catch(err){
        res.status(400).send(err);
    }
}

const removeStudent = async (req, res, next) => {

    try {
        let deletedData = await studentModel.deleteOne({_id : req.body.id});
        res.status(200).send(deletedData);

    } catch (err) {
        res.status(400).send(err);
    }

}

const findStudent= async (req,res, next) => {    
    res.status(200).send(await studentModel.findOne({_id : req.body._id}));
}

module.exports = {
    add, removeStudent, findStudent
};