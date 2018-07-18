const mongoose = require('mongoose');

const schema  = new mongoose.Schema({
    _id  :{type:mongoose.Schema.ObjectId,select: false },
    dishes_id:{type: mongoose.Schema.ObjectId, auto: true},
    dishes_name : {type:String},
    created_date :{
		type:Date,
		default: Date.now
    },
    is_active :{
        type: Boolean,
        default: true
    }
},{ versionKey: false })


module.exports  = schema