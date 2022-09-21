const { Schema } = require('mongoose');

const detailSchema= new Schema({
    profilePic:{
        type:String,
    },
    scores:[{
        type: Number,
    }]
})

module.exports=detailSchema;