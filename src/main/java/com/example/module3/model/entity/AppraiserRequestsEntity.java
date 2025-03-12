package com.example.module3.model.entity;

import jakarta.persistence.*;

import java.sql.Timestamp;
import java.util.Objects;

@Entity
@Table(name = "appraiser_requests", schema = "bds", catalog = "")
public class AppraiserRequestsEntity {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "id")
    private Long id;
    @Basic
    @Column(name = "appraiser_id")
    private Long appraiserId;
    @Basic
    @Column(name = "user_id")
    private Long userId;
    @Basic
    @Column(name = "property_id")
    private Long propertyId;
    @Basic
    @Column(name = "client_id")
    private Long clientId;
    @Basic
    @Column(name = "number")
    private int number;
    @Basic
    @Column(name = "created_at")
    private Timestamp createdAt;
    @Basic
    @Column(name = "assigned_to")
    private String assignedTo;
    @Basic
    @Column(name = "status")
    private String status;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getAppraiserId() {
        return appraiserId;
    }

    public void setAppraiserId(Long appraiserId) {
        this.appraiserId = appraiserId;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public Long getPropertyId() {
        return propertyId;
    }

    public void setPropertyId(Long propertyId) {
        this.propertyId = propertyId;
    }

    public Long getClientId() {
        return clientId;
    }

    public void setClientId(Long clientId) {
        this.clientId = clientId;
    }

    public int getNumber() {
        return number;
    }

    public void setNumber(int number) {
        this.number = number;
    }

    public Timestamp getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(Timestamp createdAt) {
        this.createdAt = createdAt;
    }

    public String getAssignedTo() {
        return assignedTo;
    }

    public void setAssignedTo(String assignedTo) {
        this.assignedTo = assignedTo;
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
        AppraiserRequestsEntity that = (AppraiserRequestsEntity) o;
        return number == that.number && Objects.equals(id, that.id) && Objects.equals(appraiserId, that.appraiserId) && Objects.equals(userId, that.userId) && Objects.equals(propertyId, that.propertyId) && Objects.equals(clientId, that.clientId) && Objects.equals(createdAt, that.createdAt) && Objects.equals(assignedTo, that.assignedTo) && Objects.equals(status, that.status);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, appraiserId, userId, propertyId, clientId, number, createdAt, assignedTo, status);
    }
}
