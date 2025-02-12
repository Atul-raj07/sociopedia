import React from 'react'
import Navbar from './components/Navbar'
import { Routes, Route} from "react-router-dom"
import Login from './Pages/Login'
import Signup from './Pages/Signup'

const App = () => {
  return (
    <div>
     


     <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
     </Routes>
    </div>
  )
}

export default App
