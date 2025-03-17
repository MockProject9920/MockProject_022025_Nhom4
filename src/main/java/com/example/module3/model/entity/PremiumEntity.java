package com.example.module3.model.entity;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import java.math.BigDecimal;
import java.time.LocalDate;

@Entity
@Table(name = "premium", schema = "bds", catalog = "")
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class PremiumEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "insurance_product_id", nullable = false)
    private InsuranceProductsEntity insuranceProduct;

    @Column(name = "premium_name", nullable = false)
    private String premiumName;

    @Column(name = "insurance_type", nullable = false)
    private String insuranceType;

    @Column(name = "effective_date", nullable = false)
    private LocalDate effectiveDate;

    @Column(name = "state", nullable = false)
    private String state;

    @Column(name = "country", nullable = false)
    private String country;

    @Column(name = "rate_from", nullable = false)
    private BigDecimal rateFrom;

    @Column(name = "rate_to", nullable = false)
    private BigDecimal rateTo;

    @Column(name = "amount", nullable = false)
    private BigDecimal amount;

    @ManyToOne
    @JoinColumn(name = "policy_id", nullable = true)
    @OnDelete(action = OnDeleteAction.SET_NULL)
    private PolicyContractsEntity policy;
}