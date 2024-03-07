
import React, { useEffect, useState } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled from "styled-components";


import Experiances from "../screens/experiances/Experiances";
import HeaderTop from "../includes/Header/HeaderTop";

import FilterPop from "../includes/modals/popup/FilterPop";
import SignUp from "../includes/modals/popup/SignUp";
import Login from "../screens/login/Login";
import PrivateRoutes from "../utils/PrivateRoutes";
import SignupPage from "../screens/signup/SignupPage";
import Home from "../screens/cards/Home";



function HomeStack() {

  const [showFilter, setShowFilter] = useState(false);
  const [openSignup, setOpenSignup] = useState(false);
  const toggleFilter = () => {
    setShowFilter(!showFilter);
  };
  const toggleSignup = () => {
    setOpenSignup(!openSignup);
  };
  return  (
    <>
        <HeaderTop
          showFilter={showFilter}
          openSignup={openSignup}
          toggleSignup={toggleSignup}
          toggleFilter={toggleFilter}
        />
        <Routes>
        {/* <Route path="/login" element={<Login />} /> */}
        {/* <Route path="/signup" element={<SignupPage />} /> */}
          {/* <Route element={<PrivateRoutes />} > */}
          <Route
            path="/"
            element={
              <Home
                showFilter={showFilter}
                toggleFilter={toggleFilter}
                openSignup={openSignup}
              />
            }
          />
              <Route path="/experiences" element={<Experiances />} />
          {/* </Route> */}
          </Routes>
          <FilterPop trigger={showFilter} setTrigger={setShowFilter} />
        <SignUp trigger={openSignup} setTrigger={setOpenSignup}></SignUp>
    </>
  );
}

export default HomeStack;
