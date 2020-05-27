const express = require('express');
const router = express.Router();
const controller = require('../controller/studentController');

//to add a student
router.post('/add', controller.add);


//to delete a student
router.delete('/remove', controller.removeStudent);


// find student by Id
router.get('/studentBio/:_id', controller.findStudent);
            
module.exports = router;