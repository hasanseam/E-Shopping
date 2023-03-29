const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    firstname:{
        type: mongoose.SchemaTypes.String,
        required:true
    },
    lastname:{
        type: mongoose.SchemaTypes.String,
        required: true
    },
    email:{
        type: mongoose.SchemaTypes.String,
        required: true
    },
    password:{
        type:mongoose.SchemaTypes.String,
        required:true
    },
    createdAt: {
        type: mongoose.SchemaTypes.String,
        required: true,
        default: new Date()
    },
    address:{
        streetName:{type:mongoose.SchemaTypes.String},
        houseNo:{type:mongoose.SchemaTypes.Number},
        postcode:{type:mongoose.SchemaTypes.Number},
        city:{type:mongoose.SchemaTypes.String},
        country:{type:mongoose.SchemaTypes.String}
    }
});

module.exports = mongoose.model('user',UserSchema);