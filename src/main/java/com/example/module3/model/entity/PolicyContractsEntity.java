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

    @ManyToOne
    @JoinColumn(name = "customer_id", nullable = false)
    private CustomerEntity customer;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private UsersEntity user;

    @Column(name = "property_details", nullable = false)
    private String propertyDetails;

    @ManyToOne
    @JoinColumn(name = "premium_code", nullable = false)
    private PremiumEntity premium;

    @ManyToOne
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

    @Column(name = "exclusions", nullable = false)
    private String exclusions;

    @OneToMany(mappedBy = "policy", cascade = CascadeType.ALL)
    private List<PremiumEntity> premiums;
}