import { createSlice } from '@reduxjs/toolkit'

const initialState = {
user: [],
token:null,
posts:[]
}

export const userSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
 
 setLogin:(state, action)=>{
  state.user = action.payload.user,
  state.token = action.payload.token
  },
  setLogout:(state)=>{
    state.user = null,
    state.token = null
  },
  setFriends:(state,actions)=>{
  if(state.user){
  state.user.friends = actions.payload.friends;
  }else{
  console.log("user friend not existed");
  }
  },
  setPosts:(state,action)=>{
  state.posts = action.payload.posts;
  },
  setPost:(state,action)=>{
    const updatedPost = state.posts.map((post)=>{
      if(post._id === action.payload.post_id) return action.payload.post ;
      return post

    });
    state.posts = updatedPost

  },

}
})

export const {setMode,setFriends,setLogin,setLogout,setPost,setPosts} = userSlice.actions

export default userSlice.reducer