// Import the User model
const User = require('../models/user');

const jwt = require('jsonwebtoken')


const createToken = (_id) =>{
    return jwt.sign({_id}, process.env.SECRET, {expiresIn:'3d'})
}



// Method to get user service
const getUserService = async (req, res) => {
    res.status(200).send("User Service");
}



//login user
const loginUser = async(req,res) =>{
    
    const {email,password} = req.body

    try {
        const user = await User.login(email,password)

        //create a token
        const token = createToken(user._id)

        res.status(200).json({email,token})
    } catch (error) {
        res.status(400).json({error: error.message})
    }
    
   
}



//signup user
const signupUser = async(req,res) => {
    const {firstname,lastname,email,password} = req.body
    
    try {
       const user = await User.signup(firstname,lastname,email,password) 

       //create a token
       const token = createToken(user._id)

       res.status(200).json({email, token})
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

























// Export all the methods
module.exports = {
    loginUser,
    signupUser,
    getUserService,
    
    
}