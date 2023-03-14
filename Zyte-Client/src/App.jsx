import { useState } from 'react'
import Loginpage from './components/auth/Loginpage'
import "./App.css"

import Home from './components/Home'
import { Route , Routes } from 'react-router-dom'
import RegisterPage from './components/auth/RegisterPage'

function App() {
 
  return (
    <div className="App">

<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/login' element={<Loginpage/>}/>
  <Route path='/Register' element={<RegisterPage/>}/>
</Routes>       
    </div>
  )
}

export default App
