// Import the User model
const User = require('../models/user');

const bcrypt = require('bcrypt');

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

        console.log(user._id)
        console.log(typeof(user._id))


        res.status(200).json({email,token,_id:user._id, type:"customer"})

    } catch (error) {
        res.status(400).json({error: error.message})
    }
    
   
}



//signup user
const signupUser = async(req,res) => {
    const {firstname,lastname,phoneno,email,password} = req.body
    
    try {
       const user = await User.signup(firstname,lastname,phoneno,email,password) 

       //create a token
       const token = createToken(user._id)

       res.status(200).json({email, token})
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}


// Method to get details of a particular user
const getUser = async (req, res) => {
    try {
     
      const user = await User.findOne({ _id: req.params.id });
  
      if (user) {
  
        res.status(200).json(user);
  
      } else {
        
        res.status(400).send("Failed to find user");
        
      }
    } catch (err) {
      
      console.log(err.message);
    }
  };



// Method to get all existing users
const getAllUsers = async (req, res) => {
    try {
      // Get all existing documents from users collection
      const users = await User.find();
  
      if (users) {
  
        // Respond with status code 200 (OK) if successful
        res.status(200).json(users);
  
      } else {
        // Respond with status code 400 (Bad Request) if unsuccessful
        res.status(400).send("Failed to get users");
  
      }
    } catch (err) {
      // Print error message
      console.log(err.message);
    }
  };




















// Export all the methods
module.exports = {
    loginUser,
    signupUser,
    getUserService,
    getUser,
    getAllUsers,
    
    
}