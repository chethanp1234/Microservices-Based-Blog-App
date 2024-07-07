const express =require('express')
const app=express()
const mangoose=require('mongoose')
const dotenv=require('dotenv')
const cookieParser=require('cookie-parser')
const authRoute=require('./routes/auth')
const userRoute=require('./routes/users')
const commentRoute=require('./routes/comments')
const postRoute=require('./routes/posts')




// Data base connction
const connectDB=async()=>{
    try{
        await mangoose.connect(process.env.MONGO_URL)
        console.log("Connected")
    }
    catch(err){
        console.log(err)
    }
}
//Middleware
dotenv.config()
app.use(express.json())
app.use(cookieParser())
app.use("/api/auth",authRoute)
app.use("/api/users",userRoute)
app.use("/api/posts",postRoute)
app.use("/api/comments",commentRoute)

app.listen(process.env.PORT,()=>{
    connectDB()
    console.log("App is running on port 5003")
})