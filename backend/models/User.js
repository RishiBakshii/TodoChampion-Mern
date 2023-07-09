const mongoose=require("mongoose")
const Todo = require("./Todo")
const {Schema}=mongoose


const userSchema=new Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    location:{
        type:String,
        required:true,
    },
    date:{
        type:Date,
        default:Date.now()
    },
    todos:[Todo.schema]

})


module.exports=mongoose.model("User",userSchema)