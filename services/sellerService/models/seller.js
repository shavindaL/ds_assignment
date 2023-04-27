const axios = require("axios");

// Import the mongoose module
const mongoose = require("mongoose");

const bcrypt = require("bcrypt");
const validator = require("validator");
const { error } = require("console");

// Define the schema for the seller
const sellerSchema = mongoose.Schema({
  sellerID: {
    type: Number,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  shopName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  photo: {
    type: String,
    default:
      "https://media.istockphoto.com/id/1016744004/vector/profile-placeholder-image-gray-silhouette-no-photo.jpg?s=612x612&w=0&k=20&c=mB6A9idhtEtsFXphs1WVwW_iPBt37S2kJp6VpPhFeoA=",
  },
});

//static login method
sellerSchema.statics.login = async function (email, password) {
  //validation
  if (!email || !password) {
    throw Error("All fields must be filled login seller");
  } else {
    let testseller
    // axios
    //   .get("http://localhost:5000/v1/seller/sellers")
    //   .then((res) => {
    //     let data = res.data;
    //     if (data) {
    //       //   console.log(data);
    //       isfound = false;
    //       for (let seller of data) {
    //         if (seller.email === email && seller.password === password) {
    //           isfound = true;

    //           console.log(typeof seller);
              
    //           testseller = seller;
    //         }
    //       }
    //       if (isfound === false) {
    //         throw Error("Invalid Email or password");
    //       }
    //     } else {
    //       throw Error("No sellers in the database");
    //     }
    //   })
    //   .catch((err) => console.log(err.message));



    try{
        const res = await axios.get("http://10.5.0.3:5000/v1/seller/sellers");
       
        let allSellers = await res.data;
       
        let isFound = false;
       
      if(allSellers){
         for(let seller of allSellers){
           if(seller.email === email && seller.password === password){ 
              isFound = true;
              testseller = seller;
           }
         }
       
       
      } else{
          throw Error("No sellers in database");
      }
        
       
      } catch(err){
        console.log(err.message);
      }

      return await testseller
  }

  //   const seller = await this.findOne({ email });

  //   console.log({ seller });

  // if(!seller){
  //     throw Error('incorrect seller email')
  // }

  // const match = await bcrypt.compare(password, seller.password)

  // if(!match){
  //     throw Error('Incorrect password')
  // }
};

// Define the model
const Seller = mongoose.model("Seller", sellerSchema);

// Export the model
module.exports = Seller;
