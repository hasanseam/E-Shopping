const express = require('express');
const cookieParser = require('cookie-parser');

const userRoutes = require('./routes/user');
const productRoutes = require('./routes/product');

const app = express();

//DB connection
require('./databaseMongo/database');


app.use(express.json());
app.use(cookieParser());

//Routers

//user router
app.use('/users',userRoutes);
//product router
app.use('/products',productRoutes);


const PORT = 3000;
app.listen(PORT,()=>{console.log(`Server run into Port: ${PORT}`)});

