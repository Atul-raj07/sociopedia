
import Post from "../models/Post.js";
import User from "../models/User.js";

export const createPost = async (req,res) =>{
    const {description,picturePath} = req.body;
    const userId = req.user.id;
    const user = await User.findById(userId);
if (!user) {
    return res.status(404).json({ message: "User not found" });
}

    const userpost = await Post.create({
        userId:userId,
          firstName: user.firstname,
          lastName:user.lastname,
          location: user.location,
          description: description,
          picturePath: picturePath,
          userPicturePath: user.picturepath,
          likes: {},
          comments:[],
    })
    res.send(userpost)
}
export const getfeeds = async (req,res) => {
    
}