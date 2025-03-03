@extends('layouts.app')

@section('content')
<main class="d-flex justify-content-center align-items-center" style="background-image: url('{{ asset('build/assets/img/abc.jpg') }}'); background-size: cover; min-height: 100vh;">
    <div class="bg-white p-5 border shadow" style="width: 700px;">
        <div class="d-flex flex-column align-items-center">
            <h2 class="fw-bold mb-3">Login</h2>
            <p class="text-secondary">Enter login details to get access</p>
            <div class="pt-4 pb-5 w-100 d-flex flex-column">
                <div class="mb-3">
                    <label for="username" class="fw-bold mb-2">Username or Email Address</label>
                    <input type="text" class="form-control border rounded-0 mb-3 px-3 w-100" id="username" placeholder="Username / Email Address">
                </div>
                <div class="mb-3">
                    <label for="password" class="fw-bold mb-2">Password</label>
                    <input type="text" class="form-control border rounded-0 mb-3 px-3 w-100" id="username" placeholder="Username / Email Address">
                </div>
                <div class="d-flex w-100 pt-2">
                    <div class="d-flex align-items-center">
                        <input class="form-check-input" type="checkbox" id="rememberMe">
                        <label class="fw-bold ms-2" for="rememberMe">Keep me logged in</label>
                    </div>
                    <div class="text-info ms-auto d-flex align-items-center">
                        <a href="#" class="text-decoration-none">Forgot Password?</a>
                    </div>
                </div>
            </div>
            <div class="d-flex w-100 align-items-center">
                <p class="mb-0">Don’t have an account? <a href="#" class="text-info">Sign Up</a> here</p>
                <button class="btn btn-info ms-auto px-4 py-2 text-white border rounded-0" type="button">Login</button>
            </div>
        </div>
    </div>
</main>
@endsection
