const express = require('express');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const userRoutes = require('./routes/user');
const productRoutes = require('./routes/product');

const app = express();

//DB connection
const url = 'mongodb://localhost:27017/ejtutorial';
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    family: 4 // Use IPv4, skip trying IPv6
}
mongoose.Promise = global.Promise;
mongoose.connect(url, options)
.then(() => {console.log("Connected to MongoDB")})
.catch((err) => console.log(err));

app.use(express.json());
app.use(cookieParser());

//Routers

//user router
app.use('/users',userRoutes);
//product router
app.use('/products',productRoutes);


const PORT = 3000;
app.listen(PORT,()=>{console.log(`Server run into Port: ${PORT}`)});

