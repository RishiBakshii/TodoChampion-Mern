const express=require("express")
const USER=require("../models/User")
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")
require("dotenv").config()

const router=express.Router()


router.post("/authenticateuser",async(req,res)=>{

    const user=await USER.findOne({email:req.body.email})

    if(!user){
        return res.status(400).json({"message":"Email does not exist ☹️"})
    }

    const isPasswordValid=await bcrypt.compare(req.body.password,user.password)

    if(!isPasswordValid){
        return res.status(400).json({"message":"Do you forget eating🍔 ..then why password..🤔"})
    }

    const data={
        user:{
            id:user.id
        }
    }

    const authToken=jwt.sign(data,process.env.JWTSECRET)

    return res.status(200).json({"authToken":authToken})

})

module.exports=router