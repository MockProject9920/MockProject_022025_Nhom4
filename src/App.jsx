import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainLayout from './Layout/MainLayout';
import DashBoard from './components/DashBoard/DashBoard';
import UserManager from './components/UserManager/UserManager';
import Employee from './components/UserManager/Employee/Employee';
import Role from './components/UserManager/Role/Role';
import Customer from './components/UserManager/Customer/Customer';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainLayout />}>
            <Route index element={<DashBoard />}></Route>
            <Route path='/usermanager' element={<UserManager />}>
              <Route path='customer' element={<Customer />} />
              <Route path='employee' element={<Employee />} />
              <Route path='role' element={<Role />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;