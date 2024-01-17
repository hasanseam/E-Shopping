const { Router } = require("express");
const User = require('../databaseMongo/schemas/User');
const passport = require('passport');
const router = Router();

const {hashPassword} = require('../utils/helpers')

// auth/login
router.post('/login',passport.authenticate('local'),(req,res)=>{
    console.log('Logged In');
    res.sendStatus(200)
})

// auth/logout
router.post('/logout', (req,res)=>{
  req.logOut((err)=>{
    if(err){ console.log(err) }
  })
  res.send('Logged out')
})

// auth/register
router.post('/register',async (req,res)=>{
  const {firstname,lastname,email} = req.body;
  const userDB = await User.findOne({email});
  if(userDB){
    res.status(400).send({msg:'User already exist!'});
  }else{
    const password = hashPassword(req.body.password);
    console.log(password);
    const newUser = await User.create({firstname,lastname,password,email}); 
    res.sendStatus(201);
    //newUser.save(); not needed
  }
})

module.exports = router;
