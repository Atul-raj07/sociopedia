import React from 'react'
import { redirect, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { setLogout } from '../store/reducers/UserReducer'

const Logout = () => {
 const navigate = useNavigate()  
 const dispatch = useDispatch()
 
 const LogoutHandler = async ()=>{
 const res =   await axios.post("http://localhost:5000/auth/logout",{},{ withCredentials:true},
)
 console.log(res)
 dispatch(setLogout())
    navigate("/")
 }
  return (
    <>
    <div className='px-6 py-2 text-white rounded-xl bg-red-600 w-24 flex items-center justify-center'> 
        <button onClick={LogoutHandler}>Logout</button>
        </div>
    </>
  )
}

export default Logout