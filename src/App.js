import logo from "./logo.svg";
import React, { useEffect, useState } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import "./App.css";

import Experiances from "./components/screens/experiances/Experiances";
import HeaderTop from "./components/includes/Header/HeaderTop";
import Cards from "./components/screens/cards/Cards";

import FilterPop from "./components/includes/modals/popup/FilterPop";
import SignUp from "./components/includes/modals/popup/SignUp";
import Login from "./components/screens/login/Login";
import PrivateRoutes from "./components/utils/PrivateRoutes";
import SignupPage from "./components/screens/signup/SignupPage";

export const UserContext = React.createContext();

function App() {
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(true);
  const updateUserData = (action) =>{
    switch(action.type){
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
  
  const [showFilter, setShowFilter] = useState(false);
  const [openSignup, setOpenSignup] = useState(false);
  const toggleFilter = () => {
    setShowFilter(!showFilter);
  };
  const toggleSignup = () => {
    setOpenSignup(!openSignup);
  };
  return loading? (<div>Loading</div>) : (
    <>
      <UserContext.Provider value={{userData,updateUserData}}>
      <Router>
        <HeaderTop
          showFilter={showFilter}
          openSignup={openSignup}
          toggleSignup={toggleSignup}
          toggleFilter={toggleFilter}
        />
        <Routes>
        <Route path="/login" element={<Login />} />
          
          <Route element={<PrivateRoutes />} >
          <Route
            path="/home"
            element={
              <Cards
                showFilter={showFilter}
                toggleFilter={toggleFilter}
                openSignup={openSignup}
              />
            }
          />
          
              <Route path="/experiences" element={<Experiances />} />
              <Route path="/signup" element={<SignupPage />} />
          </Route>
          
        </Routes>
      </Router>
      <FilterPop trigger={showFilter} setTrigger={setShowFilter} />
        <SignUp trigger={openSignup} setTrigger={setOpenSignup}></SignUp>
        </UserContext.Provider>
    </>
  );
}

export default App;
