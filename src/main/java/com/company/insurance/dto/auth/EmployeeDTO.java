package com.company.insurance.dto.auth;
import java.time.LocalDate;

public class EmployeeDTO {
    private String email;
    private String name;
    private String role;
    private LocalDate hiredDate;

    public EmployeeDTO(String email, String name, String role, LocalDate hiredDate) {
        this.email = email;
        this.name = name;
        this.role = role;
        this.hiredDate = hiredDate;
    }

    public String getEmail() {
        return email;
    }

    public String getName() {
        return name;
    }

    public String getRole() {
        return role;
    }

    public LocalDate getHiredDate() {
        return hiredDate;
    }
}