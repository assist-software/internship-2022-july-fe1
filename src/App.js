import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { createGlobalStyle } from "styled-components";

import HomePage from "./pages/homepage/HomePage";
import OnBoarding from './pages/OnBoarding/OnBoarding';


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
          <Route path='/' element={<HomePage />} />
          <Route path="/*" element={<Navigate replace to='/' />} />
          <Route path='/login' element={<OnBoarding pageName="logIn"/>}/>
          <Route path='/sign-up' element={<OnBoarding pageName="createAccount"/>}/>
          <Route path='/forgot-password' element={<OnBoarding pageName="forgotPassword"/>}/>
          <Route path='/reset-password' element={<OnBoarding pageName="resetPassword"/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
