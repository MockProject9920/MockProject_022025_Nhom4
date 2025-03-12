package com.example.module3.model.entity;

import jakarta.persistence.*;

import java.util.Objects;

@Entity
@Table(name = "claim_requests", schema = "bds", catalog = "")
public class ClaimRequestsEntity {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "id")
    private Long id;
    @Basic
    @Column(name = "user_id")
    private Long userId;
    @Basic
    @Column(name = "policy_contract_id")
    private Long policyContractId;
    @Basic
    @Column(name = "client_id")
    private Long clientId;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public Long getPolicyContractId() {
        return policyContractId;
    }

    public void setPolicyContractId(Long policyContractId) {
        this.policyContractId = policyContractId;
    }

    public Long getClientId() {
        return clientId;
    }

    public void setClientId(Long clientId) {
        this.clientId = clientId;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        ClaimRequestsEntity that = (ClaimRequestsEntity) o;
        return Objects.equals(id, that.id) && Objects.equals(userId, that.userId) && Objects.equals(policyContractId, that.policyContractId) && Objects.equals(clientId, that.clientId);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, userId, policyContractId, clientId);
    }
}
