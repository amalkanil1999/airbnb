import logo from './logo.svg';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import styled from 'styled-components';
import './App.css';
import Main from './components/screens/Main';
import Experiances from './components/screens/Experiances';
import HeaderTop from './components/HeaderTop';

function App() {
  return (
    <>
      <Router>
        <HeaderTop />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='experiences' element={<Experiances />} />
          </Routes>
      </Router>
    </>
  );
}
export default App;
