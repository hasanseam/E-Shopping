const {Router} = require('express');
const router = Router();
const passport = require('passport');
const User = require('../databaseMongo/schemas/User');

const {hashPassword,comparePassword} = require('../utils/helpers'); 

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


module.exports = router;