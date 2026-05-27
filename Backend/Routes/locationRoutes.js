import express from "express"

const router = express.Router();

router.post("/location",(req,res)=>{
    const {latitude, longitude} = req.body
    console.log(latitude, longitude)
    return res.status(201).json({
        success:true,
        message:"Location Recieved"
    })
})

export default router