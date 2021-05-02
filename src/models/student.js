const mongoose = require("mongoose");

const validator = require("validator");

const studentSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
        minlength: 2

    },
    
        email : {
            type : String,
            required: true,
            unique: [true, "Email already exist"],
            validate(value){
                if(!validator.isEmail(value)){
                    throw new Error ("Invalid Email")
                }
            
            }
    },
    phone: {
        type: Number,
        min : 10,
        max : 10,
        required:true,
        unique: [true, "mobile no. exist"]
    },
    address: {
        type:String,
        required:true
    }
})

// new model

const Student = new mongoose.model("Student", studentSchema);


module.exports = Student;