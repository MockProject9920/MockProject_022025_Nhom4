package com.example.module3.model.dto.request;

import com.example.module3.model.entity.InsuranceProductsEntity;
import lombok.Data;

import java.math.BigDecimal;

@Data
public class InsuranceProductsDto {
        private Long id;
        private String productName;
        private String insuranceType;
        private BigDecimal coverageAmount;
        private String paymentMethod;
        private byte status;

        public InsuranceProductsEntity convertToEntity() {
            InsuranceProductsEntity entity = new InsuranceProductsEntity();
            entity.setId(this.id);
            entity.setProductName(this.productName);
            entity.setInsuranceType(this.insuranceType);
            entity.setCoverageAmount(this.coverageAmount);
            entity.setPaymentMethod(this.paymentMethod);
            entity.setStatus(this.status);
            return entity;
        }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
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

    public BigDecimal getCoverageAmount() {
        return coverageAmount;
    }

    public void setCoverageAmount(BigDecimal coverageAmount) {
        this.coverageAmount = coverageAmount;
    }

    public String getPaymentMethod() {
        return paymentMethod;
    }

    public void setPaymentMethod(String paymentMethod) {
        this.paymentMethod = paymentMethod;
    }

    public byte getStatus() {
        return status;
    }

    public void setStatus(byte status) {
        this.status = status;
    }
}
