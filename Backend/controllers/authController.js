import bcrypt from "bcryptjs";
import User from '../models/userSchema.js'
import {sendOtpMail} from '../utils/sendMail.js'

const otpStore = new Map();

export const registerUser = async (req, res) =>{
    try{
        // fetch required data
        const {name, email, password, phone } =  req.body;
        //checked fetched data
        if(!name || !email || !password || !phone){
            return res.status(400).json({
                message:"All fields are required"
            })
        }
        //user exist or not
        const existingUser = await User.findOne({phone})

        if(existingUser){
            return res.status(400).json({
                message: "User already exist"
            })
        }

        //passwored hashed
        const hashed = await bcrypt.hash(password, 10);

        const otp = Math.floor(1000 + Math.random()*9000)

        otpStore.set(phone,{
            name,
            email,
            password:hashed,
            phone,
            otp
        })

        await sendOtpMail(email, otp);
        
        res.status(201).json({
            message:"otp sent Successfully".
            user
        });

    }
    catch(error){
        res.status(500).json({
            message:error.message,
        })
    }
}

export const verifyOtp = async (req, res) =>{
    try{
        const {phone, otp } = req.body;

        const storedData = otpStore.get(phone);

        if(!storedData){
            return res.status(400).json({
                message:"Otp expired or invalid"
            })
        }

        if(storedData.otp != otp){
            return res.status(400).json({
                message:"Incorrect Otp",
            })
        }

        const user = await User.create({
            name:storedData.name,
            email:storedData.email,
            password:storedData.password,
            phone:storedData.phone,
        })

        otpStore.delete();

        return res.status(201).json({
            message:"User registered successfully",
            user,
        })
    }
    
    catch(error){
        return res.status(500).json({
            message:error.message,
        })
    }
}

