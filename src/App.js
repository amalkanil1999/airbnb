import React from 'react'
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomeStack from "./components/routing/HomeStack"
import AuthStack from './components/routing/AuthStack';
import { useState, useEffect } from "react";

export const UserContext = React.createContext();

function App() {
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(true);
  const updateUserData = (action) =>{
    switch(action.type){
      case "LOGOUT":
        setUserData({});
        localStorage.clear();
        break;
      case "LOGIN":
        setUserData(action.payload);
        break; 
      default:
        break;  
    }
}
  useEffect(() => {
    const storedUserData = JSON.parse(localStorage.getItem("user_data"));
    setUserData(storedUserData);
    setLoading(false);
  }, []);
  
   return loading? (<div>Loading</div>) : (
    <>
      <UserContext.Provider value={{userData,updateUserData}}>
    <Router>
      { userData?.access ? <HomeStack /> : <AuthStack /> }
      </Router>
      </UserContext.Provider>
    </>
    
  )
}

export default App