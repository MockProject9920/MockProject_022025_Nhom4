package com.example.module3.model.dto.response;

import lombok.*;
import java.math.BigDecimal;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ProductResponse {
    private Long id;
    private String productCode;
    private String productName;
    private String description;
    private BigDecimal basePremium;
}

