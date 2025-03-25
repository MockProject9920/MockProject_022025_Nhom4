package com.company.insurance.service.auth;

import com.company.insurance.model.auth.User;
import com.company.insurance.repository.auth.UserRepository;
import org.springframework.stereotype.Service;
import java.time.LocalDate;
import java.util.List;
import java.util.Optional;
public class AuthService {
    private final UserRepository userRepository;

    public AuthService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public List<User> getAllNonCustomerUsers() {
        return userRepository.findByRoleNot("Customer");
    }
}
