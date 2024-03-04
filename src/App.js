import logo from "./logo.svg";
import React, { useState } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import "./App.css";

import Experiances from "./components/screens/experiances/Experiances";
import HeaderTop from "./components/includes/Header/HeaderTop";
import Cards from "./components/screens/cards/Cards/Cards";

import FilterPop from "./components/includes/modals/popup/FilterPop";
import SignUp from "./components/includes/modals/popup/SignUp";

function App() {
  const [showFilter, setShowFilter] = useState(false);
  const [openSignup, setOpenSignup] = useState(false);
  const toggleFilter = () => {
    setShowFilter(!showFilter);
  };
  const toggleSignup = () => {
    setOpenSignup(!openSignup);
  };
  return (
    <>
      <Router>
        <HeaderTop
          showFilter={showFilter}
          openSignup={openSignup}
          toggleSignup={toggleSignup}
          toggleFilter={toggleFilter}
        />
        <Routes>
          <Route
            path="/"
            element={
              <Cards
                showFilter={showFilter}
                toggleFilter={toggleFilter}
                openSignup={openSignup}
              />
            }
          />
          <Route path="/experiences" element={<Experiances />} />
        </Routes>
      </Router>
      <FilterPop trigger={showFilter} setTrigger={setShowFilter} />
      <SignUp trigger={openSignup} setTrigger={setOpenSignup}></SignUp>
    </>
  );
}

export default App;
