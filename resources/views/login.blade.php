<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login Page</title>

    {{-- Include the CSS file --}}
    <link rel="stylesheet" href="{{ asset('css/login.css') }}">
</head>

<body class="container">
    <div class="login-form-area">
        <div class="login-container">
            <h1 class="login-title">Login</h1>
            <p class="login-subtitle">Enter Login details to get access</p>

            <form>
                <div class="form-group">
                    <label class="form-label" for="email">Username Or Email Address</label>
                    <input class="form-input" type="text" id="email" placeholder="Username / Email address">
                </div>

                <div class="form-group">
                    <label class="form-label" for="password">Password</label>
                    <input class="form-input" type="password" id="password" placeholder="Enter Password">
                </div>

                <div class="form-footer">
                    <div class="remember-me">
                        <input type="checkbox" id="remember" class="checkbox-input">
                        <label for="remember">Keep Me Logged In</label>
                    </div>

                    <a href="#" class="forgot-password">Forgot Password?</a>
                </div>

                <button type="submit" class="login-button">Login</button>
            </form>

            <p class="signup-text">Don't have an account? <a href="#" class="signup-link">Sign Up</a> here</p>
        </div>
    </div>
</body>

</html>
