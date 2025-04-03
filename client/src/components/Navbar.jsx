import React from 'react'
import Logout from './Logout'
import { useSelector } from 'react-redux';

const Navbar = () => {
  const user = useSelector((state) => state.user.user);
  return (
    <>
    <div className='w-56 h-full rounded-3xl flex flex-col items-center border  border-r border-gray-400 bg-blue-50 px-10 py-4 ' >
      <h1 className='text-center text-blue-600 font-bold text-2xl tracking-widest'>Collegro</h1>
      <h2 className='mt-5 text-center text-lg'>Hello {user.firstName}</h2>
      <h3>Profile </h3>
      <h3>messages</h3>
      <Logout/>
    </div>
    </>
  )
}

export default Navbar