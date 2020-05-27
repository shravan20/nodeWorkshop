const mongoose = require('mongoose');

const studentSchema = mongoose.Schema({

    name: { type:String, required: true },
    class: {type: Number }

});

const Student = mongoose.model("Student", studentSchema, "student");

module.exports = Student;

