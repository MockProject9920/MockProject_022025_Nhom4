package com.group4.mockproject.model;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Timestamp;
import java.util.List;

@Entity
@Table(name = "appraiser_requests")
@Data
@NoArgsConstructor
@AllArgsConstructor
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
public class AppraiserRequest {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "appraiser_id", nullable = false)
    private Long appraiserId;

    @Column(name = "user_id")
    private Long userId;

    @Column(name="request_type")
    private String requestType;

    @Column(name = "property_id", nullable = false)
    private Long propertyId;

    @Column(name = "client_id")
    private Long clientId;

    @Column(name = "number", nullable = false)
    private Integer number;

    @Column(name = "created_at")
    private Timestamp createdAt;

    @Column(name = "assigned_to", length = 100)
    private String assignedTo;

    @Column(name = "status", length = 50, nullable = false)
    private String status;

    // Quan hệ One-to-Many với AppraisalReport
    @OneToMany(mappedBy = "appraiserRequest", fetch = FetchType.LAZY)
    private List<AppraisalReport> appraisalReports;
}