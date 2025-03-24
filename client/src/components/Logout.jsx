import React from 'react'
import { redirect, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Logout = () => {
 const navigate = useNavigate()  
 
 const LogoutHandler = ()=>{
    axios.post("localhost:5000/auth/logout")
    redirect("/localhost:5000/auth/login")
 }
  return (
    <>
    <div className='px-6 py-2 text-white bg-red-600 w-24 flex items-center justify-center'> 
        <button onClick={}>Logout</button>
        </div>
    </>
  )
}

export default Logout