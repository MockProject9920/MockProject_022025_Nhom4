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

    private final UserRepository userRepository;
    private final CustomerRepository customerRepository;

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
        validateCustomerDTO(customerDTO);
    
        // Tạo và lưu đối tượng User
        User user = new User();
        user.setName(customerDTO.getName());
        user.setEmail(customerDTO.getEmail());
        user.setRole("Customer");
        user.setMemberSince(LocalDate.now());
        user = userRepository.save(user);
    
        // Tạo và lưu đối tượng Customer
        Customer customer = new Customer();
        customer.setName(customerDTO.getName());  // Thêm dòng này để set tên cho Customer
        customer.setEmail(customerDTO.getEmail());
        customer.setPassword(customerDTO.getPassword());
        customer.setType(customerDTO.getType());
        customer.setAddress(customerDTO.getAddress());
        customer.setPhone(customerDTO.getPhone());
        customer.setStatus(customerDTO.getStatus());
        customer.setDateOfBirth(customerDTO.getDateOfBirth());
        customer.setGender(customerDTO.getGender());
        customer.setHouseNumber(customerDTO.getHouseNumber());
        customer.setZipcode(customerDTO.getZipcode());
        customer.setIdNumber(customerDTO.getIdNumber());
        customer.setUser(user);
        customer = customerRepository.save(customer);
    
        // Liên kết User với Customer và cập nhật lại User
        user.setCustomer(customer);
        userRepository.save(user);
    
        // Ánh xạ dữ liệu đã lưu sang DTO
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
        createdDTO.setDateOfBirth(customer.getDateOfBirth());
        createdDTO.setGender(customer.getGender());
        createdDTO.setHouseNumber(customer.getHouseNumber());
        createdDTO.setZipcode(customer.getZipcode());
        createdDTO.setIdNumber(customer.getIdNumber());
    
        return createdDTO;
    }
    

    private void validateCustomerDTO(CustomerDTO customerDTO) {
        if (customerDTO.getName() == null || customerDTO.getName().isEmpty()) {
            throw new IllegalArgumentException("Customer name cannot be empty");
        }
        if (customerDTO.getEmail() == null || customerDTO.getEmail().isEmpty()) {
            throw new IllegalArgumentException("Email cannot be empty");
        }
        if (customerDTO.getPassword() == null || customerDTO.getPassword().isEmpty()) {
            throw new IllegalArgumentException("Password cannot be empty");
        }
        if (customerDTO.getType() == null || customerDTO.getType().isEmpty()) {
            throw new IllegalArgumentException("Customer type cannot be empty");
        }
        if (customerDTO.getAddress() == null || customerDTO.getAddress().isEmpty()) {
            throw new IllegalArgumentException("Address cannot be empty");
        }
        if (customerDTO.getPhone() == null || customerDTO.getPhone().isEmpty()) {
            throw new IllegalArgumentException("Phone number cannot be empty");
        }
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

        // Update User fields
        user.setName(customerDTO.getName());
        user = userRepository.save(user);

        // Update associated Customer
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
        customer.setDateOfBirth(customerDTO.getDateOfBirth());
        customer.setGender(customerDTO.getGender());
        customer.setHouseNumber(customerDTO.getHouseNumber());
        customer.setZipcode(customerDTO.getZipcode());
        customer.setIdNumber(customerDTO.getIdNumber());
        customer = customerRepository.save(customer);

        // Map updated data to DTO
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
        updatedDTO.setDateOfBirth(customer.getDateOfBirth());
        updatedDTO.setGender(customer.getGender());
        updatedDTO.setHouseNumber(customer.getHouseNumber());
        updatedDTO.setZipcode(customer.getZipcode());
        updatedDTO.setIdNumber(customer.getIdNumber());

        return updatedDTO;
    }
}
