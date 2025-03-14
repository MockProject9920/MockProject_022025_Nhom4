package com.group4.mockproject.model;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "appraisal_reports")
@Data
@NoArgsConstructor
@AllArgsConstructor
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
public class AppraisalReport {

    @Id
    @Column(name = "id")
    private Long id;

    @Column(name = "policy_contract_id")
    private Long policyContractId;

    @Column(name = "claim_id")
    private Long claimId;

    @Column(name = "appraiser_request_id")
    private Long appraiserRequestId;

    @Column(name = "appraisal_date", length = 45)
    private String appraisalDate;

    @Column(name = "replacement_cost", length = 45)
    private String replacementCost;

    @Column(name = "market_value", length = 45)
    private String marketValue;

    @Column(name = "status", length = 45)
    private String status;

    @Column(name = "comparison_sales", length = 45)
    private String comparisonSales;

    @Column(name = "risk_level", length = 45)
    private String riskLevel;

    @Column(name = "appraised_value", length = 45)
    private String appraisedValue;

    @Column(name = "appraisal_method", length = 45)
    private String appraisalMethod;

    @Column(name = "appraisal_factors", length = 1000)
    private String appraisalFactors;

    @Column(name = "attachment", length = 45)
    private String attachment;

    @Column(name = "purpose", length = 45)
    private String purpose;

    // Quan hệ Many-to-One với AppraiserRequest
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "appraiser_request_id",
            referencedColumnName = "id",
            insertable = false,
            updatable = false)
    private AppraiserRequest appraiserRequest;
}