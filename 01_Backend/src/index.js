const express = require('express');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');

const userRoutes = require('./routes/user');
const productRoutes = require('./routes/product');

const app = express();

//DB connection
require('./databaseMongo/database');

app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());

//Routers

//user router
app.use('/users',userRoutes);
//product router
app.use('/products',productRoutes);

//Error Handler
app.use((req,res,next)=>{
    const error = new Error('Not Found');
    error.status = 404
    next(error);
});

app.use((error,req,res,next)=>{
    res.status(error.status||500);
    res.json({
        error:{
            message:error.message
        }
    });
});


const PORT = 3000;
app.listen(PORT,()=>{console.log(`Server run into Port: ${PORT}`)});

