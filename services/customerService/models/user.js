// Import the mongoose module
const mongoose = require('mongoose');

const bcrypt = require('bcrypt');
const validator = require('validator');

// Define the schema for the user
const userSchema = mongoose.Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    phoneno: {
        type: String,
        required:true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
});

//static signup method
userSchema.statics.signup = async function(firstname,lastname,phoneno,email,password){

    
    //validation
    if(!email || !password || !firstname || !lastname || !phoneno){
        throw Error('All fields must be filled')
    }
    if(!validator.isMobilePhone(phoneno)){
        throw Error('Mobile is not valid')
    }
    if(!validator.isEmail(email)){
        throw Error('Email is not valid')
    }
    if(!validator.isStrongPassword(password)){
        throw Error('Passowrd is not strong enough')
    }
    
    const exists = await this.findOne({email})

    if(exists){
        throw Error('Email already in use')
    }

    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)

    const user = await this.create({firstname,lastname,phoneno,email,password: hash})

    return user

}




//static login method
userSchema.statics.login = async function(email,password){

    
    //validation
    if(!email || !password){
        throw Error('All fields must be filled login')
    }
    
    const user = await this.findOne({email})

    if(!user){
        throw Error('Incorrect email')
    }

    const match = await bcrypt.compare(password, user.password)
    
    if(!match){
        throw Error('Incorrect user password')
    }

    return user

}



// Define the model
const User = mongoose.model("User", userSchema);

// Export the model
module.exports = User;