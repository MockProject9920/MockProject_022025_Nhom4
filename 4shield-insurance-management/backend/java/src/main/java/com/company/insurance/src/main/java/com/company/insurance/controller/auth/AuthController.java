package com.company.insurance.controller.auth;

import com.company.insurance.dto.auth.CustomerDTO;
import com.company.insurance.service.auth.AuthRequest;
import com.company.insurance.service.auth.AuthResponse;
import com.company.insurance.service.auth.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestBody;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    private AuthService authService;

    /**
     * Handles customer registration requests.
     *
     * @param customerDTO The customer registration details
     * @return The registered customer details
     */
    @PostMapping("/register")
    public CustomerDTO register(@Valid @RequestBody CustomerDTO customerDTO) {
        return authService.register(customerDTO);
    }

    /**
     * Handles customer authentication requests.
     *
     * @param request The authentication request containing email and password
     * @return The authentication response containing the JWT token
     */
    @PostMapping("/login")
    public AuthResponse authenticate(@Valid @RequestBody AuthRequest request) {
        return authService.authenticate(request);
    }
}
