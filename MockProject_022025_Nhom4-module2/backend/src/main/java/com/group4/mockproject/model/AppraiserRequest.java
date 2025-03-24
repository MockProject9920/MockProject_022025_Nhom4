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

    @ManyToOne
    @JoinColumn(name = "appraiser_id", nullable = false)
    private Appraiser appraiser;

    @Column(name = "user_id")
    private Long userId;

    @Column(name="request_type")
    private String requestType;

    @Column(name = "property_id", nullable = false)
    private Long propertyId;

    @Column(name = "customer_id")
    private Long customerId;

    @Column(name = "number", nullable = false)
    private Integer number;

    @Column(name = "created_at")
    private Timestamp createdAt;

    @Column(name = "assigned_to", length = 100)
    private String assignedTo;

    @Enumerated(EnumType.STRING)
    @Column(name = "status", length = 50)
    private AppraiserRequestStatus appraiserRequestStatus;

    @OneToMany(mappedBy = "appraiserRequest",fetch = FetchType.EAGER)
    private List<AppraisalReport> appraiserReports;
}