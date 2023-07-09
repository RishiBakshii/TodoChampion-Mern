const express=require("express")
const USER=require("../models/User")
const User = require("../models/User")

const router=express.Router()


router.put('/toggleComplete/:userid/:todoid',async(req,res)=>{

    const {userid,todoid}=req.params

    const user=await USER.findById(userid)

    const todo=await user.todos.id(todoid)

    todo.completed=!todo.completed
    user.save()

    res.json(todo)

})


module.exports=router