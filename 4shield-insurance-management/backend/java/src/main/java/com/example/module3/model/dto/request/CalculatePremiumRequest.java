package com.example.module3.model.dto.request;

import lombok.*;
import java.math.BigDecimal;
import java.time.LocalDate;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class CalculatePremiumRequest {
    private Long policyId;
    private BigDecimal amount;
    private LocalDate dueDate;
}
