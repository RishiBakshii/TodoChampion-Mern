const mongoose=require("mongoose")

const {Schema}=mongoose

const todoSchema=new Schema({

    text:{
        type:String,
        required:true,
    },

    completed:{
        type:Boolean,
        default:false
    },

    date:{
        type:Date,
        default:Date.now()
    }


})

module.exports=mongoose.model("todo",todoSchema)