
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
    const post = await Post.find()
    res.send(post)
}

export const getuserpost = async (req,res) =>{
    const userId = req.user.id
    const post = await Post.find({userId})
    res.send(post)
}

export const getlikes = async (req,res) =>{
    const {id} = req.params
    const {userId} = req.body
    const post = await Post.findOne({ _id: id })
  
    const isliked =  post.likes.get(userId)

    if (isliked) {
        post.likes.delete(userId)

    }else{
        post.likes.set(userId,true)

    }
    const updatePost = await Post.findOneAndUpdate(
        { _id: id },
        {likes: post.likes},
        {new :true}

    )
    res.send(updatePost)
}