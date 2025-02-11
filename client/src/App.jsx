import React from 'react'
import Navbar from './components/Navbar'
import Login from './components/Login'
import { Routes, Route} from "react-router-dom"

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        {/* <Route path='/' element={<App/>} /> */}
        <Route path="/login" element={<Login/>}  />
      </Routes>

    </div>
  )
}

export default App
