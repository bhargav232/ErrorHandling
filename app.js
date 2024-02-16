import express from "express";
import userRouter from "./routes/user.js"
import errorMiddleware from "./middlewares/Error.js";
import connectDB from "./config/mongodb.js"

import dotenv from 'dotenv';
dotenv.config();


const port = process.env.PORT || 4000;
const app = express();

app.use(express.json()); 


connectDB();




app.use("/users", userRouter);


app.listen(port, ()=>{
    console.log(`server is up and running on port ${port}`)
})


app.use(errorMiddleware);



















// class for handling custom erros
// class ErrorHandler extends Error
// {
//     constructor(message, statusCode){
//         super(message)
//         this.statusCode = statusCode
//     }
// }

// error eithout any middle ware

// app.get("/", (req,res)=>{
//     res.status(404).json({
//        message: "Not found"
//     })
// })


// app.get("/", (req,res, next)=>{
//   return next( new Error ("I am  busy"))
//     })

// app.get("/", (req,res, next)=>{
//    next( new ErrorHandler("Access Forbiden", 401))
//     })

// // error handling middle-ware(it is best practise to put this handler at last for execution)

// app.use((err, req, res, next)=>{

//     err.message = err.message || "internal server error"
//     err.statusCode = err.statusCode || 500

//     res.status(err.statusCode ).json({
//         message:err.message
//     })
// })
