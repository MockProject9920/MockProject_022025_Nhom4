package com.group4.mockproject.dto.request;

import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class CreateProperty {
    @NotNull(message = "type is required !")
    private String type;

    @NotNull(message = "address is required !")
    private String address;

    @NotNull(message = "city is required !")
    private String city;

    @NotNull(message = "state is required !")
    private String state;

    @NotNull(message = "zipCode is required !")
    private String zipCode;

    @NotNull(message = "country is required !")
    private String country;

    @NotNull(message = "yearBuilt is required !")
    private Integer yearBuilt;

    @NotNull(message = "lotSizeSqft is required !")
    private BigDecimal lotSizeSqft;

    @NotNull(message = "livingAreaSqft is required !")
    private BigDecimal livingAreaSqft;

    @NotNull(message = "bedrooms is required !")
    private Integer bedrooms;

    @NotNull(message = "bathrooms is required !")
    private BigDecimal bathrooms;

    @NotNull(message = "attachedGarage is required !")
    private Boolean attachedGarage;

    @NotNull(message = "additionalFeatures is required !")
    private String additionalFeatures;

    @NotNull(message = "recentRenovations is required !")
    private String recentRenovations;

    @NotNull(message = "estimatedValue is required !")
    private BigDecimal estimatedValue;

    @NotNull(message = "status is required !")
    private String status;

    //SC_103
    @NotNull(message = "customerId is required !") // Thêm trường này
    private Long customerId;
}
