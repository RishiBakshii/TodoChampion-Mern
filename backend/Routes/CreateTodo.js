const express=require("express")
const TODO=require("../models/Todo")
const USER=require("../models/User")

const router=express.Router()


router.post("/addTodo",async(req,res)=>{

      const createdTodo = await TODO.create({
        text: req.body.text
      });
    
      const UserOBj = await USER.findById(req.body.id);
    
      UserOBj.todos.push(createdTodo);
      await UserOBj.save();
  
      return res.json(createdTodo);
    });

    
module.exports=router