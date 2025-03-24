package com.example.module3.model.dto.request;


import com.example.module3.model.entity.PropertiesEntity;
import lombok.Data;

import java.math.BigDecimal;

@Data
public class PropertiesDto {
        private String type;
        private String address;
        private String city;
        private String state;
        private String zipCode;
        private String country;
        private int yearBuilt;
        private BigDecimal lotSizeSqft;
        private BigDecimal livingAreaSqft;
        private int bedrooms;
        private BigDecimal bathrooms;
        private byte attachedGarage;
        private String additionalFeatures;
        private String recentRenovations;
        private BigDecimal estimatedValue;
        private String status;

        public PropertiesEntity convertToEntity() {
            PropertiesEntity entity = new PropertiesEntity();
            entity.setType(this.type);
            entity.setAddress(this.address);
            entity.setCity(this.city);
            entity.setState(this.state);
            entity.setZipCode(this.zipCode);
            entity.setCountry(this.country);
            entity.setYearBuilt(this.yearBuilt);
            entity.setLotSizeSqft(this.lotSizeSqft);
            entity.setLivingAreaSqft(this.livingAreaSqft);
            entity.setBedrooms(this.bedrooms);
            entity.setBathrooms(this.bathrooms);
            entity.setAttachedGarage(this.attachedGarage);
            entity.setAdditionalFeatures(this.additionalFeatures);
            entity.setRecentRenovations(this.recentRenovations);
            entity.setEstimatedValue(this.estimatedValue);
            entity.setStatus(this.status);
            return entity;
        }

        // Getters and Setters

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public String getZipCode() {
        return zipCode;
    }

    public void setZipCode(String zipCode) {
        this.zipCode = zipCode;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public int getYearBuilt() {
        return yearBuilt;
    }

    public void setYearBuilt(int yearBuilt) {
        this.yearBuilt = yearBuilt;
    }

    public BigDecimal getLotSizeSqft() {
        return lotSizeSqft;
    }

    public void setLotSizeSqft(BigDecimal lotSizeSqft) {
        this.lotSizeSqft = lotSizeSqft;
    }

    public BigDecimal getLivingAreaSqft() {
        return livingAreaSqft;
    }

    public void setLivingAreaSqft(BigDecimal livingAreaSqft) {
        this.livingAreaSqft = livingAreaSqft;
    }

    public int getBedrooms() {
        return bedrooms;
    }

    public void setBedrooms(int bedrooms) {
        this.bedrooms = bedrooms;
    }

    public BigDecimal getBathrooms() {
        return bathrooms;
    }

    public void setBathrooms(BigDecimal bathrooms) {
        this.bathrooms = bathrooms;
    }

    public byte getAttachedGarage() {
        return attachedGarage;
    }

    public void setAttachedGarage(byte attachedGarage) {
        this.attachedGarage = attachedGarage;
    }

    public String getAdditionalFeatures() {
        return additionalFeatures;
    }

    public void setAdditionalFeatures(String additionalFeatures) {
        this.additionalFeatures = additionalFeatures;
    }

    public String getRecentRenovations() {
        return recentRenovations;
    }

    public void setRecentRenovations(String recentRenovations) {
        this.recentRenovations = recentRenovations;
    }

    public BigDecimal getEstimatedValue() {
        return estimatedValue;
    }

    public void setEstimatedValue(BigDecimal estimatedValue) {
        this.estimatedValue = estimatedValue;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}

