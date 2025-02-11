import React, { useState } from 'react'

const Login = () => {
    const [name, setname] = useState("")

    console.log(name)
    const submitHandler = (e) =>{
        e.preventDefault()
        
        setname("")
    }
 

  return (
    <div className='h-full w-full flex items-center justify-center px-10 py-10'>
        <div className=' w-[32%] rounded-xl px-10 py-20 bg-gradient-to-r from-blue-500 to-purple-500'>
                    <form onSubmit={submitHandler}>
                        <input onChange={(e)=>setname(e.target.value)} type="text" value={name} name="name" id="" placeholder='name' className='rounded-lg px-6 py-2 w-full' />
                    </form>
            </div>
    </div>
  )
}

export default Login