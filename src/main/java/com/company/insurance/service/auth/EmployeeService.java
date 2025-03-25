package com.company.insurance.service.auth;

import com.company.insurance.dto.auth.EmployeeDTO;
import com.company.insurance.model.auth.User;
import com.company.insurance.repository.auth.UserRepository;
import com.company.insurance.dto.auth.EmployeeDTO;
import org.springframework.stereotype.Service;
import java.time.LocalDate;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
@Service
public class EmployeeService {
    private final UserRepository employeeRepository;

    public EmployeeService(UserRepository employeeRepository) {
        this.employeeRepository = employeeRepository;
    }

    public List<EmployeeDTO> getAllNonCustomerEmployees() {
        return employeeRepository.findByRoleNot("Customer")
                .stream()
                .map(employee -> new EmployeeDTO(
                        employee.getEmail(),
                        employee.getName(),
                        employee.getRole(),
                        employee.getMemberSince()
                ))
                .collect(Collectors.toList());
    }

    public void deleteEmployeeByEmail(String email) {
        Optional<User> userOptional = employeeRepository.findByEmail(email);
        if(userOptional.isPresent()) {
            User user = userOptional.get();
            if("Customer".equalsIgnoreCase(user.getRole())) {
                throw new IllegalArgumentException("Email này thuộc về Customer, không phải Employee.");
            }
            employeeRepository.delete(user);
        } else {
            throw new IllegalArgumentException("Không tìm thấy Employee với email: " + email);
        }
    }
}
