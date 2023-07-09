const mongoose=require("mongoose")
require("dotenv").config()
const MONGO_URI=process.env.MONGO_URI

const connectToMongoDB=async()=>{

    try {
        await mongoose.connect(MONGO_URI,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    })

    const todosCollection=await mongoose.connection.db.collection("todos")

    const todosData=await todosCollection.find({}).toArray()

    console.log("Connected with mongodb")
    
    } catch (error) {

        console.log("Error connecting with the database")

    }
    

}

connectToMongoDB()

module.exports=connectToMongoDB