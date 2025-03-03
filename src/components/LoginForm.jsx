import React from "react";
import InputField from "./InputField";
import Button from "./Button";

function LoginForm() {
    return (
        <div className="login-container">
            <h2 className="login-title">Login</h2>
            <p className="login-subtitle">Enter Login details to get access</p>

            <InputField label="Username Or Email Address" type="text" placeholder="Username / Email address" />
            <InputField label="Password" type="password" placeholder="Enter Password" />

            <div className="login-options">
                <label className="remember-me">
                    <input type="checkbox" /> Keep Me Logged In
                </label>
                <a href="#" className="forgot-password">Forgot Password?</a>
            </div>

            <div className="bottom-options">
                <p className="signup-text">Don’t have an account? <a href="#">Sign Up</a> here</p>
                <Button text="Login" />
            </div>
        </div>
    );
}

export default LoginForm;
