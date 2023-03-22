const express = require('express');
const userRoutes = require('./routes/user');

const app = express();

app.use(express.json());

//Routers

//user router
app.use('/users',userRoutes);

app.get('',(req,res)=>{
    res.send("Hello World");
})


const PORT = 3000;
app.listen(PORT,()=>{console.log(`Server run into Port: ${PORT}`)});

