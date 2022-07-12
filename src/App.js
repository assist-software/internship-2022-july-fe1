import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { createGlobalStyle } from "styled-components";

import HomePage from "./pages/homepage/HomePage";
import LoginPage from './pages/LoginPage/LoginPage';

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    box-sizing: border-box;
  }
`

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path="/*" element={<Navigate replace to='/' />} />
          <Route path='/login' element={<LoginPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
