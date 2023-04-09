const mongoose = require('mongoose');

const dbConnect = ()=>{
    mongoose
    .connect(process.env.MONGO_URI, {dbName:"inventoryDB"}) 
    .then(() => {
        console.log(`Connected to the database`);
    })
    .catch(error => {
        console.log(error);
    });
}

module.exports = {dbConnect};