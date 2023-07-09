const express=require("express")
const TODO=require("../models/Todo")
const USER=require("../models/User")

const router=express.Router()


router.post('/deleteTodo/:userId/:todoId',async(req,res)=>{

    // const deletedTodo=await TODO.findByIdAndDelete(req.params.todoId)

    const {userId,todoId}=req.params
 
    const user=await USER.findById(userId)

    const deletedTodo=await user.todos.id(todoId)

    await user.todos.pull({'_id':todoId})

    user.save()

    res.json(deletedTodo)
    
})

module.exports=router