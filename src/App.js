import logo from './logo.svg';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import styled from 'styled-components';
import './App.css';

import Experiances from './components/screens/experiances/Experiances';
import HeaderTop from './components/includes/HeaderTop';
import Cards from './components/screens/cards/Cards';

function App() {
  return (
    <>
      <Router>
        <HeaderTop />
        <Routes>
          <Route path='/' element={<Cards />} />
          <Route path='/experiences' element={<Experiances />} />
        </Routes>
      </Router>
    </>
  );
}
export default App;
