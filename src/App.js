import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import OnBoarding from "./pages/OnBoarding/OnBoarding";
import Profile from "./pages/Profile/Profile";
import ProtectedRoutes from "./routes/ProtectedRoutes";
import "../src/App.css";
import AddNewPage from "./pages/AddNewPage/AddNewPage";
import MyAccountPage from "./pages/MyAccountPage/MyAccountPage";
import Galery from "./pages/Galery/Galery";
import React from "react";
import Home from "./pages/Home/Home";
import Head from "./components/Head/Head";

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
    line-height: 22px;
    font-weight: 600;
  }
`;



function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <GlobalStyle />
        <Head />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/category/:galeryname' element={<Galery />} />
          {/* ----------Protected Routed for authenticated user --------------- */}
          <Route path='/favourites' element={<Galery path={'favourites'} />} />
          <Route element={<ProtectedRoutes />}>
            <Route path='/pending' element={<Home />} />
            <Route path='/mylisting' element={<Home />} />
            <Route path='/mylisting/add' element={<Home />} />
            <Route path='/mylisting/:id' element={<Home />} />
            <Route path='/mylisting/edit' element={<Home />} />
            <Route path='/myprofile/profile' element={<Profile />} />
            <Route path='/myprofile/loginsecurity' element={<Profile />} />
            <Route path='/myprofile/notification' element={<Profile />} />
            <Route path='/myprofile/message' element={<Profile />} />
            <Route path='/add-new' element={<AddNewPage />} />
            <Route path='/editpost/:id' element={<AddNewPage />} />
            <Route path='/my-account' element={<MyAccountPage />} />
            <Route
              path='/my-account/profile'
              element={<MyAccountPage pageName='Profile' />}
            />
            <Route
              path='/my-account/login&security'
              element={<MyAccountPage pageName='Login & security' />}
            />
            <Route
              path='/my-account/notifications'
              element={<MyAccountPage pageName='Notifications' />}
            />
            <Route
              path='/my-account/messages'
              element={<MyAccountPage pageName='Messages' />}
            />
          </Route>

          <Route path="/login" element={<OnBoarding pageName="logIn" />} />

          <Route
            path='/sign-up'
            element={<OnBoarding pageName='createAccount' />}
          />
          <Route
            path='/forgot-password'
            element={<OnBoarding pageName='forgotPassword' />}
          />
          <Route
            path='/reset-password'
            element={<OnBoarding pageName='resetPassword' />}
          />
          {/* add new */}

          <Route path='/*' element={<Navigate replace to='/' />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
