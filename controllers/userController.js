
import ErrorHandler from "../utils/errorHandler.js";
import {User} from "../models/userModel.js"


export const newUser = async (req,res, next)=>{

    const {name, email} = req.body

    let userExist = await User.findOne({email}) 

   if(userExist){
    return next(new ErrorHandler("user already exist!", 401))
   }
   else{
    try{
        await User.create({
            name,
            email
        })
        res.json({
            msg: "user created successfully"
        })
    }
    catch(err){
        return next(err)
    }
   
}

}