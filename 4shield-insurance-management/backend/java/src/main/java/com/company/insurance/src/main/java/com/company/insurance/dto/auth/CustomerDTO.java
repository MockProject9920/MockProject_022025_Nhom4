package com.company.insurance.dto.auth;

import com.company.insurance.validation.ValidAge;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import jakarta.validation.constraints.*;
import java.time.LocalDate;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CustomerDTO {

    private Long id;

    @NotBlank(message = "Name is required")
    @Size(max = 100, message = "Name must not exceed 100 characters")
    private String name;

    @Pattern(regexp = "^(?![\\.])(?!.*\\.{2})[\\w\\.-]+@[\\w\\.-]+\\.[a-zA-Z]{2,}$",
            message = "Invalid email format")
    @Size(max = 100, message = "Email must not exceed 100 characters")
    private String email;

    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    @Pattern(regexp = "^(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$",
            message = "Password must contain at least one uppercase letter, one digit, and one special character")
    private String password;

    @NotBlank(message = "ID Number is required")
    @Pattern(
            regexp = "^(\\d{3}-\\d{2}-\\d{4})|(\\d{2}-\\d{7})$",
            message = "ID Number must follow the format XXX-XX-XXXX (SSN) or XX-XXXXXXX (EIN)"
    )
    private String idNumber;

    @NotBlank(message = "Phone number is required")
    @Pattern(
            regexp = "^\\+1[-\\s]?\\(?\\d{3}\\)?[-\\s]?\\d{3}[-\\s]?\\d{4}$",
            message = "Phone number must be a valid US number (e.g., +1-415-555-1234 or 415-555-1234)"
    )
    private String phone;

    @Pattern(regexp = "Small Business|Enterprise", message = "Type must be either 'Small Business' or 'Enterprise'")
    @Size(max = 50, message = "Type must not exceed 50 characters")
    private String type;

    @Pattern(regexp = "Active|Inactive", message = "Status must be either 'active' or 'inactive'")
    private String status;

    @ValidAge(message = "User must be at least 18 years old")
    @Past(message = "Date of birth must be in the past")
    private LocalDate dateOfBirth;

    @Pattern(regexp = "Male|Female|Other", message = "Gender must be 'Male', 'Female' or 'Other'")
    private String gender;

    @Pattern(regexp = "^[A-Za-z\\s]{1,100}$", message = "Country must only contain letters and spaces, and not exceed 100 characters")
    private String country;

    @Pattern(regexp = "^[A-Za-z\\s]{1,100}$", message = "State must only contain letters and spaces, and not exceed 100 characters")
    private String state;

    @Pattern(regexp = "^[A-Za-z\\s\\-]{1,100}$", message = "City must only contain letters, spaces, or hyphens, and not exceed 100 characters")
    private String city;

    @Pattern(regexp = "^\\d{5}(-\\d{4})?$", message = "ZIP code must be a valid US ZIP code (e.g., 12345 or 12345-6789)")
    private String zipCode;

    @Pattern(regexp = "^[0-9A-Za-z\\-\\s]{1,100}$", message = "House number must be a valid format and not exceed 100 characters")
    private String houseNumber;
}