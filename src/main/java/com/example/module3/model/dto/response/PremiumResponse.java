package com.example.module3.model.dto.response;

import lombok.*;
import java.math.BigDecimal;
import java.time.LocalDate;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class PremiumResponse {
    private Long id;
    private String premiumName;
    private LocalDate effectiveDate;
    private String state;
    private String country;
    private BigDecimal rateFrom;
    private BigDecimal rateTo;
    private BigDecimal amount;
    private String policyContract;
}
