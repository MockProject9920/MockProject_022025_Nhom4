package com.example.module3.model.entity;

import jakarta.persistence.*;

import java.math.BigDecimal;
import java.sql.Date;
import java.util.Objects;

@Entity
@Table(name = "claims", schema = "bds", catalog = "")
public class ClaimsEntity {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "id")
    private Long id;
    @Basic
    @Column(name = "policy_contract_id")
    private Long policyContractId;
    @Basic
    @Column(name = "claim_type")
    private String claimType;
    @Basic
    @Column(name = "incident_type")
    private String incidentType;
    @Basic
    @Column(name = "claim_date")
    private Date claimDate;
    @Basic
    @Column(name = "due_date")
    private Date dueDate;
    @Basic
    @Column(name = "incident_date")
    private Date incidentDate;
    @Basic
    @Column(name = "incident_description")
    private String incidentDescription;
    @Basic
    @Column(name = "claim_amount")
    private BigDecimal claimAmount;
    @Basic
    @Column(name = "status")
    private String status;
    @Basic
    @Column(name = "attachment")
    private String attachment;
    @Basic
    @Column(name = "settlement_amount")
    private BigDecimal settlementAmount;
    @Basic
    @Column(name = "settlement_date")
    private Date settlementDate;
    @Basic
    @Column(name = "investigation_details")
    private String investigationDetails;
    @Basic
    @Column(name = "user_id")
    private Long userId;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getPolicyContractId() {
        return policyContractId;
    }

    public void setPolicyContractId(Long policyContractId) {
        this.policyContractId = policyContractId;
    }

    public String getClaimType() {
        return claimType;
    }

    public void setClaimType(String claimType) {
        this.claimType = claimType;
    }

    public String getIncidentType() {
        return incidentType;
    }

    public void setIncidentType(String incidentType) {
        this.incidentType = incidentType;
    }

    public Date getClaimDate() {
        return claimDate;
    }

    public void setClaimDate(Date claimDate) {
        this.claimDate = claimDate;
    }

    public Date getDueDate() {
        return dueDate;
    }

    public void setDueDate(Date dueDate) {
        this.dueDate = dueDate;
    }

    public Date getIncidentDate() {
        return incidentDate;
    }

    public void setIncidentDate(Date incidentDate) {
        this.incidentDate = incidentDate;
    }

    public String getIncidentDescription() {
        return incidentDescription;
    }

    public void setIncidentDescription(String incidentDescription) {
        this.incidentDescription = incidentDescription;
    }

    public BigDecimal getClaimAmount() {
        return claimAmount;
    }

    public void setClaimAmount(BigDecimal claimAmount) {
        this.claimAmount = claimAmount;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getAttachment() {
        return attachment;
    }

    public void setAttachment(String attachment) {
        this.attachment = attachment;
    }

    public BigDecimal getSettlementAmount() {
        return settlementAmount;
    }

    public void setSettlementAmount(BigDecimal settlementAmount) {
        this.settlementAmount = settlementAmount;
    }

    public Date getSettlementDate() {
        return settlementDate;
    }

    public void setSettlementDate(Date settlementDate) {
        this.settlementDate = settlementDate;
    }

    public String getInvestigationDetails() {
        return investigationDetails;
    }

    public void setInvestigationDetails(String investigationDetails) {
        this.investigationDetails = investigationDetails;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        ClaimsEntity that = (ClaimsEntity) o;
        return Objects.equals(id, that.id) && Objects.equals(policyContractId, that.policyContractId) && Objects.equals(claimType, that.claimType) && Objects.equals(incidentType, that.incidentType) && Objects.equals(claimDate, that.claimDate) && Objects.equals(dueDate, that.dueDate) && Objects.equals(incidentDate, that.incidentDate) && Objects.equals(incidentDescription, that.incidentDescription) && Objects.equals(claimAmount, that.claimAmount) && Objects.equals(status, that.status) && Objects.equals(attachment, that.attachment) && Objects.equals(settlementAmount, that.settlementAmount) && Objects.equals(settlementDate, that.settlementDate) && Objects.equals(investigationDetails, that.investigationDetails) && Objects.equals(userId, that.userId);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, policyContractId, claimType, incidentType, claimDate, dueDate, incidentDate, incidentDescription, claimAmount, status, attachment, settlementAmount, settlementDate, investigationDetails, userId);
    }
}
