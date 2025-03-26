package com.company.insurance.service.auth;

import com.company.insurance.dto.auth.EmployeeDTO;
import com.company.insurance.model.auth.User;
import com.company.insurance.repository.auth.UserRepository;

import jakarta.transaction.Transactional;

import com.company.insurance.dto.auth.EmployeeDTO;
import org.springframework.stereotype.Service;
import java.time.LocalDate;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import org.springframework.beans.factory.annotation.Autowired;

@Service
public class EmployeeService {
    private final UserRepository userRepository;

    @Autowired 
    public EmployeeService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public List<EmployeeDTO> getAllEmployees() {
        return userRepository.findByRoleNot("Customer")
                .stream()
                .map(user -> new EmployeeDTO(
                        user.getEmail(),
                        user.getName(),
                        user.getRole(),
                        user.getMemberSince()
                ))
                .collect(Collectors.toList());
    }

    public Optional<EmployeeDTO> getEmployeeByEmail(String email) {
        return userRepository.findByEmail(email)
                .map(user -> new EmployeeDTO(user.getEmail(), user.getName(), user.getRole(), user.getMemberSince()));  
    }
    

    @Transactional
public void deleteEmployeeByEmail(String email) {
    Optional<User> userOptional = userRepository.findByEmail(email);
    if (userOptional.isPresent()) {
        User user = userOptional.get();
        if ("Customer".equalsIgnoreCase(user.getRole())) {
            throw new IllegalArgumentException("Email này thuộc về Customer, không phải Employee.");
        }
        // Xóa Customer trước nếu có
        userRepository.deleteCustomerByUserEmail(email);
        // Sau đó xóa User
        userRepository.deleteUserByEmail(email);
    } else {
        throw new IllegalArgumentException("Không tìm thấy Employee với email: " + email);
    }
}

}