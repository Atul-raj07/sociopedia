import React from 'react'
import Logout from '../components/Logout'
import Navbar from '../components/Navbar'
import { useSelector } from 'react-redux'
import axios from 'axios'
import Createpost from '../components/Createpost'

const Home = () => {
  // const res = axios.get("http://localhost:5173/posts/getfeeds",values)
  // console.log(res)
  return (
    <>
    <div className='h-screen w-full flex p-4 justify-between '>
      <Navbar/>
      <div className='h-full w-[34rem] border-2 rounded-3xl bg-black'>
        
      </div>
      <Createpost/>
      </div>
    
    
    </>
  )
}

export default Home