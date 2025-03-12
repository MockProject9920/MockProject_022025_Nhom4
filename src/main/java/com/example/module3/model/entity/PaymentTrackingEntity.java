package com.example.module3.model.entity;

import jakarta.persistence.*;

import java.math.BigDecimal;
import java.sql.Date;
import java.util.Objects;

@Entity
@Table(name = "payment_tracking", schema = "bds", catalog = "")
public class PaymentTrackingEntity {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "id")
    private Long id;
    @Basic
    @Column(name = "policy_contract_id")
    private Long policyContractId;
    @Basic
    @Column(name = "claim_id")
    private Long claimId;
    @Basic
    @Column(name = "due_date")
    private Date dueDate;
    @Basic
    @Column(name = "amount")
    private BigDecimal amount;
    @Basic
    @Column(name = "status")
    private String status;
    @Basic
    @Column(name = "reminder_sent")
    private byte reminderSent;

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

    public Long getClaimId() {
        return claimId;
    }

    public void setClaimId(Long claimId) {
        this.claimId = claimId;
    }

    public Date getDueDate() {
        return dueDate;
    }

    public void setDueDate(Date dueDate) {
        this.dueDate = dueDate;
    }

    public BigDecimal getAmount() {
        return amount;
    }

    public void setAmount(BigDecimal amount) {
        this.amount = amount;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public byte getReminderSent() {
        return reminderSent;
    }

    public void setReminderSent(byte reminderSent) {
        this.reminderSent = reminderSent;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        PaymentTrackingEntity that = (PaymentTrackingEntity) o;
        return reminderSent == that.reminderSent && Objects.equals(id, that.id) && Objects.equals(policyContractId, that.policyContractId) && Objects.equals(claimId, that.claimId) && Objects.equals(dueDate, that.dueDate) && Objects.equals(amount, that.amount) && Objects.equals(status, that.status);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, policyContractId, claimId, dueDate, amount, status, reminderSent);
    }
}
