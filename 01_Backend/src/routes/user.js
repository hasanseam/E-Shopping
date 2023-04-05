const {Router} = require('express');
const router = Router();
const User = require('../databaseMongo/schemas/User')

//users {GET}
router.get('/',async (req,res)=>{
    const users = await User.find();
    res.json({data:users});
})

// users/:id {GET}
router.get('/:id', async (req,res)=>{
    const {id} = req.params;
    try {
        const user = await User.findById(id);
        res.json({data:user}); 
    } catch (error) {
        res.status(400).json({"data":"Error","message":error.message});
    }
})

// users/register
//TO DO: validation
router.post('/register', async (req,res)=>{
    const {firstname,lastname,email,password} = req.body;
    const userDB = await User.findOne({email});
    if(userDB){
        res.status(400).send("User already exist!");
    } else {
        const newUser = await User.create({firstname,lastname,email,password});
        res.sendStatus(201)
    }
})

module.exports = router;