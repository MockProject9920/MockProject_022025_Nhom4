package com.example.module3.model.entity;

import jakarta.persistence.*;
import lombok.*;

import java.math.BigDecimal;

@Getter
@Setter
@Entity
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "properties", schema = "bds")
public class PropertiesEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "property_id")
    private Long propertyId;

    @Column(name = "type", nullable = false)
    private String type;

    @Column(name = "address", nullable = false)
    private String address;

    @Column(name = "city", nullable = false)
    private String city;

    @Column(name = "state", nullable = false)
    private String state;

    @Column(name = "zip_code", nullable = false)
    private String zipCode;

    @Column(name = "country", nullable = false)
    private String country;

    @Column(name = "year_built", nullable = false)
    private Integer yearBuilt;

    @Column(name = "lot_size_sqft", nullable = false)
    private BigDecimal lotSizeSqft;

    @Column(name = "living_area_sqft", nullable = false)
    private BigDecimal livingAreaSqft;

    @Column(name = "bedrooms", nullable = false)
    private Integer bedrooms;

    @Column(name = "bathrooms", nullable = false)
    private BigDecimal bathrooms;

    @Column(name = "attached_garage", nullable = false)
    private Boolean attachedGarage;

    @Column(name = "additional_features")
    private String additionalFeatures;

    @Column(name = "recent_renovations")
    private String recentRenovations;

    @Column(name = "estimated_value", nullable = false)
    private BigDecimal estimatedValue;

    @Column(name = "status", nullable = false)
    private String status;
}