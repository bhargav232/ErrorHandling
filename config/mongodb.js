import mongoose from "mongoose"
import dotenv from 'dotenv';
mongoose.set('strictQuery', false);
dotenv.config();

const connectDB = async()=>{

    try
    {
        const{connection} = await mongoose.connect(process.env.CONNECTIONSTRING )
        console.log(`connected to ${connection.host}`)
    }
    catch(error){
        console.error("Error", error)

    }
}


export default connectDB;