package com.example.module3.model.entity;

import jakarta.persistence.*;
import lombok.*;

import java.math.BigDecimal;

@Entity
@Table(name = "insurance_products", schema = "bds", catalog = "")
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class InsuranceProductsEntity {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "id")
    private Long id;

    @Column(name = "product_name", nullable = false)
    private String productName;

    @Column(name = "insurance_type", nullable = false)
    private String insuranceType;

    @Column(name = "coverage_amount", nullable = false)
    private BigDecimal coverageAmount;

    @Column(name = "payment_method", nullable = false)
    private String paymentMethod;

    @Column(name = "status")
    private Integer status;
}