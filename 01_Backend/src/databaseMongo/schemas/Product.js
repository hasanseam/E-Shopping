const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name:{
        type: mongoose.SchemaTypes.String,
        required:true
    },
    image:{
        type:mongoose.SchemaTypes.String,
    },
    model:{
        type:mongoose.SchemaTypes.String
    },
    quantity:{
        type:mongoose.SchemaTypes.Number,
        required: true
    },
    description:{
        type:mongoose.SchemaTypes.String,
    },
    category:{
        type:mongoose.SchemaTypes.String
    }

});

module.exports = mongoose.model('product',ProductSchema);