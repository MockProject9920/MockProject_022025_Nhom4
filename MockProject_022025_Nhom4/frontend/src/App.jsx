import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import AdminLayout from './layouts/AdminLayout';
import UserLayout from './layouts/UserLayout';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Dashboard from './pages/dashboard/Dashboard';
import ClaimList from './pages/claims/ClaimList';
import ClaimDetail from './pages/claims/ClaimDetail';

const App = () => {
    return (
        <Router>
            <Navbar />
            <Sidebar />
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/dashboard" element={<AdminLayout><Dashboard /></AdminLayout>} />
                <Route path="/claims" element={<UserLayout><ClaimList /></UserLayout>} />
                <Route path="/claims/:id" element={<UserLayout><ClaimDetail /></UserLayout>} />
            </Routes>
        </Router>
    );
};

export default App;