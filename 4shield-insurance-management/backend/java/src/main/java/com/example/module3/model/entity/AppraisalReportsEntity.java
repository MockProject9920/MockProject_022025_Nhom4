package com.example.module3.model.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "appraisal_reports")
public class AppraisalReportsEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @ManyToOne
    @JoinColumn(name = "policy_contract_id")
    private PolicyContractsEntity policyContract;

    @ManyToOne
    @JoinColumn(name = "claim_id")
    private ClaimsEntity claim;

    @ManyToOne
    @JoinColumn(name = "appraiser_request_id")
    private AppraiserRequestsEntity appraiserRequest;

    @Column(name = "appraisal_date", nullable = false)
    private String appraisalDate;

    @Column(name = "replacement_cost")
    private String replacementCost;

    @Column(name = "market_value")
    private String marketValue;

    @Column(name = "status", nullable = false)
    private String status;

    @Column(name = "comparison_sales")
    private String comparisonSales;

    @Column(name = "risk_level")
    private String riskLevel;

    @Column(name = "appraised_value")
    private String appraisedValue;

    @Column(name = "appraisal_method")
    private String appraisalMethod;

    @Column(name = "appraisal_factors", columnDefinition = "TEXT")
    private String appraisalFactors;

    @Column(name = "attachment")
    private String attachment;

    @Column(name = "purpose")
    private String purpose;
}