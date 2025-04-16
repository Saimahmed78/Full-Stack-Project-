import ApiResponse from "../utils/Api-Response.js"

const healthcheck=(req,res)=>{
    res.status(200).json(
        new ApiResponse(400,"server is running ok")
    )
}

export default healthcheck