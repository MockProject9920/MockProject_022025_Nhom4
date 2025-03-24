package com.company.insurance.service.customer;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.company.insurance.dto.customer.CustomerDTO;
import com.company.insurance.model.auth.User;
import com.company.insurance.model.customer.Customer;
import com.company.insurance.repository.auth.UserRepository;
import com.company.insurance.repository.customer.CustomerRepository;

@Service
public class CustomerService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private CustomerRepository customerRepository;

    @Autowired
    public CustomerService(UserRepository userRepository, CustomerRepository customerRepository) {
        this.userRepository = userRepository;
        this.customerRepository = customerRepository;
    }

    public List<CustomerDTO> getAllCustomers() {
        return userRepository.findAllCustomersWithDetails();
    }

    public Optional<CustomerDTO> getCustomerByEmail(String email) {
        return userRepository.findCustomerByEmail(email);
    }

    @Transactional
    public CustomerDTO createCustomer(CustomerDTO customerDTO) {
        User user = new User();
        user.setName(customerDTO.getName());
        user.setEmail(customerDTO.getEmail());
        user.setRole("Customer");
        user.setMemberSince(LocalDate.now());
        user = userRepository.save(user);
    

        Customer customer = new Customer();
        customer.setName(customerDTO.getName());
        customer.setEmail(customerDTO.getEmail());
        customer.setPassword(customerDTO.getPassword());
        customer.setType(customerDTO.getType());
        customer.setAddress(customerDTO.getAddress());
        customer.setPhone(customerDTO.getPhone());
        customer.setStatus(customerDTO.getStatus());
        customer.setUser(user);
        customer = customerRepository.save(customer);
    
        user.setCustomer(customer);
        userRepository.save(user);
    
        CustomerDTO createdDTO = new CustomerDTO();
        createdDTO.setId(user.getId());
        createdDTO.setName(user.getName());
        createdDTO.setEmail(user.getEmail());
        createdDTO.setRole(user.getRole());
        createdDTO.setPassword(customer.getPassword());
        createdDTO.setType(customer.getType());
        createdDTO.setAddress(customer.getAddress());
        createdDTO.setPhone(customer.getPhone());
        createdDTO.setStatus(customer.getStatus());
        return createdDTO;
    }
    
    @Transactional
public void deleteCustomerByEmail(String email) {
    Optional<User> userOpt = userRepository.findByEmail(email);
    if (!userOpt.isPresent()) {
        throw new RuntimeException("User not found with email: " + email);
    }

    User user = userOpt.get();
    if (!"Customer".equals(user.getRole())) {
        throw new RuntimeException("User with email " + email + " is not a Customer");
    }
    
    if (user.getCustomer() != null) {
        customerRepository.delete(user.getCustomer());
    }
    
    userRepository.delete(user);
}

@Transactional
public CustomerDTO updateCustomer(CustomerDTO customerDTO) {
    Optional<User> userOpt = userRepository.findByEmail(customerDTO.getEmail());
    if (!userOpt.isPresent()) {
        throw new RuntimeException("User not found with email: " + customerDTO.getEmail());
    }
    
    User user = userOpt.get();
    if (!"Customer".equals(user.getRole())) {
        throw new RuntimeException("User with email " + customerDTO.getEmail() + " is not a Customer");
    }
    
    user.setName(customerDTO.getName());
    user = userRepository.save(user);
    
    
    Customer customer = user.getCustomer();
    if (customer == null) {
        throw new RuntimeException("Associated customer record not found for email: " + customerDTO.getEmail());
    }
    
    customer.setName(customerDTO.getName());
    customer.setPassword(customerDTO.getPassword());
    customer.setType(customerDTO.getType());
    customer.setAddress(customerDTO.getAddress());
    customer.setPhone(customerDTO.getPhone());
    customer.setStatus(customerDTO.getStatus());
    customer = customerRepository.save(customer);
    
    CustomerDTO updatedDTO = new CustomerDTO();
    updatedDTO.setId(user.getId());
    updatedDTO.setName(user.getName());
    updatedDTO.setEmail(user.getEmail());
    updatedDTO.setRole(user.getRole());
    updatedDTO.setPassword(customer.getPassword());
    updatedDTO.setType(customer.getType());
    updatedDTO.setAddress(customer.getAddress());
    updatedDTO.setPhone(customer.getPhone());
    updatedDTO.setStatus(customer.getStatus());
    
    return updatedDTO;
}

}