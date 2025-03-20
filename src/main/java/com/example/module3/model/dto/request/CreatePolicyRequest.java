package com.example.module3.model.dto.request;


import lombok.*;
import java.math.BigDecimal;
import java.time.LocalDate;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class CreatePolicyRequest {
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
