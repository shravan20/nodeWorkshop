const express = require('express');
const router = express.Router();
const controller = require('../controllers/studentController');

//to add a student
router.post('/add', controller.addStudent);

// to delete/remove a student based on his Id 
router.delete('/remove', controller.remStudent);


// to get single student data using his Id
router.get('/studentBio', controller.findStudent);

module.exports = router