const express = require('express');
const userRoutes = require('./routes/user');
const productRoutes = require('./routes/product');

const app = express();

app.use(express.json());

//Routers

//user router
app.use('/users',userRoutes);
//product router
app.use('/products',productRoutes);


const PORT = 3000;
app.listen(PORT,()=>{console.log(`Server run into Port: ${PORT}`)});

