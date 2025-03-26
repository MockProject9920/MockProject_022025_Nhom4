package com.company.insurance.dto.customer;

import java.time.LocalDate;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class CustomerDTO {
    private Long id;
    private String name;
    private String email;
    private String role;       // From User
    private String password;   // From Customer
    private String type;       // From Customer
    private String address;    // From Customer
    private String phone;      // From Customer
    private String status;     // From Customer
    private LocalDate dateOfBirth; // From Customer
    private String gender;         // From Customer
    private String houseNumber;    // From Customer
    private String zipcode;        // From Customer
    private String idNumber;       // From Customer
}
