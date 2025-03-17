package com.company.insurance.service.auth;

import com.company.insurance.model.auth.Customer;
import com.company.insurance.repository.auth.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class CustomCustomerDetailsService implements UserDetailsService {

    @Autowired
    private CustomerRepository customerRepository;

    /**
     * Load customer details from the database by email.
     *
     * @param email The email of the customer to find.
     * @return UserDetails object containing customer information.
     * @throws UsernameNotFoundException If the customer is not found.
     */
    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        Customer customer = customerRepository.findByEmail(email)
                .orElseThrow(() -> new UsernameNotFoundException("Customer not found with email: " + email));

        return org.springframework.security.core.userdetails.User.builder()
                .username(customer.getEmail())
                .password(customer.getPassword())
                .roles("CUSTOMER")
                .build();
    }
}
