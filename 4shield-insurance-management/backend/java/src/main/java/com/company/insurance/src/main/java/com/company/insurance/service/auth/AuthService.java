package com.company.insurance.service.auth;

import com.company.insurance.dto.auth.CustomerDTO;
import com.company.insurance.exception.UserAlreadyExistsException;
import com.company.insurance.mapper.CustomerMapper;
import com.company.insurance.model.auth.Customer;
import com.company.insurance.repository.auth.CustomerRepository;
import com.company.insurance.util.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthService {

    @Autowired
    private CustomerRepository customerRepository;

    @Autowired
    private CustomerMapper customerMapper;

    @Autowired
    private JwtUtil jwtUtil;

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private PasswordEncoder passwordEncoder;

    /**
     * Registers a new customer if the email is not already in use.
     *
     * @param customerDTO The customer DTO to be registered
     * @return The registered customer as a DTO
     * @throws UserAlreadyExistsException If the email is already in use
     */
    public CustomerDTO register(CustomerDTO customerDTO) {
        if (customerRepository.existsByEmail(customerDTO.getEmail())) {
            throw new UserAlreadyExistsException("Email '" + customerDTO.getEmail() + "' is already in use.");
        }

        // Format the name before saving
        customerDTO.setName(formatName(customerDTO.getName()));

        // Hash the password using the password encoder
        customerDTO.setPassword(passwordEncoder.encode(customerDTO.getPassword()));

        // Map DTO to entity and save it
        Customer customer = customerMapper.toEntity(customerDTO);
        Customer savedCustomer = customerRepository.save(customer);

        // Return the saved customer as a DTO
        return customerMapper.toDTO(savedCustomer);
    }

    /**
     * Authenticates a customer and generates a JWT if successful.
     *
     * @param request The authentication request containing email and password
     * @return The authentication response containing the JWT token
     */
    public AuthResponse authenticate(AuthRequest request) {
        try {
            Authentication authentication = authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword())
            );

            UserDetails userDetails = (UserDetails) authentication.getPrincipal();
            String jwtToken = jwtUtil.generateToken(userDetails);

            return new AuthResponse(jwtToken);
        } catch (Exception e) {
            throw new RuntimeException("Invalid email or password.");
        }
    }
    /**
     * Formats the name by trimming whitespace and capitalizing the first letter of each word.
     * Example:
     * Input: " john  doe  "
     * Output: "John Doe"
     *
     * @param name The original name string to be formatted.
     * @return A properly formatted name string.
     */
    private String formatName(String name) {
        if (name == null || name.isBlank()) {
            return name; // Return the original name if it's null or empty
        }

        // Remove leading and trailing spaces
        name = name.trim();

        // Split name by one or more whitespace characters
        String[] words = name.split("\\s+");
        StringBuilder formattedName = new StringBuilder();

        // Capitalize the first letter of each word and convert the rest to lowercase
        for (String word : words) {
            if (!word.isEmpty()) {
                formattedName.append(Character.toUpperCase(word.charAt(0)))  // Capitalize the first character
                        .append(word.substring(1).toLowerCase())         // Convert the rest to lowercase
                        .append(" ");                                    // Add a space after each word
            }
        }
        // Remove the trailing space and return the result
        return formattedName.toString().trim();
    }
}
