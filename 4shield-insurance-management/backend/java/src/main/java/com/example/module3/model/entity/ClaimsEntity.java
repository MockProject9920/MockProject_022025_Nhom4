package com.example.module3.model.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import java.math.BigDecimal;
import java.time.LocalDate;

@Getter
@Setter
@Entity
@Table(name = "claims")
public class ClaimsEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @ManyToOne
    @JoinColumn(name = "policy_contract_id", nullable = false)
    private PolicyContractsEntity policyContract;

    @Column(name = "claim_date", nullable = false)
    private LocalDate claimDate;

    @Column(name = "incident_date", nullable = false)
    private LocalDate incidentDate;

    @Column(name = "claim_type", nullable = false, length = 50)
    private String claimType;

    @Column(name = "status", nullable = false, length = 50)
    private String status;

    @Column(name = "incident_description", columnDefinition = "TEXT")
    private String incidentDescription;

    @Column(name = "incident_type", length = 255)
    private String incidentType;

    @Column(name = "claim_amount", nullable = false, precision = 15, scale = 2)
    private BigDecimal claimAmount;

    @Column(name = "attachment", columnDefinition = "TEXT")
    private String attachment;

    @Column(name = "settlement_date")
    private LocalDate settlementDate;

    @Column(name = "settlement_amount", precision = 15, scale = 2)
    private BigDecimal settlementAmount;

    @Column(name = "investigation_details", columnDefinition = "TEXT")
    private String investigationDetails;

    @Column(name = "manager_comment", length = 450)
    private String managerComment;

    @ManyToOne
    @JoinColumn(name = "customer_id", nullable = false)
    private CustomerEntity customer;
}