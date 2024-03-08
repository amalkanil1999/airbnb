import React, { useContext, useEffect } from 'react';
import { BrowserRouter as Router, Routes } from 'react-router-dom';

import './App.css'

import HomeStack from './components/routing/HomeStack';
import AuthStack from './components/routing/AuthStack';
import { StoreContext, } from './components/context/Store';

function App() {
  const { state, dispatch } = useContext(StoreContext);

  useEffect(() => {
    const storedUserData = JSON.parse(localStorage.getItem('user_data'));
    if (storedUserData) {
      dispatch({ type: 'SET_USER_DATA', payload: storedUserData });
    } else {
      dispatch({ type: 'SET_USER_DATA', payload: {} });
    }
  }, [dispatch]);

  return (
    <>
      <Router>
          {state.userData?.access ? <HomeStack /> : <AuthStack />}
      </Router>
      </>
  );
}

export default App;
