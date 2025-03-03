<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Đăng nhập</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <style>
        body {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background: url('/images/background.jpg') no-repeat center center fixed;
            background-size: cover;
        }

        .login-container {
            width: 700px;
            padding: 40px;
            background: rgb(255, 255, 255);
            /* Nền trắng mờ */

            box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
        }

        h2 {
            font-weight: bold;
            text-align: center;
        }

        .btn-primary {
            background-color: #0099ff;
        }

        .btn-primary:hover {
            background-color: #007acc;
        }

        .text-link {
            color: #0099ff;
            text-decoration: none;
        }

        .text-link:hover {
            text-decoration: underline;
        }
    </style>
</head>

<body style="background: url('https://i.ytimg.com/vi/iA9WOk654kc/maxresdefault.jpg') no-repeat center center; background-size: cover;">
    <div class="login-container">
        <h2>Login</h2>
        <p class="text-center text-muted">Enter login details to get access</p>
        <form>
            <div class="mb-4">
                <label for="email" class="form-label">Username Or Email Address</label>
                <input type="email" class="form-control form-control-lg" id="email" placeholder="Username / Email address">
            </div>
            <div class="mb-4">
                <label for="password" class="form-label">Password</label>
                <input type="password" class="form-control form-control-lg" id="password" placeholder="Enter Password">
            </div>
            <div class="mb-4 d-flex justify-content-between align-items-center">
                <div class="form-check">
                    <input type="checkbox" class="form-check-input" id="remember">
                    <label class="form-check-label" for="remember">Keep Me Logged In</label>
                </div>
                <a href="#" class="text-link">Forgot Password?</a>
            </div>
        </form>
        <div class="d-flex justify-content-between align-items-center mt-4">
            <p class="mb-0">Don't have an account? <a href="#" class="text-link">Sign Up</a> here</p>
            <button type="submit" class="btn btn-primary">Login</button>
        </div>
    </div>
</body>

</html>