const express = require('express');
const server = express();

//DB connection
require('./databaseMongo/database');

//app


const app = require('./app');

const PORT = 3000;
app.listen(PORT,()=>{console.log(`Server run into Port: ${PORT}`)});

