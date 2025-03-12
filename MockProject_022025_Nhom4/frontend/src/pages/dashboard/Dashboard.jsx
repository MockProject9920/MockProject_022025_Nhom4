import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    const user = useSelector((state) => state.auth.user);
    const claims = useSelector((state) => state.claims.items);

    return (
        <div className="dashboard">
            <h1>Welcome to the Dashboard, {user.name}!</h1>
            <h2>Your Claims</h2>
            {claims.length > 0 ? (
                <ul>
                    {claims.map((claim) => (
                        <li key={claim.id}>
                            <Link to={`/claims/${claim.id}`}>{claim.title}</Link>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No claims found.</p>
            )}
        </div>
    );
};

export default Dashboard;