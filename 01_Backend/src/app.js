const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const bodyParser = require('body-parser')
const session = require('express-session');
const passport = require('passport'); // for authentication
require('./strategies/local');

// router
const userRoutes = require('./routes/user');
const productRoutes = require('./routes/product');
const authRoutes = require('./routes/auth');

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cookieParser());

app.use((req,res,next)=>{
    res.header('Access-Control-Allow-Origin',"*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization" 
    );
    if(req.method === "OPTIONS"){
        res.header('Access-Control-Allow-Methods','PUT,POST,PATCH,DELETE');
        return res.status(200).json({});
    }
    next();
});
//session middleware
app.use(session({
    secret:"asjdkadklasjdkdsljfsdrsmvn",
    resave:false,
    saveUninitialized:false,
}));
//
app.use(passport.initialize());
app.use(passport.session());

const isAuthenticated = (req, res, next) => {
    if (req.isAuthenticated()) {
      return next(); // If authenticated, continue to the next middleware
    }
    res.status(401).json({ message: 'Unauthorized' });
  };

//Routers
//user router
app.use('/users',userRoutes);
//product router
app.use('/products', isAuthenticated, productRoutes);
//auth router
app.use('/auth',authRoutes);

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

module.exports = app