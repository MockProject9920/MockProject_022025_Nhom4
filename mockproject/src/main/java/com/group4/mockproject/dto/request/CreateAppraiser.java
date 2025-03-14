package com.group4.mockproject.dto.request;

import jakarta.persistence.Column;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

@Data
public class CreateAppraiser {
    @NotNull(message = "name is required!")
    private String name;

    @NotNull(message = "email is required!")
    @Email
    private String email;

    @NotNull(message = "phone is required!")
    private String phone;

    @NotNull(message = "status is required!")
    private String status;

    @NotNull(message = "type is required!")
    private String type;

    @NotNull(message = "companyName is required!")
    private String companyName;

    @NotNull(message = "taxNumber is required!")
    private String taxNumber;

    @NotNull(message = "experience is required!")
    private Integer experience;

    @NotNull(message = "address is required!")
    private String address;
}
