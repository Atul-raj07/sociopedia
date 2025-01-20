import jwt from "jsonwebtoken"

export const verifyToken = async  (req, res, next) => {
    const token = req.cookies.auth

      if (!token) {
            return res.status(401).json({ message: "Access denied. No token provided." });
        }
    const verification = await jwt.verify(token, process.env.JWT_SECRET_KEY)
    
    req.user = verification
    next();


}