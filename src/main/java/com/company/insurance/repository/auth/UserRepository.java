package com.company.insurance.repository.auth;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.company.insurance.dto.customer.CustomerDTO;
import com.company.insurance.model.auth.User;

import jakarta.transaction.Transactional;

public interface UserRepository extends JpaRepository<User, Long> {

       @Query("SELECT new com.company.insurance.dto.customer.CustomerDTO(" +
              "u.id, u.name, u.email, u.role, " +
              "c.password, c.type, c.address, c.phone, c.status, " +
              "c.dateOfBirth, c.gender, c.houseNumber, c.zipcode, c.idNumber" +
              ") " +
              "FROM User u JOIN u.customer c")
       List<CustomerDTO> findAllCustomersWithDetails();

       @Query("SELECT new com.company.insurance.dto.customer.CustomerDTO(" +
              "u.id, u.name, u.email, u.role, " +
              "c.password, c.type, c.address, c.phone, c.status, " +
              "c.dateOfBirth, c.gender, c.houseNumber, c.zipcode, c.idNumber" +
              ") " +
              "FROM User u JOIN u.customer c " +
              "WHERE u.email = :email")
       Optional<CustomerDTO> findCustomerByEmail(@Param("email") String email);
       List<User> findByRoleNot(String role);
       List<User> findByRole(String role);
       Optional<User> findByEmail(String email);
       @Modifying
@Transactional
@Query("DELETE FROM Customer c WHERE c.user.email = :email")
void deleteCustomerByUserEmail(@Param("email") String email);

@Modifying
@Transactional
@Query("DELETE FROM User u WHERE u.email = :email")
void deleteUserByEmail(@Param("email") String email);
}
