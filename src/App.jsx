import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Auth/Login/Login';
import Signup from './pages/Auth/Signup/Signup';
import Home from './pages/Home';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/signup' element={<Signup />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;