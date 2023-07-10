const express=require("express")
const USER=require("../models/User")
const router=express.Router()
const {body,validationResult}=require("express-validator")
const bcrypt=require("bcrypt")


router.post("/createnewuser",[
    body("name","username must be 5 characters long").isLength({min:5}),
    body("email","Invalid Email").isEmail(),
    body("password","Password must be 5 characters Long").isLength({min:5})
],async(req,res)=>{

    const errors=validationResult(req)

    if(!errors.isEmpty()){
        return res.status(400).json({"errors":errors.array()});
    }

    
    try {

        let salt = await bcrypt.genSalt(10)
        let securePassword=await bcrypt.hash(req.body.password,salt)

        const createdUser=await USER.create({
        image:req.body.image,
        name:req.body.name,
        email:req.body.email,
        password:securePassword,
        location:req.body.location,
    })

    createdUser.save()
    return res.status(200).json({"createdNewUser":true})


    } catch (errors) {
        alert("Error creating a new User!")
        return res.status(400).json({"errors":errors})
    }
    
})

module.exports=router