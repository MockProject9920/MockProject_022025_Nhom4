package com.example.module3.model.entity;

import jakarta.persistence.*;

import java.math.BigDecimal;
import java.util.Objects;

@Entity
@Table(name = "properties", schema = "bds", catalog = "")
public class PropertiesEntity {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "property_id")
    private Long propertyId;
    @Basic
    @Column(name = "type")
    private String type;
    @Basic
    @Column(name = "address")
    private String address;
    @Basic
    @Column(name = "city")
    private String city;
    @Basic
    @Column(name = "state")
    private String state;
    @Basic
    @Column(name = "zip_code")
    private String zipCode;
    @Basic
    @Column(name = "country")
    private String country;
    @Basic
    @Column(name = "year_built")
    private int yearBuilt;
    @Basic
    @Column(name = "lot_size_sqft")
    private BigDecimal lotSizeSqft;
    @Basic
    @Column(name = "living_area_sqft")
    private BigDecimal livingAreaSqft;
    @Basic
    @Column(name = "bedrooms")
    private int bedrooms;
    @Basic
    @Column(name = "bathrooms")
    private BigDecimal bathrooms;
    @Basic
    @Column(name = "attached_garage")
    private byte attachedGarage;
    @Basic
    @Column(name = "additional_features")
    private String additionalFeatures;
    @Basic
    @Column(name = "recent_renovations")
    private String recentRenovations;
    @Basic
    @Column(name = "estimated_value")
    private BigDecimal estimatedValue;
    @Basic
    @Column(name = "status")
    private String status;

    public Long getPropertyId() {
        return propertyId;
    }

    public void setPropertyId(Long propertyId) {
        this.propertyId = propertyId;
    }

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

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        PropertiesEntity that = (PropertiesEntity) o;
        return yearBuilt == that.yearBuilt && bedrooms == that.bedrooms && attachedGarage == that.attachedGarage && Objects.equals(propertyId, that.propertyId) && Objects.equals(type, that.type) && Objects.equals(address, that.address) && Objects.equals(city, that.city) && Objects.equals(state, that.state) && Objects.equals(zipCode, that.zipCode) && Objects.equals(country, that.country) && Objects.equals(lotSizeSqft, that.lotSizeSqft) && Objects.equals(livingAreaSqft, that.livingAreaSqft) && Objects.equals(bathrooms, that.bathrooms) && Objects.equals(additionalFeatures, that.additionalFeatures) && Objects.equals(recentRenovations, that.recentRenovations) && Objects.equals(estimatedValue, that.estimatedValue) && Objects.equals(status, that.status);
    }

    @Override
    public int hashCode() {
        return Objects.hash(propertyId, type, address, city, state, zipCode, country, yearBuilt, lotSizeSqft, livingAreaSqft, bedrooms, bathrooms, attachedGarage, additionalFeatures, recentRenovations, estimatedValue, status);
    }
}
