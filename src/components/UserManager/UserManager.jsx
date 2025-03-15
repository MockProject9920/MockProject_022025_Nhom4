import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const UserManager = () => {
    return (
        <div>
            <Outlet />
        </div>
    );
};

export default UserManager;
