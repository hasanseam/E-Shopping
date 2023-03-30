const {Router} = require('express');
const router = Router();
const User = require('../databaseMongo/schemas/User')

// TO DO Database will be added
const users = [
    {
        id:1,
        name:"Tamim Iqbal",
        email:"t@mail.com"
    }
];

//users {GET}
router.get('',(req,res)=>{
    res.send(users);
})

// users/:id {GET}
router.get('/:id',(req,res)=>{
    const {id} = req.params;
    const user = users.find((user)=>user.id === parseInt(id));
    res.send(user);
})

// users {POST}
router.post('',(req,res)=>{
    const newUser = req.body;
    newUser.id = users.length + 1;
    users.push(newUser);
    res.sendStatus(200);
})

// users/register
//TO DO: validation
router.post('/register', async (req,res)=>{
    const {firstname,lastname,email,password} = req.body;
    const userDB = await User.findOne({email});
    if(userDB){
        console.log(userDB);
        res.status(400).send("User already exist!");
    } else {
        const newUser = await User.create({firstname,lastname,email,password});
        res.sendStatus(201)
    }
})

module.exports = router;