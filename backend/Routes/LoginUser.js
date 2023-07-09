const express=require("express")
const USER=require("../models/User")
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")

const router=express.Router()


router.post("/authenticateuser",async(req,res)=>{

    const user=await USER.findOne({email:req.body.email})

    if(!user){
        return res.json({"message":"Email does not exist"})
    }

    const isPasswordValid=await bcrypt.compare(req.body.password,user.password)

    if(!isPasswordValid){
        return res.json({"message":"Invalid Password"})
    }

    const data={
        user:{
            id:user.id
        }
    }

    const authToken=jwt.sign(data,jwtSecret)

    return res.json({"message":"Success","authToken":authToken})


})

module.exports=router