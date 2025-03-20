// filepath: /MockProject_022025_Nhom4/MockProject_022025_Nhom4/backend/src/middlewares/errorHandler.js

const errorHandler = (err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';

    res.status(statusCode).json({
        status: 'error',
        statusCode,
        message,
    });

    // Optionally log the error for debugging
    console.error(err);
};

module.exports = errorHandler;