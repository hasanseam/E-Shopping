const {Router} = require('express');
const router = Router();

const users = [
    {
        id:1,
        name:"Tamim Iqbal",
        email:"t@mail.com"
    }
];

//user {GET}
router.get('',(req,res)=>{
    res.send(users);
})

// user/:id {GET}
router.get('/:id',(req,res)=>{
    const {id} = req.params;
    const user = users.find((user)=>user.id === parseInt(id));
    res.send(user);
})

// user {POST}
router.post('',(req,res)=>{
    const newUser = req.body;
    newUser.id = users.length + 1;
    users.push(newUser);
    res.sendStatus(200);
})

module.exports = router;