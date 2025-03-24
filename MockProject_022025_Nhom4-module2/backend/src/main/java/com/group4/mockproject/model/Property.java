package com.group4.mockproject.model;

import jakarta.persistence.*;
import lombok.Data;

import java.math.BigDecimal;

@Entity
@Table(name = "properties")
@Data
public class Property {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "property_id")
    private Long id;

    //SC_103
    @Column(nullable = false) // Bắt buộc phải có customerId
    private Long customerId;
    
    @Column(name = "type", nullable = false)
    private String type;

    @Column(name = "address", nullable = false, columnDefinition = "TEXT")
    private String address;

    @Column(name = "city", nullable = false, length = 50)
    private String city;

    @Column(name = "state", nullable = false, length = 50)
    private String state;

    @Column(name = "zip_code", nullable = false, length = 10)
    private String zipCode;

    @Column(name = "country", nullable = false, length = 50)
    private String country;

    @Column(name = "year_built", nullable = false)
    private Integer yearBuilt;

    @Column(name = "lot_size_sqft")
    private BigDecimal lotSizeSqft;

    @Column(name = "living_area_sqft", nullable = false)
    private BigDecimal livingAreaSqft;

    @Column(name = "bedrooms", nullable = false)
    private Integer bedrooms;

    @Column(name = "bathrooms", nullable = false)
    private BigDecimal bathrooms;

    @Column(name = "attached_garage", nullable = false)
    private Boolean attachedGarage;

    @Column(name = "additional_features", columnDefinition = "TEXT")
    private String additionalFeatures;

    @Column(name = "recent_renovations", columnDefinition = "TEXT")
    private String recentRenovations;

    @Column(name = "estimated_value", nullable = false)
    private BigDecimal estimatedValue;

    @Column(name = "status", nullable = false, length = 50)
    private String status;
}
