import userModel from "../models/User.js"
export const usersController = async (req, res) => {
    try{
        const {id} = req.params
        const user = await userModel.findById(id)
        res.json(user)
    }catch(err){
        res.send(err.message)
    }
    
};

export const friendsController = async (req, res) => {
    const {id} = req.params
    const user = await userModel.findById(id)
    const friends = await Promise.all(
        user.friends.map((id)=> userModel.findById(id))
    )
    const formattedFriends = friends.map(
        ({_id, firstname, lastname, occupation, location, picturePath})=>{
            return {_id, firstname, lastname, occupation, location, picturePath}
        }
    )
    res.send(formattedFriends)
}
export const addRemoveFriend = async (req, res) => {
    const {id, friendId} = req.params
    const user = await userModel.findById(id)
    const friend = await userModel.findById(friendId)
    if(user.friends.includes(friendId)){
        user.friends = user.friends.filter((id) => id!== friendId)
        friend.friends = friend.friends.filter((id) => id!== id)
    }else{
        user.friends.push(friendId)
        friend.friends.push(id)

    }
    await user.save()
    await friend.save()
    const friends = await Promise.all(
        user.friends.map((id)=> userModel.findById(id))
    )
    const formattedFriends = friends.map(
        ({_id, firstname, lastname, occupation, location, picturePath})=>{
            return {_id, firstname, lastname, occupation, location, picturePath}
        }
    )
    res.send(formattedFriends)

}