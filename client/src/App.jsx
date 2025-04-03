import React from 'react'
import Navbar from './components/Navbar'
import { Routes, Route, Navigate} from "react-router-dom"
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import { useDispatch, useSelector } from 'react-redux'
import Home from './Pages/Home'
import Welcome from './components/Welcome'


const App = () => {
  const usedispatch = useDispatch()
  const {user} = useSelector((store)=> store.user)
  const ProtectedRoute = ({ children }) => {
    const token = useSelector((store)=> store.user.token)

    if (!token) {
        return <Navigate to="/" />;
    }
    return children;
};
 
  return (
    <div>
     
   {/* <div>{user.map((u)=>(
    <h2 key={u.id}>{u.name}</h2>
   ))}
   </div> */}
     <Routes>
      <Route path='/' element={<Welcome/>} />
      <Route path='/auth/login' element={<Login/>}/>
      <Route path='/auth/register' element={<Signup/>}/>
      <Route  element={<ProtectedRoute/>}>
      <Route path='/posts/getfeeds' element={<Home/>}/>
      </Route>
     </Routes>
     
    </div>
  )
}

export default App
