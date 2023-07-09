const express=require("express")
const cors=require("cors")
const connectToMongoDB=require("./mongoDB")
const app=express()
require("dotenv").config()
const port=process.env.PORT
const TODO=require("./models/Todo")
global.jwtSecret="Mynameisrishibakshiandiamadatascientist$#"
const path=require("path")

app.use(express.json())
app.use(cors())

app.get("/",async(req,res)=>{
    connectToMongoDB()
    res.json(await TODO.find({}))
})

// routes
app.use("/api",require("./Routes/CreateTodo"))
app.use("/api",require("./Routes/DeleteTodo"))
app.use("/api",require("./Routes/ToggleComplete"))
app.use("/api",require("./Routes/LoginUser"))
app.use("/api",require("./Routes/SignupUser"))
app.use("/api",require("./Routes/GetUserDetails"))


// static files - configuration steps
app.use(express.static(path.join(__dirname,'../frontend/build')))

app.get("*",(req,res)=>{
    res.sendFile(path.join(__dirname,'../frontend/build/index.html'))
})

app.listen(port,()=>{
    console.log(`SERVER STARTED on https://localhost:${port}`)
})

