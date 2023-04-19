//* dotenv
require('dotenv').config();

const express = require('express');
const multer = require('multer');
const { dbConnect } = require('./utils/dbConnect');
const inventoryRoutes = require('./routes/inventoryRoutes');

//* multer memory storage object
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });


//* express app
const app = express();

//* middleware

//* json
app.use(express.json());

//* multer
app.use(upload.array('images'));

app.use((req, res, next) => {
    console.log(`${req.method} ${req.path}`);
    next();
});

app.use('/', inventoryRoutes);

app.listen(process.env.PORT, process.env.HOST_NAME, () => {
    //Connect to db
    dbConnect();
    console.log(`Inventory service is running on ${process.env.HOST_NAME}:${process.env.PORT}`);
});
