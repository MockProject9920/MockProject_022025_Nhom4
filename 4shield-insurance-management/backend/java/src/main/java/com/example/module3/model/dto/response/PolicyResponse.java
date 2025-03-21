package com.example.module3.model.dto.response;

import com.example.module3.model.entity.PolicyContractsEntity;
import com.example.module3.model.entity.PremiumEntity;
import lombok.*;
import java.math.BigDecimal;
import java.time.LocalDate;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class PolicyResponse {
    private Long id;
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
    public PolicyResponse(PolicyContractsEntity contract) {
        this.id = contract.getId();
        this.customerId = contract.getCustomer().getId();
        this.userId = contract.getUser().getId();
        this.premiumId = contract.getPremium().getId();
        this.propertyId = contract.getProperty().getPropertyId();
        this.insuranceProductId = contract.getInsuranceProduct().getId();
        this.coverageAmount = contract.getCoverageAmount();
        this.policyStartDate = contract.getPolicyStartDate();
        this.policyEndDate = contract.getPolicyEndDate();
        this.frequency = contract.getFrequency();
        this.paymentSchedule = contract.getPaymentSchedule();
        this.exclusions = contract.getExclusions();
    }
}

