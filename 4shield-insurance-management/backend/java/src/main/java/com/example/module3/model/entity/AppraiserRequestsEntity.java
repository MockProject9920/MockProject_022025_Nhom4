package com.example.module3.model.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import java.time.LocalDateTime;

@Getter
@Setter
@Entity
@Table(name = "appraiser_requests")
public class AppraiserRequestsEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @ManyToOne
    @JoinColumn(name = "appraiser_id", nullable = false)
    private AppraisersEntity appraiser;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private UsersEntity user;

    @ManyToOne
    @JoinColumn(name = "property_id", nullable = false)
    private PropertiesEntity property;

    @ManyToOne
    @JoinColumn(name = "customer_id", nullable = false)
    private CustomerEntity customer;

    @Column(name = "request_type", nullable = false)
    private String requestType;

    @Column(name = "number", nullable = false)
    private Integer number;

    @Column(name = "created_at", nullable = false)
    private LocalDateTime createdAt;

    @Column(name = "assigned_to")
    private String assignedTo;

    @Column(name = "status", nullable = false)
    private String status;

}