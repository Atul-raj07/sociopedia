
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import cookieParser from 'cookie-parser';
import userModel from "../models/User.js";
export  const register = async (req, res) =>{
    try{
        const {firstName,lastName,email,password,picturepath} = req.body
        if(!firstName || !lastName || !email || !password ) return res.json("fields are required")
        const userEmail = await   userModel.findOne({email: email})
            if(userEmail) return (res.json("email already exists"))
                const salt = await bcrypt.genSalt(10)
            const saltpassword = await bcrypt.hash(password, salt)

          const user = await userModel.create({
        firstName,
        lastName,
        email,
        password : saltpassword,
        picturepath
            })
            const token = jwt.sign({id:user._id,email:user.email},process.env.JWT_SECRET_KEY)
            res.cookie("auth",token)
            res.json({message:"user created successfully",user})
    }catch(error){
        return res.json({error:error.message})
    }
}

export const loginController = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await userModel.findOne({ email });
        if (!user) return res.status(404).json({ message: "User not found" });

        const isMatched = await bcrypt.compare(password, user.password);
        if (!isMatched) return res.status(401).json({ message: "Invalid credentials" });

        const token = jwt.sign({ id: user._id, email: user.email }, process.env.JWT_SECRET_KEY);
        
        res.cookie("auth", token);
        
        res.status(200).json({ 
            message: "Logged in successfully!",
            user,
            token
        });
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
}
export const logoutController = (req, res) => {
    res.clearCookie("auth")
    res.send("logout successfully ")
}