package com.company.insurance.dto.auth;

import lombok.Getter;
import lombok.Setter;
import java.time.LocalDate;

@Getter
@Setter
public class AuthResponse {
    private Long id;
    private String name;
    private String email;
    private String role;
    private LocalDate memberSince;
}

