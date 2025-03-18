package com.company.insurance.repository.customer;
import com.company.insurance.model.customer.Customer;
import com.company.insurance.model.auth.User;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import java.util.Optional;

@Repository
public interface CustomerRepository extends JpaRepository<Customer, Long> {

    Optional<Customer> findByUserEmail(String email);

    boolean existsByUserEmail(String email);

}
