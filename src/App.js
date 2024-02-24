import logo from './logo.svg';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import styled from 'styled-components';
import './App.css';
import Header from './components/Header';
import Main from './components/screens/Main';
import Experiances from './components/screens/Experiances';

function App() {
  return (
    <>
      <Router>
        <Container>
        <Header />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='experiances' element={<Experiances />} />
          </Routes>
        </Container>
      </Router>
    </>
  );
}
const Container = styled.section`
width: 85%;
margin: 0 auto;
max-width: 1280px;
`
export default App;
