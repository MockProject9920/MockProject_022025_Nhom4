package com.company.insurance.service.customer;

import com.company.insurance.dto.auth.CustomerDTO;
import com.company.insurance.mapper.CustomerMapper;
import com.company.insurance.model.auth.Customer;
import com.company.insurance.repository.auth.CustomerRepository;
import com.company.insurance.util.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CustomerService {

    @Autowired
    private CustomerRepository customerRepository;

    @Autowired
    private CustomerMapper customerMapper;


    /**
     * Retrieves customer information based on the provided email.
     *
     * This method queries the database for a customer with the specified email.
     * If the customer is not found, a RuntimeException is thrown.
     * Otherwise, the customer entity is converted to a CustomerDTO and returned.
     *
     * @param email The email of the customer to retrieve.
     * @return CustomerDTO containing the customer's details.
     * @throws RuntimeException if no customer is found with the provided email.
     */
    public CustomerDTO getCustomerInfo(String email) {
        Customer customer = customerRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("Customer not found"));
        return customerMapper.toDTO(customer);
    }

}
