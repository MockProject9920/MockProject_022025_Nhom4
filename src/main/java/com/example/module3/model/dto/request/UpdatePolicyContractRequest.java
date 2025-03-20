package com.example.module3.model.dto.request;

import lombok.Data;

import java.math.BigDecimal;
import java.time.LocalDate;

@Data
public class UpdatePolicyContractRequest {
    private Long customerId;
    private Long userId;
    private Long premiumId;
    private Long propertyId;
    private Long insuranceProductId;
    private BigDecimal coverageAmount;
    private LocalDate policyStartDate;
    private LocalDate policyEndDate;
    private String frequency;
    private String paymentSchedule;
    private String exclusions;
}
