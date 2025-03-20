import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <Link to="/">Insurance App</Link>
            </div>
            <ul className="navbar-menu">
                <li>
                    <Link to="/auth/login">Login</Link>
                </li>
                <li>
                    <Link to="/auth/register">Register</Link>
                </li>
                <li>
                    <Link to="/dashboard">Dashboard</Link>
                </li>
                <li>
                    <Link to="/claims">Claims</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;