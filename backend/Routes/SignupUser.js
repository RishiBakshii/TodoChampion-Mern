const express=require("express")
const USER=require("../models/User")
const router=express.Router()
const {body,validationResult}=require("express-validator")
const bcrypt=require("bcrypt")


router.post("/createnewuser",[
    body("name").isLength({min:5}),
    body("email").isEmail(),
    body("password").isLength({min:5})
],async(req,res)=>{

    const errors=validationResult(req)

    if(!errors.isEmpty()){
        return res.json({errors:errors.array()});
    }

    
    try {

        let salt = await bcrypt.genSalt(10)
        let securePassword=await bcrypt.hash(req.body.password,salt)

        const createdUser=await USER.create({
        name:req.body.name,
        email:req.body.email,
        password:securePassword,
        location:req.body.location,
    })

    createdUser.save()
    res.json({"createdNewUser":true})


    } catch (error) {
        res.json({"createdNewUser":false})
        console.log("Error creating a new user! \n Error at $$ SignupUser.js route")
    }
    
    



})

module.exports=router