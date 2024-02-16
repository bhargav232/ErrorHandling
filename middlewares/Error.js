const errorMiddleware = (error, req, res, next)=>{

    error.message = error.message || "Internal Server Errror"
    error.statusCode = error.statusCode || 500

    if(error.code === 11000){
        error.message =  "Dup key error!"
        
    }

    res.status(error.statusCode).json({
        success: false,
        message: error.message
    })

}
export default errorMiddleware;