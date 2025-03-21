package com.example.module3.model.entity;

import jakarta.persistence.*;
import lombok.*;
import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.List;

@Entity
@Table(name = "policy_contracts", schema = "bds", catalog = "")
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class PolicyContractsEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "customer_id", nullable = false)
    private CustomerEntity customer;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", nullable = false)
    private UsersEntity user;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "premium_id")
    private PremiumEntity premium;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "property_id")
    private PropertiesEntity property;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "insurance_product_id", nullable = false)
    private InsuranceProductsEntity insuranceProduct;

    @Column(name = "coverage_amount", nullable = false)
    private BigDecimal coverageAmount;

    @Column(name = "policy_start_date", nullable = false)
    private LocalDate policyStartDate;

    @Column(name = "policy_end_date", nullable = false)
    private LocalDate policyEndDate;

    @Column(name = "frequency", nullable = false)
    private String frequency;

    @Column(name = "payment_schedule", nullable = false)
    private String paymentSchedule;

    @Column(name = "exclusions", nullable = false, columnDefinition = "TEXT")
    private String exclusions;

}