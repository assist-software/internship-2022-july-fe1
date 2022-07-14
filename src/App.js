import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { createGlobalStyle } from "styled-components";


import HomePage from "./pages/homepage/HomePage";
import LoginPage from './pages/LoginPage/LoginPage';

import '../src/components/App.css'
const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
    line-height: 22px;
    font-weight: 600;
  }
`

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          <Route path='/homepage' element={<HomePage />} />
          <Route path="/*" element={<Navigate replace to='/' />} />
          <Route path='/login' element={<LoginPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
