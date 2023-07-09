const express=require("express")
const USER=require("../models/User")

const router=express.Router()


router.get("/getalluserdata",async(req,res)=>{

    try {


        const allData=await USER.find({})

        return res.status(200).json(allData)

    } catch (error) {
        return res.status(400).json({"message":"Sorry all the user data is not availabe at the moment☹️"})
    }



})

module.exports=router