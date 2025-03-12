package com.example.module3.model.entity;

import jakarta.persistence.*;

import java.math.BigDecimal;
import java.util.Objects;

@Entity
@Table(name = "premium", schema = "bds", catalog = "")
public class PremiumEntity {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "id")
    private Long id;
    @Basic
    @Column(name = "insurance_product_id")
    private Long insuranceProductId;
    @Basic
    @Column(name = "product_name")
    private String productName;
    @Basic
    @Column(name = "insurance_type")
    private String insuranceType;
    @Basic
    @Column(name = "effective_date")
    private String effectiveDate;
    @Basic
    @Column(name = "state")
    private String state;
    @Basic
    @Column(name = "country")
    private String country;
    @Basic
    @Column(name = "rate_from")
    private BigDecimal rateFrom;
    @Basic
    @Column(name = "rate_to")
    private BigDecimal rateTo;
    @Basic
    @Column(name = "amount")
    private BigDecimal amount;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getInsuranceProductId() {
        return insuranceProductId;
    }

    public void setInsuranceProductId(Long insuranceProductId) {
        this.insuranceProductId = insuranceProductId;
    }

    public String getProductName() {
        return productName;
    }

    public void setProductName(String productName) {
        this.productName = productName;
    }

    public String getInsuranceType() {
        return insuranceType;
    }

    public void setInsuranceType(String insuranceType) {
        this.insuranceType = insuranceType;
    }

    public String getEffectiveDate() {
        return effectiveDate;
    }

    public void setEffectiveDate(String effectiveDate) {
        this.effectiveDate = effectiveDate;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public BigDecimal getRateFrom() {
        return rateFrom;
    }

    public void setRateFrom(BigDecimal rateFrom) {
        this.rateFrom = rateFrom;
    }

    public BigDecimal getRateTo() {
        return rateTo;
    }

    public void setRateTo(BigDecimal rateTo) {
        this.rateTo = rateTo;
    }

    public BigDecimal getAmount() {
        return amount;
    }

    public void setAmount(BigDecimal amount) {
        this.amount = amount;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        PremiumEntity that = (PremiumEntity) o;
        return Objects.equals(id, that.id) && Objects.equals(insuranceProductId, that.insuranceProductId) && Objects.equals(productName, that.productName) && Objects.equals(insuranceType, that.insuranceType) && Objects.equals(effectiveDate, that.effectiveDate) && Objects.equals(state, that.state) && Objects.equals(country, that.country) && Objects.equals(rateFrom, that.rateFrom) && Objects.equals(rateTo, that.rateTo) && Objects.equals(amount, that.amount);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, insuranceProductId, productName, insuranceType, effectiveDate, state, country, rateFrom, rateTo, amount);
    }
}
