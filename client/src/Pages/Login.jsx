import React, { useState } from 'react'
import { Link } from 'react-router-dom'



const Login = () => {
    const [name, setname] = useState("")

    console.log(name)
    const submitHandler = (e) =>{
        e.preventDefault()
        
        setname("")
    }
 

  return (
    <div className='h-[100vh] w-full flex items-center justify-center bg-slate-50 px-10 py-10'>
        <div className=' w-[25%] rounded-xl flex flex-col items-center justify-center px-6 py-6 bg-slate-100'>
          <img src="/assets/letter-c-and-dove-png_265386-removebg-preview.png" className='h-40 mt-[-10px] w-40' alt="img" />
          <h1>Sign In</h1>
          <form action="" className='w-full flex flex-col mt-5 items-center justify-center'>
              <input type="email" name="email" id="" className='mb-6 px-6 py-2 text-base font-normal w-full rounded-lg placeholder:text-sky-500 placeholder:text-xl placeholder:font-medium tracking-wider focus:outline-none' placeholder='email' />
            <input type="password" name="password" id="" placeholder='password' />
          <h4>Forgot password ?</h4>
          <input className='w-full bg-blue-500 py-2 rounded-md text-white font-bold text-xl tracking-widest' type="submit" value="sign in" />
          </form>
          <Link to={"/signup"}>Don't have account yet ? Sign up</Link>
                        </div>
    </div>
  )
}

export default Login