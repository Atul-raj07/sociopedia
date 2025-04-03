import React from 'react'
import Logo from "./Logo"
import {useNavigate} from "react-router-dom"

const Welcome = () => {

  const navigate = useNavigate()
  return (
    <>
    <div className='h-screen bg-[url("https://images.unsplash.com/vector-1738163313102-e849161b35ab?q=80&w=2148&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")] w-full bg-cover bg-center '></div>
    <div className="absolute inset-0 bg-black opacity-50"></div>
      
      <div className="absolute inset-0 flex flex-col py-24 items-center justify-between">
      <div className='flex flex-col items-center justify-center'>  <Logo/>
        <h2 className="text-white tracking-wide mt-[-15px] mb-5 font-light text-2xl">Welcome to </h2>
        <h2 className="text-white tracking-widest  font-bold text-4xl">Collegro</h2>
        </div>
        <div className='flex flex-col gap-5'>
          <button onClick={()=>{navigate("/auth/login")}} className='w-60 hover:bg-blue-500 hover:text-white  py-3 rounded-lg text-xl  px-6 font-medium tracking-wide bg-white text-black'>Sign In</button>
        <button onClick={()=>{navigate("/auth/register")}} className='w-60  hover:bg-blue-500 hover:text-white py-3 rounded-lg text-xl  px-6 font-medium tracking-wide bg-white text-black'>Sign Up</button>
        </div>
        </div>
    </>
  )
}

export default Welcome ;