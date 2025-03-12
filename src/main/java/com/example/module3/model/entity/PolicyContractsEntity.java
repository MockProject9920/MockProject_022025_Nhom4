package com.example.module3.model.entity;

import jakarta.persistence.*;

import java.math.BigDecimal;
import java.sql.Date;
import java.util.Objects;

@Entity
@Table(name = "policy_contracts", schema = "bds", catalog = "")
public class PolicyContractsEntity {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "id")
    private Long id;
    @Basic
    @Column(name = "customer_id")
    private Long customerId;
    @Basic
    @Column(name = "user_id")
    private Long userId;
    @Basic
    @Column(name = "property_details")
    private String propertyDetails;
    @Basic
    @Column(name = "premium_code")
    private String premiumCode;
    @Basic
    @Column(name = "insurance_product_id")
    private Long insuranceProductId;
    @Basic
    @Column(name = "coverage_amount")
    private BigDecimal coverageAmount;
    @Basic
    @Column(name = "policy_start_date")
    private Date policyStartDate;
    @Basic
    @Column(name = "policy_end_date")
    private Date policyEndDate;
    @Basic
    @Column(name = "frequency")
    private String frequency;
    @Basic
    @Column(name = "payment_schedule")
    private String paymentSchedule;
    @Basic
    @Column(name = "exclusions")
    private String exclusions;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getCustomerId() {
        return customerId;
    }

    public void setCustomerId(Long customerId) {
        this.customerId = customerId;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public String getPropertyDetails() {
        return propertyDetails;
    }

    public void setPropertyDetails(String propertyDetails) {
        this.propertyDetails = propertyDetails;
    }

    public String getPremiumCode() {
        return premiumCode;
    }

    public void setPremiumCode(String premiumCode) {
        this.premiumCode = premiumCode;
    }

    public Long getInsuranceProductId() {
        return insuranceProductId;
    }

    public void setInsuranceProductId(Long insuranceProductId) {
        this.insuranceProductId = insuranceProductId;
    }

    public BigDecimal getCoverageAmount() {
        return coverageAmount;
    }

    public void setCoverageAmount(BigDecimal coverageAmount) {
        this.coverageAmount = coverageAmount;
    }

    public Date getPolicyStartDate() {
        return policyStartDate;
    }

    public void setPolicyStartDate(Date policyStartDate) {
        this.policyStartDate = policyStartDate;
    }

    public Date getPolicyEndDate() {
        return policyEndDate;
    }

    public void setPolicyEndDate(Date policyEndDate) {
        this.policyEndDate = policyEndDate;
    }

    public String getFrequency() {
        return frequency;
    }

    public void setFrequency(String frequency) {
        this.frequency = frequency;
    }

    public String getPaymentSchedule() {
        return paymentSchedule;
    }

    public void setPaymentSchedule(String paymentSchedule) {
        this.paymentSchedule = paymentSchedule;
    }

    public String getExclusions() {
        return exclusions;
    }

    public void setExclusions(String exclusions) {
        this.exclusions = exclusions;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        PolicyContractsEntity that = (PolicyContractsEntity) o;
        return Objects.equals(id, that.id) && Objects.equals(customerId, that.customerId) && Objects.equals(userId, that.userId) && Objects.equals(propertyDetails, that.propertyDetails) && Objects.equals(premiumCode, that.premiumCode) && Objects.equals(insuranceProductId, that.insuranceProductId) && Objects.equals(coverageAmount, that.coverageAmount) && Objects.equals(policyStartDate, that.policyStartDate) && Objects.equals(policyEndDate, that.policyEndDate) && Objects.equals(frequency, that.frequency) && Objects.equals(paymentSchedule, that.paymentSchedule) && Objects.equals(exclusions, that.exclusions);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, customerId, userId, propertyDetails, premiumCode, insuranceProductId, coverageAmount, policyStartDate, policyEndDate, frequency, paymentSchedule, exclusions);
    }
}
