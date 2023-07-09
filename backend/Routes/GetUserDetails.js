const express=require("express")
const jwt=require("jsonwebtoken")
const USER=require("../models/User")
require("dotenv").config()
const router=express.Router()


router.post("/getDetails",async(req,res)=>{

    const decodedUser=jwt.verify(req.body.authToken,process.env.JWTSECRET)

    loggedInUser=await USER.findById(decodedUser.user.id)

    res.json(loggedInUser)
})


module.exports=router