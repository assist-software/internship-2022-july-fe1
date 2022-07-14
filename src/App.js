import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

import HomePage from "./pages/homepage/HomePage";
import LoginPage from './pages/LoginPage/LoginPage';
import Profile from './pages/Profile/Profile';
import ProtectedRoutes from './routes/ProtectedRoutes';


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

        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />

{/* ----------Protected Routed for authenticated user --------------- */}
          <Route element={<ProtectedRoutes />}>

            <Route path="/favorites" element={<HomePage />} />
            <Route path="/pending" element={<HomePage />} />

            <Route path="/mylisting" element={<HomePage />} />
            <Route path="/mylisting/add" element={<HomePage />} />
            <Route path="/mylisting/:id" element={<HomePage />} />
            <Route path="/mylisting/edit" element={<HomePage />} />

            <Route path="/myprofile/profile" element={<Profile />} />
            <Route path="/myprofile/loginsecurity" element={<Profile />} />
            <Route path="/myprofile/notification" element={<Profile />} />
            <Route path="/myprofile/message" element={<Profile />} />

          </Route>
          
          <Route path="/*" element={<Navigate replace to='/' />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
