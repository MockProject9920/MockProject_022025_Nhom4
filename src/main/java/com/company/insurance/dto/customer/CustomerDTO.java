package com.company.insurance.dto.customer;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CustomerDTO {
    private Long id;
    private String name;
    private String email;
    private String password;
    private String type;
    private String address;
    private String role;
    private String phone;
    private String status;
}
