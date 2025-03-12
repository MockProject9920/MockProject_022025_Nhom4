import React from 'react';

const LoadingSpinner = () => {
    return (
        <div className="loading-spinner">
            <style jsx>{`
                .loading-spinner {
                    border: 8px solid #f3f3f3; /* Light grey */
                    border-top: 8px solid #3498db; /* Blue */
                    border-radius: 50%;
                    width: 60px;
                    height: 60px;
                    animation: spin 1s linear infinite;
                }

                @keyframes spin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
            `}</style>
            Loading...
        </div>
    );
};

export default LoadingSpinner;