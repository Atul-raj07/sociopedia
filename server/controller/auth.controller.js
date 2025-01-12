
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import cookieParser from 'cookie-parser';
import userModel from "../models/User.js";
export  const register = async (req, res) =>{
    try{
        const {firstname,lastname,email,password,picturepath} = req.body
        if(!firstname || !lastname || !email || !password || !picturepath) return res.json("fields are required")
        const userEmail =    userModel.findOne({email: email})
            if(userEmail === email) return res.json("enmail already exists")
          const user =  userModel.create({
        firstname,
        lastname,
        email,
        password,
        picturepath
            })
            res.json({message:"user created successfully",user})
    }catch(error){
        return res.json({error})
    }
    
}