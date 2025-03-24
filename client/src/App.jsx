import React from 'react'
import Navbar from './components/Navbar'
import { Routes, Route} from "react-router-dom"
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import { useDispatch, useSelector } from 'react-redux'
import Home from './Pages/Home'


const App = () => {
  const usedispatch = useDispatch()
  const {user} = useSelector((store)=> store.user)
 
  return (
    <div>
     
   {/* <div>{user.map((u)=>(
    <h2 key={u.id}>{u.name}</h2>
   ))}
   </div> */}
     <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/Home' element={<Home/>}/>
     </Routes>
     
    </div>
  )
}

export default App
