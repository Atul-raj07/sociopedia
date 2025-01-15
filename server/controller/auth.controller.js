
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import cookieParser from 'cookie-parser';
import userModel from "../models/User.js";
export  const register = async (req, res) =>{
    try{
        const {firstname,lastname,email,password,picturepath} = req.body
        if(!firstname || !lastname || !email || !password || !picturepath) return res.json("fields are required")
        const userEmail = await   userModel.findOne({email: email})
            if(userEmail) return res.json("enmail already exists")
                const salt = await bcrypt.genSalt(10)
            const saltpassword = await bcrypt.hash(password, salt)

          const user = await userModel.create({
        firstname,
        lastname,
        email,
        password : saltpassword,
        picturepath
            })
            res.json({message:"user created successfully",user})
    }catch(error){
        return res.json({error:error.message})
    }
}

export const login = async (req, res) => {
    const {email, password} = req.body
    if(!email || !password) return res.json({message:"feilds are required"})
        const user = await User.findOne({email: email})
    if(!user) return res.json({message:"no user found"})
        const isMatched = await bcrypt.compare(password, user.password)
    if(!isMatched) return res.json({message:"password mismatch"})
        const token = jwt.sign({id:user._id})

}