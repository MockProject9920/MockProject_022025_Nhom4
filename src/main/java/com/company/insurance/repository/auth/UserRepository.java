package com.company.insurance.repository.auth;
import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.company.insurance.dto.customer.CustomerDTO;
import com.company.insurance.model.auth.User;
@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByEmail(String email);
    boolean existsByEmail(String email);

    @Query("SELECT new com.company.insurance.dto.customer.CustomerDTO( " +
       "u.id, u.name, u.email, u.role, " +
       "c.password, c.type, c.address, c.phone, c.status) " +
       "FROM User u LEFT JOIN u.customer c " +
       "WHERE u.role = 'Customer'")
List<CustomerDTO> findAllCustomersWithDetails();
    @Query("SELECT new com.company.insurance.dto.customer.CustomerDTO( " +
           "u.id, u.name, u.email, u.role, " +
           "c.password, c.type, c.address, c.phone, c.status) " +
           "FROM User u LEFT JOIN u.customer c " +
           "WHERE u.role = 'Customer' AND u.email = :email")
    Optional<CustomerDTO> findCustomerByEmail(@Param("email") String email);
}

