const passport  = require('passport');
const {Strategy} = require('passport-local');
const User = require('../databaseMongo/schemas/User');
const {comparePassword}= require('../utils/helpers');

passport.serializeUser((user,done)=>{
     done(null,user.id);
})

passport.deserializeUser(async (id,done)=>{
    try {
        const user = await User.findById(id);
        if(!user) throw new Error('User not found');
        done(null,user)
    } catch (error) {
        done(err,null);
        
    }
})

passport.use(
    new Strategy({
        usernameField:'email',
    },async (email,password,done)=>{
        try {
        if(!email || !password) done(new Error('Bad request'))
        const userDB = await User.findOne({email});
        if(!userDB) throw new Error('No user by this name')
        const isValid = comparePassword(password,userDB.password);

        if(isValid){
            console.log("Authenticated Succesfully");
            done(null,userDB);
           }else{
            done(null,null);
           }
            
        } catch (error) {
            done(error ,null)
        }
    })
)