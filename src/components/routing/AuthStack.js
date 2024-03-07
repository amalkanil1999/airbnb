import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from '../screens/login/Login';


function AuthStack() {
  return (
      <Routes>
          <Route path="/" element={<Login />} />
    </Routes>
  )
}

export default AuthStack