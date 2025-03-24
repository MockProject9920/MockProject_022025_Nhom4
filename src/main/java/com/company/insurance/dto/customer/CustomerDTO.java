package com.company.insurance.dto.customer;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import lombok.NoArgsConstructor;

@Data
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class CustomerDTO {
    private Long id;
    private String name;
    private String email;
    private String role; // Từ User
    private String password; // Từ Customer
    private String type; // Từ Customer
    private String address; // Từ Customer
    private String phone; // Từ Customer
    private String status; // Từ Customer
}