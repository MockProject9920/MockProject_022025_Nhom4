package com.company.insurance.repository.auth;

import com.company.insurance.model.auth.Customer;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface CustomerRepository extends JpaRepository<Customer, Long> {
    /**
     * Find a customer by their email address.
     *
     * @param email The email address of the customer.
     * @return An Optional containing the found customer, or empty if not found.
     */
    Optional<Customer> findByEmail(String email);

    /**
     * Check if a customer with the given email already exists.
     *
     * @param email The email address to check.
     * @return True if a customer with the email exists, otherwise false.
     */
    boolean existsByEmail(String email);
}
