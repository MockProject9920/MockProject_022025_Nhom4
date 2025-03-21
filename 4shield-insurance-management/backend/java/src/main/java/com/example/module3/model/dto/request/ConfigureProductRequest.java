package com.example.module3.model.dto.request;

import lombok.*;
import java.math.BigDecimal;
import java.time.LocalDate;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ConfigureProductRequest {
    private String productName;
    private BigDecimal coverageAmount;
    private String paymentMethod;
    private Integer status;
}