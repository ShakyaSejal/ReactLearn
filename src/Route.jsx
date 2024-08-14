import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Register from './Register'
import Login from './login'

const Path = () => {
  return (
 
    <Routes>
        <Route path='/register' element={<Register/>} />
        <Route path='/login' element={<Login/>} />

    </Routes>
    
  )
}

export default Path