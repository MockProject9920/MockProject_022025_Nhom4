package com.company.insurance.controller.customer;

import com.company.insurance.dto.auth.CustomerDTO;
import com.company.insurance.service.customer.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import org.springframework.security.core.Authentication;

@RestController
@RequestMapping("/api/customer")
public class CustomerController {

    @Autowired
    private CustomerService customerService;

    /**
     * Get customer info of the currently authenticated user.
     *
     * @return CustomerDTO containing the customer's details.
     */
    @GetMapping("/profile")
    public CustomerDTO getCustomerInfo(Authentication authentication) {
        String email = authentication.getName(); // Get email from JWT token
        return customerService.getCustomerInfo(email);
    }
}
